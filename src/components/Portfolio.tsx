import { useState } from "react";

const categories = ["ВСЕ", "НАВЕСЫ", "ВОРОТА", "БЕСЕДКИ", "КОЗЫРЬКИ", "ЛЕСТНИЦЫ", "ЗАБОРЫ"];

const items = [
  {
    id: 1,
    category: "НАВЕСЫ",
    image: "https://cdn.poehali.dev/projects/200825d2-723d-458f-b370-2654d41822dd/files/819a32a9-2c6c-4af6-8bb4-1b09bc630860.jpg",
    title: "Навес из профильной трубы",
  },
  {
    id: 2,
    category: "ВОРОТА",
    image: "https://cdn.poehali.dev/projects/200825d2-723d-458f-b370-2654d41822dd/files/b6b0b372-a7e4-48eb-a087-dc24fe94ff5e.jpg",
    title: "Кованые распашные ворота",
  },
  {
    id: 3,
    category: "БЕСЕДКИ",
    image: "https://cdn.poehali.dev/projects/200825d2-723d-458f-b370-2654d41822dd/files/a64d3513-f78f-4308-97cd-06308e062da9.jpg",
    title: "Металлическая беседка",
  },
  {
    id: 4,
    category: "КОЗЫРЬКИ",
    image: "https://cdn.poehali.dev/projects/200825d2-723d-458f-b370-2654d41822dd/files/819a32a9-2c6c-4af6-8bb4-1b09bc630860.jpg",
    title: "Козырёк над входом",
  },
  {
    id: 5,
    category: "ЛЕСТНИЦЫ",
    image: "https://cdn.poehali.dev/projects/200825d2-723d-458f-b370-2654d41822dd/files/b6b0b372-a7e4-48eb-a087-dc24fe94ff5e.jpg",
    title: "Металлическая лестница",
  },
  {
    id: 6,
    category: "ЗАБОРЫ",
    image: "https://cdn.poehali.dev/projects/200825d2-723d-458f-b370-2654d41822dd/files/a64d3513-f78f-4308-97cd-06308e062da9.jpg",
    title: "Секционный металлический забор",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState("ВСЕ");

  const filtered = active === "ВСЕ" ? items : items.filter((i) => i.category === active);

  return (
    <div className="bg-white px-6 py-16 lg:px-12 lg:py-20">
      <p className="uppercase text-xs tracking-widest text-neutral-500 mb-2">
        ВЫПОЛНЕННЫЕ ОБЪЕКТЫ
      </p>
      <h2 className="text-5xl md:text-6xl font-black text-neutral-900 mb-10" style={{ fontFamily: "Montserrat, sans-serif" }}>
        Наши работы
      </h2>

      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 text-xs uppercase tracking-widest border font-medium transition-colors duration-200 ${
              active === cat
                ? "bg-black text-white border-black"
                : "bg-white text-neutral-800 border-neutral-300 hover:border-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
        {filtered.map((item) => (
          <div key={item.id} className="relative overflow-hidden group aspect-[4/3]">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white text-xs uppercase tracking-widest mb-1 opacity-80">
                {item.category}
              </p>
              <p className="text-white font-bold text-base">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
