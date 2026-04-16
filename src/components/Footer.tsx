export default function Footer() {
  return (
    <div className="bg-neutral-950 border-t border-neutral-900">
      {/* Big transparent brand name */}
      <div className="relative overflow-hidden py-8 sm:py-10">
        <h1
          className="text-[22vw] leading-none font-black tracking-tight text-center select-none"
          style={{ color: "rgba(255,255,255,0.06)" }}
        >
          МЕТАЛЛСТРОЙ
        </h1>
      </div>

      {/* Bottom bar */}
      <div className="px-6 pb-8 sm:px-10 flex flex-col sm:flex-row justify-between items-center gap-3 text-neutral-600 text-sm">
        <p>© {new Date().getFullYear()} МеталлСтрой Краснодар. Все права защищены.</p>
        <a href="#" className="hover:text-neutral-400 transition-colors">Политика конфиденциальности</a>
      </div>
    </div>
  );
}
