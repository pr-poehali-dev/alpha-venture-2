import { useState } from "react";

const categories = ["ВСЕ", "НАВЕСЫ", "ВОРОТА", "БЕСЕДКИ", "КОЗЫРЬКИ", "ЛЕСТНИЦЫ", "ЗАБОРЫ"];

const items = [
  {
    id: 1,
    category: "НАВЕСЫ",
    image: "https://cdn.poehali.dev/projects/200825d2-723d-458f-b370-2654d41822dd/files/42ad21d9-ebf7-49e0-b511-7b900b996494.jpg",
    title: "Навес из профильной трубы",
  },
  {
    id: 2,
    category: "ВОРОТА",
    image: "https://cdn.poehali.dev/projects/200825d2-723d-458f-b370-2654d41822dd/files/c305daf8-eeff-4d1b-9832-9e8c3b68d60f.jpg",
    title: "Кованые распашные ворота",
  },
  {
    id: 3,
    category: "БЕСЕДКИ",
    image: "https://cdn.poehali.dev/projects/200825d2-723d-458f-b370-2654d41822dd/files/6f5ddd0e-4742-4ebf-bfcf-70a97b6a4f17.jpg",
    title: "Металлическая беседка",
  },
  {
    id: 4,
    category: "КОЗЫРЬКИ",
    image: "https://cdn.poehali.dev/projects/200825d2-723d-458f-b370-2654d41822dd/files/b477f027-9050-41b1-853f-ac91562884b5.jpg",
    title: "Козырёк над входом",
  },
  {
    id: 5,
    category: "ЛЕСТНИЦЫ",
    image: "https://cdn.poehali.dev/projects/200825d2-723d-458f-b370-2654d41822dd/files/0c189bc7-d57f-4483-8cb1-89c085ee574c.jpg",
    title: "Металлическая лестница",
  },
  {
    id: 6,
    category: "ЗАБОРЫ",
    image: "https://cdn.poehali.dev/projects/200825d2-723d-458f-b370-2654d41822dd/files/79266d25-8c42-4343-99a9-f173432dd23a.jpg",
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