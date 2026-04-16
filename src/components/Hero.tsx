import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/200825d2-723d-458f-b370-2654d41822dd/files/819a32a9-2c6c-4af6-8bb4-1b09bc630860.jpg"
          alt="Навес из металлоконструкций"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-sm uppercase tracking-widest mb-4 opacity-80">Краснодар</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight">
          НАВЕСЫ И<br />МЕТАЛЛО­КОНСТРУКЦИИ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-10">
          Изготовим и установим навес, козырёк, ворота или любую металлоконструкцию под ваши размеры — быстро, надёжно, с гарантией
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-black px-8 py-3 uppercase text-sm tracking-wide font-semibold hover:bg-neutral-200 transition-colors duration-300"
        >
          Получить расчёт
        </a>
      </div>
    </div>
  );
}