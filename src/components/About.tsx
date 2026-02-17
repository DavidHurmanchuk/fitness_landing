export default function About() {
  return (
    <section className="py-20 bg-[#373637]">
      <div className="px-16 mx-auto max-w-7xl">
        <div className="flex items-end mb-10">
          <div className="flex flex-col items-start mr-6 leading-tight shrink-0">
            <span className="text-[#5ACAFA] text-xs font-semibold tracking-widest uppercase mb-1">
              СТАЛЕВА ПУМА:
            </span>
            <h2 className="text-5xl font-bold tracking-tight text-white">
              МІСЦЕ ЗМІН
            </h2>
          </div>
          <div className="flex-1 h-0.5 bg-[#5ACAFA] mb-2"></div>
        </div>

        <div className="flex items-start gap-16">
          <div className="w-[55%]">
            <p className="mb-5 text-xl leading-relaxed text-gray-300">
              Ласкаво просимо до «Сталева Пума» — нового фітнес-клубу, де
              сучасність
              <br /> зустрічається з професіоналізмом! У нас ви знайдете
              найновіше
              <br /> обладнання, просторі тренажерні зали та комфортну атмосферу
              для
              <br /> тренувань будь-якого рівня.
            </p>
            <p className="mb-5 text-xl leading-relaxed text-gray-300">
              Наші професійні тренери допоможуть досягти ваших цілей, а групові
              <br /> заняття зроблять тренування ще цікавішими та ефективнішими.
            </p>
            <p className="mb-12 text-xl leading-relaxed text-gray-300">
              Натиснувши на кнопку «Розклад», ви зможете детально познайомитись
              з
              <br /> годинами у які ми радо чекатимемо вас.
            </p>
            <button className="px-8 mt-24 py-3 text-sm font-semibold tracking-widest transition border-2 hover:bg-zinc-700 border-[#5ACAFA] text-[#5ACAFA] cursor-pointer">
              ПРО КЛУБ
            </button>
          </div>

          <div className="relative flex-1 h-80">
            <div className="absolute top-0 right-0 overflow-hidden rounded h-72 w-72">
              <img
                src="src/assets/about_man.jpg"
                alt="About Man"
                className="object-cover object-top w-full h-full"
              />
            </div>
            <div className="absolute z-10 overflow-hidden rounded right-54 top-20 w-60 h-60">
              <img
                src="src/assets/about_girl.jpg"
                alt="About Girl"
                className="object-cover object-top w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
