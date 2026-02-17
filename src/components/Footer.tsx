export default function Footer() {
  return (
    <footer className="py-8 bg-[#121212] border-t border-zinc-900 font-sans">
      <div className="flex flex-col items-center gap-6 px-16 mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center justify-center gap-6">
            <span className="text-lg font-medium">+38 063-63-64-320</span>

            <div className="flex items-center justify-center overflow-hidden h-15 w-15">
              <img
                src="src/assets/insta_logo.png"
                alt="Instagram"
                className="h-15 w-15"
              />
            </div>

            <div className="flex items-center justify-center overflow-hidden h-30 w-45">
              <img
                src="src/assets/logo_test_task.png"
                alt="Logo"
                className="h-30 w-45"
              />
            </div>

            <div className="flex items-center justify-center overflow-hidden h-15 w-15">
              <img
                src="src/assets/facebook_logo.png"
                alt="Facebook"
                className="h-15 w-15"
              />
            </div>

            <div className="flex flex-col text-lg font-medium">
              <span>м. Київ, Пр‑т</span>
              <span>Берестейський, 131‑А</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
          <span>©2025 Copyright by steel puma</span>
          <span>|</span>
          <span className="underline cursor-pointer">Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
}
