const services = [
  {
    title: "СИЛОВІ ТРЕНУВАННЯ",
    description: "основа будь-якого залу. Тільки в нас вона краща)",
    icon: { src: "src/assets/weightlift.png", alt: "Weightlifting" },
  },
  {
    title: "КАРДІО ЗОНА",
    description: "топові бігові доріжки, орбітрек та інші тренажери...",
    icon: { src: "src/assets/healthcare.png", alt: "Healthcare" },
  },
  {
    title: "ГРУПОВІ ЗАНЯТТЯ",
    description: "долучайся до групових занять!",
    icon: { src: "src/assets/yoga.png", alt: "Yoga" },
  },
  {
    title: "ПЕРСОНАЛЬНІ ТРЕНУВАННЯ",
    description:
      "досвідчена команда тренерів готова показати, на що ВИ здатні...",
    icon: { src: "src/assets/gym.png", alt: "Gym" },
  },
];

export default function Services() {
  return (
    <section className="py-24">
      <div className="px-16 mx-auto max-w-7xl">
        <div className="flex items-end justify-center gap-6 mb-16">
          <div className="grow h-0.5 bg-[#5ACAFA]"></div>
          <div className="leading-tight text-center">
            <span className="block text-[#5ACAFA] text-sm font-semibold tracking-wide">
              ГЛЯНЬТЕ
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-white">
              У НАС ВИ ЗНАЙДЕТЕ
            </h2>
          </div>
          <div className="grow h-0.5 bg-[#5ACAFA]"></div>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-8 transition border-[#5ACAFA] border-2 hover:border-cyan-500"
            >
              <h3 className="mb-3 text-xl font-bold tracking-wider text-center">
                {service.title}
              </h3>
              <div className="flex justify-center mb-6">
                <div className="flex items-center justify-center w-20 h-20 overflow-hidden">
                  <img
                    src={service.icon.src}
                    alt={service.icon.alt}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <p className="text-lg leading-relaxed text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-10 py-3 text-sm font-semibold tracking-wide transition bg-transparent border-2 border-cyan-500 hover:bg-cyan-700 text-[#5ACAFA] cursor-pointer">
            ПОДИВИДИСЯ ЦІНУ
          </button>
        </div>
      </div>
    </section>
  );
}
