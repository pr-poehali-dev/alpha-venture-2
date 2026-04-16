export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/200825d2-723d-458f-b370-2654d41822dd/files/b6b0b372-a7e4-48eb-a087-dc24fe94ff5e.jpg"
          alt="Навес для автомобиля"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Почему выбирают нас</h3>
        <div className="flex flex-col gap-6 mb-8">
          <div>
            <p className="text-lg font-semibold text-neutral-900 mb-1">Собственное производство</p>
            <p className="text-neutral-600">Изготавливаем конструкции на своём оборудовании в Краснодаре — без посредников и переплат</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-neutral-900 mb-1">Монтаж за 1–3 дня</p>
            <p className="text-neutral-600">Выезжаем на замер в день обращения, устанавливаем в кратчайшие сроки</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-neutral-900 mb-1">Гарантия 5 лет</p>
            <p className="text-neutral-600">На все металлоконструкции — официальный гарантийный талон и договор</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-neutral-900 mb-1">Индивидуальный проект</p>
            <p className="text-neutral-600">Любые размеры, формы и материалы — сделаем именно то, что вам нужно</p>
          </div>
        </div>
        <a href="#contact" className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Заказать замер бесплатно
        </a>
      </div>
    </div>
  );
}