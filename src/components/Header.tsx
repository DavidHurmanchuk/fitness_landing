export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#121212] backdrop-blur-sm">
      <nav className="flex items-center justify-between w-full px-20 py-5">
        <div className="flex items-center">
          <div className="flex items-center justify-center w-40 h-20 overflow-hidden">
            <img
              src="src/assets/logo_test_task.png"
              alt="Fitness Club Logo"
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        <div className="flex items-center gap-10 text-2xl">
          <a
            href="#home"
            className="text-[#5ACAFA] hover:text-white transition"
          >
            ГОЛОВНА
          </a>
          <a
            href="#gallery"
            className="text-[#5ACAFA] hover:text-white transition"
          >
            ГАЛЕРЕЯ
          </a>
          <a
            href="#price"
            className="text-[#5ACAFA] hover:text-white transition"
          >
            ЦІНИ
          </a>
          <a
            href="#table"
            className="text-[#5ACAFA] hover:text-white transition"
          >
            РОЗКЛАД
          </a>
          <a
            href="#news"
            className="text-[#5ACAFA] hover:text-white transition"
          >
            НОВИНИ
          </a>
          <a
            href="#team"
            className="text-[#5ACAFA] hover:text-white transition"
          >
            КОМАНДА
          </a>
          <a
            href="#rules"
            className="text-[#5ACAFA] hover:text-white transition"
          >
            ПРАВИЛА
          </a>
          <button className="ml-4 px-8 py-3 text-xl bg-[#5ACAFA] hover:bg-cyan-600 text-black transition cursor-pointer">
            ЗАПИСАТИСЬ
          </button>
        </div>
      </nav>
    </header>
  );
}
