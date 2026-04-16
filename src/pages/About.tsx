import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Header */}
      <header className="px-6 py-6 sm:px-10 flex justify-between items-center border-b border-neutral-900">
        <Link to="/" className="text-white text-sm uppercase tracking-wide font-bold">
          МеталлСтрой
        </Link>
        <nav className="flex gap-8">
          <Link to="/#about" className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm">
            Услуги
          </Link>
          <Link to="/" className="text-neutral-400 hover:text-white transition-colors duration-300 uppercase text-sm">
            О нас
          </Link>
          <Link to="/#contact" className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm">
            Контакты
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <div className="px-6 sm:px-10 pt-16 pb-12 max-w-5xl mx-auto">
        <p className="uppercase text-xs tracking-widest text-neutral-500 mb-4">О компании</p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-0">
          МеталлСтрой
        </h1>
      </div>

      {/* Divider */}
      <div className="px-6 sm:px-10 max-w-5xl mx-auto">
        <div className="h-px bg-neutral-800 w-full" />
      </div>

      {/* Content */}
      <div className="px-6 sm:px-10 py-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — main text */}
          <div className="flex flex-col gap-6 text-neutral-300 text-base leading-relaxed">
            <p>
              Компания «МеталлСтрой» — это производственное предприятие из Краснодара, специализирующееся на изготовлении и монтаже металлоконструкций любой сложности. Мы работаем с частными заказчиками, бизнесом и промышленными объектами, обеспечивая полный цикл — от проектирования до установки на объекте.
            </p>
            <p>
              За годы работы мы реализовали десятки проектов: от каркасов зданий и складских помещений до навесов, ангаров и нестандартных конструкций по индивидуальным чертежам. В основе нашей работы — точность, соблюдение сроков и понятный результат для клиента.
            </p>
            <p>
              Собственное производство позволяет нам контролировать качество на каждом этапе и предлагать оптимальные решения по цене и срокам. Мы используем современное оборудование и проверенные материалы, что гарантирует надёжность и долговечность конструкций.
            </p>
            <p className="text-white font-medium">
              «МеталлСтрой» — это не просто производство, а команда, которая берёт на себя ответственность за результат и доводит проект до конца.
            </p>
          </div>

          {/* Right — stats */}
          <div className="flex flex-col gap-8">
            <div className="border border-neutral-800 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl font-black text-white mb-1">500+</p>
                  <p className="text-neutral-500 text-sm">готовых объектов</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-white mb-1">14</p>
                  <p className="text-neutral-500 text-sm">лет на рынке</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-white mb-1">3</p>
                  <p className="text-neutral-500 text-sm">года гарантии</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-white mb-1">1 день</p>
                  <p className="text-neutral-500 text-sm">выезд на замер</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { icon: "Settings", text: "Собственное производство в Краснодаре" },
                { icon: "ShieldCheck", text: "Полный цикл — от проекта до монтажа" },
                { icon: "Clock", text: "Точное соблюдение сроков" },
                { icon: "Wrench", text: "Современное оборудование и материалы" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center shrink-0">
                    <Icon name={icon as "Settings"} size={16} className="text-neutral-300" />
                  </div>
                  <p className="text-neutral-300 text-sm">{text}</p>
                </div>
              ))}
            </div>

            <Link
              to="/#contact"
              className="bg-white text-black rounded-xl px-6 py-4 text-sm font-bold hover:bg-neutral-200 transition-colors duration-300 text-center"
            >
              Обсудить проект
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
