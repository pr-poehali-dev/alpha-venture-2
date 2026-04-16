import { useState } from "react";
import Icon from "@/components/ui/icon";

const CONTACT_URL = "https://functions.poehali.dev/48543467-3f2f-4532-bbb9-e5ba9be19245";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(CONTACT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, message }),
      });
      if (res.ok) {
        setStatus("success");
        setName("");
        setPhone("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div id="contact" className="bg-neutral-950 px-6 py-16 lg:px-16 lg:py-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-20">
        {/* Left side */}
        <div className="lg:flex-1">
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            Готовы обсудить<br />проект?
          </h2>
          <p className="text-neutral-400 text-base leading-relaxed mb-10">
            Оставьте заявку, и наш инженер свяжется с вами для бесплатной консультации и предварительного расчёта.
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-neutral-800 flex items-center justify-center shrink-0">
                <Icon name="Phone" size={18} className="text-neutral-300" />
              </div>
              <div>
                <p className="text-neutral-500 text-xs mb-0.5">Телефон</p>
                <a href="tel:+79085434550" className="text-white font-semibold text-base hover:text-neutral-300 transition-colors">
                  +7 (908) 543-45-50
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-neutral-800 flex items-center justify-center shrink-0">
                <Icon name="MessageCircle" size={18} className="text-neutral-300" />
              </div>
              <div>
                <p className="text-neutral-500 text-xs mb-0.5">WhatsApp / Telegram</p>
                <a href="tel:+79085434550" className="text-white font-semibold text-base hover:text-neutral-300 transition-colors">
                  +7 (908) 543-45-50
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-neutral-800 flex items-center justify-center shrink-0">
                <Icon name="MapPin" size={18} className="text-neutral-300" />
              </div>
              <div>
                <p className="text-neutral-500 text-xs mb-0.5">Адрес производства</p>
                <p className="text-white font-semibold text-base">г. Краснодар, ул. Чапаева, 152</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side — form */}
        <div className="lg:flex-1 w-full">
          {status === "success" ? (
            <div className="bg-neutral-900 rounded-2xl p-10 text-center border border-neutral-800">
              <p className="text-2xl font-bold text-white mb-2">Заявка принята!</p>
              <p className="text-neutral-400">Перезвоним вам в течение 30 минут.</p>
            </div>
          ) : (
            <div className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-neutral-300 text-sm">Ваше имя</label>
                  <input
                    type="text"
                    placeholder="Иван Иванов"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-neutral-500 transition-colors placeholder:text-neutral-600"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-neutral-300 text-sm">Номер телефона</label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-neutral-500 transition-colors placeholder:text-neutral-600"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-neutral-300 text-sm">Что нужно сделать?</label>
                  <textarea
                    placeholder="Навес для авто 6х4 метра..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-neutral-500 transition-colors placeholder:text-neutral-600 resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm">Ошибка отправки. Попробуйте ещё раз.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-white text-black rounded-xl px-6 py-4 text-sm font-bold hover:bg-neutral-200 transition-colors duration-300 disabled:opacity-60 mt-1"
                >
                  {status === "loading" ? "Отправляем..." : "Получить расчёт"}
                </button>

                <p className="text-neutral-600 text-xs text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
