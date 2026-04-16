import json
import os
import smtplib
from email.mime.text import MIMEText
import psycopg2

CORS_HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
}


def handler(event: dict, context) -> dict:
    """Принимает заявку с сайта: сохраняет в БД и отправляет email-уведомление владельцу."""

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": CORS_HEADERS, "body": ""}

    if event.get("httpMethod") != "POST":
        return {"statusCode": 405, "headers": CORS_HEADERS, "body": json.dumps({"error": "Method not allowed"})}

    raw_body = event.get("body") or "{}"
    if isinstance(raw_body, str):
        body = json.loads(raw_body)
    else:
        body = raw_body

    name = (body.get("name") or "").strip()
    phone = (body.get("phone") or "").strip()

    if not name or not phone:
        return {
            "statusCode": 400,
            "headers": CORS_HEADERS,
            "body": json.dumps({"error": "Имя и телефон обязательны"}, ensure_ascii=False),
        }

    schema = os.environ.get("MAIN_DB_SCHEMA", "public")
    conn = psycopg2.connect(os.environ["DATABASE_URL"])
    cur = conn.cursor()
    cur.execute(f"INSERT INTO {schema}.leads (name, phone) VALUES (%s, %s)", (name, phone))
    conn.commit()
    cur.close()
    conn.close()

    notify_email = os.environ.get("NOTIFY_EMAIL", "")
    if notify_email:
        try:
            msg = MIMEText(
                f"Новая заявка с сайта МеталлПро!\n\nИмя: {name}\nТелефон: {phone}",
                "plain",
                "utf-8",
            )
            msg["Subject"] = "Новая заявка с сайта"
            msg["From"] = "noreply@poehali.dev"
            msg["To"] = notify_email
            with smtplib.SMTP("smtp.poehali.dev", 25, timeout=10) as smtp:
                smtp.sendmail("noreply@poehali.dev", [notify_email], msg.as_string())
        except Exception:
            pass

    return {
        "statusCode": 200,
        "headers": CORS_HEADERS,
        "body": json.dumps({"ok": True, "message": "Заявка принята"}, ensure_ascii=False),
    }
