export default function Featured() {
  const stats = [
    { value: "500+", label: "ГОТОВЫХ ОБЪЕКТОВ" },
    { value: "14 лет", label: "НА РЫНКЕ" },
    { value: "3 года", label: "ГАРАНТИЯ" },
    { value: "1 день", label: "ВЫЕЗД НА ЗАМЕР" },
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      <div className="flex-1 flex flex-col justify-center px-10 py-16 lg:px-16 lg:py-20 lg:max-w-[55%]">
        <p className="uppercase text-xs tracking-widest text-neutral-500 mb-6">
          РАБОТАЕМ В КРАСНОДАРЕ С 2010 ГОДА
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-neutral-900 leading-tight mb-10" style={{ fontFamily: "Montserrat, sans-serif" }}>
          Проектируем, изготавливаем и монтируем навесы, ворота, заборы, козырьки, беседки и любые металлоконструкции — точно в срок и с гарантией.
        </h2>

        <div className="grid grid-cols-2 gap-x-12 gap-y-6 mb-12">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-2xl md:text-3xl font-bold text-neutral-900 leading-none mb-1">
                {s.value}
              </p>
              <p className="text-xs uppercase tracking-widest text-neutral-500">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="inline-block bg-black text-white px-6 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-neutral-800 transition-colors duration-300 w-fit"
        >
          РАССЧИТАТЬ СТОИМОСТЬ
        </a>
      </div>

      <div className="flex-1 lg:max-w-[45%] h-[400px] lg:h-auto">
        <img
          src="https://cdn.poehali.dev/projects/200825d2-723d-458f-b370-2654d41822dd/files/b6b0b372-a7e4-48eb-a087-dc24fe94ff5e.jpg"
          alt="Навес из металлоконструкций"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
