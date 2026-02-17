export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex-1 min-h-screen text-white bg-black"
    >
      <div className="absolute inset-0 z-10">
        <img
          src="/assets/bg_photo.jpg"
          alt="Background"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-20 flex items-center justify-end min-h-screen px-64 mx-auto max-w-7xl">
        <div className="max-w-xl">
          <h1 className="mb-6 font-bold leading-none tracking-tight text-8xl">
            СИЛА.
            <br />
            ФОКУС.
            <br />
            ХАРАКТЕР.
          </h1>
          <p className="mb-10 text-lg text-white/90">
            Перетворіть своє тіло та розум у фітнес клубі "Сталева <br />
            Пума" — де усе готово до початку нового шляху
          </p>
          <div className="flex gap-4">
            <button className="px-10 py-3.5 font-bold bg-[#5ACAFA] text-black hover:bg-[#4AB8E8] transition cursor-pointer text-2xl">
              ЗАПИСАТИСЬ
            </button>
            <button className="px-10 py-3.5 font-bold border-2 border-[#5ACAFA] text-[#5ACAFA] hover:bg-[#5ACAFA]/10 transition cursor-pointer text-2xl">
              ЦІНИ
            </button>
          </div>
        </div>
      </div>

      <img
        src="/assets/manphoto-3.png"
        alt="Athlete"
        className="absolute bottom-0 left-36 z-10 max-h-[105vh] w-auto"
      />
    </section>
  );
}
