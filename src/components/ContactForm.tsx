import { useState } from "react";

const CONTACT_URL = "https://functions.poehali.dev/48543467-3f2f-4532-bbb9-e5ba9be19245";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(CONTACT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone }),
      });
      if (res.ok) {
        setStatus("success");
        setName("");
        setPhone("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div id="contact" className="bg-white px-6 py-16 lg:px-16 lg:py-24">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-24">
        <div className="lg:flex-1">
          <p className="uppercase text-xs tracking-widest text-neutral-500 mb-3">
            ОСТАВЬТЕ ЗАЯВКУ
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 leading-tight mb-6">
            Рассчитаем стоимость бесплатно
          </h2>
          <p className="text-neutral-500 text-base leading-relaxed">
            Оставьте имя и телефон — перезвоним в течение 30 минут, уточним детали и назовём точную цену.
          </p>
        </div>

        <div className="lg:flex-1 w-full">
          {status === "success" ? (
            <div className="border border-black p-8 text-center">
              <p className="text-2xl font-bold text-neutral-900 mb-2">Заявка принята!</p>
              <p className="text-neutral-500">Перезвоним вам в течение 30 минут.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black transition-colors duration-200 placeholder:text-neutral-400"
              />
              <input
                type="tel"
                placeholder="Телефон"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black transition-colors duration-200 placeholder:text-neutral-400"
              />
              {status === "error" && (
                <p className="text-red-600 text-sm">Ошибка отправки. Попробуйте ещё раз.</p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-black text-white px-6 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-neutral-800 transition-colors duration-300 disabled:opacity-60"
              >
                {status === "loading" ? "Отправляем..." : "ОТПРАВИТЬ ЗАЯВКУ"}
              </button>
              <p className="text-neutral-400 text-xs">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
