export default function Footer() {
  return (
    <div className="bg-neutral-950 border-t border-neutral-900">
      {/* Big transparent brand name */}
      <div className="relative overflow-hidden py-4">
        <div className="flex flex-col">
          <h1
            className="text-[28vw] leading-[0.85] font-black tracking-tight select-none text-center"
            style={{ color: "rgba(255,255,255,0.06)" }}
          >
            МЕТАЛЛ
          </h1>
          <h1
            className="text-[28vw] leading-[0.85] font-black tracking-tight select-none text-center"
            style={{ color: "rgba(255,255,255,0.04)" }}
          >
            СТРОЙ
          </h1>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-6 pb-8 sm:px-10 flex flex-col sm:flex-row justify-between items-center gap-3 text-neutral-600 text-sm">
        <p>© {new Date().getFullYear()} МеталлСтрой Краснодар. Все права защищены.</p>
        <a href="#" className="hover:text-neutral-400 transition-colors">Политика конфиденциальности</a>
      </div>
    </div>
  );
}