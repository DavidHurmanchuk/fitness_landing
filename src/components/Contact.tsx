import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "" });

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    alert(`Дякуємо, ${formData.name}! Ми зв'яжемося з вами найближчим часом.`);
    setFormData({ name: "", phone: "" });
  };

  return (
    <section className="py-24 bg-[#373637]">
      <div className="px-16 mx-auto max-w-7xl">
        <div className="flex items-end justify-end gap-6 mb-12">
          <div className="flex-1 h-0.5 bg-[#5ACAFA]"></div>
          <div className="flex flex-col items-start leading-tight">
            <span className="text-[#5ACAFA] text-sm font-semibold tracking-wide">
              НАШІ
            </span>
            <span className="text-4xl font-bold tracking-tight text-white">
              КОНТАКТИ
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12">
          <div className="p-10 border bg-zinc-900 border-zinc-800">
            <h3 className="mb-2 text-lg font-bold tracking-wide">
              ЗАПИСУЙСЯ І СТАВАЙ КРАЩИМ!
            </h3>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="ІМ'Я"
                className="w-full px-4 py-3 text-sm text-black bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="ТЕЛЕФОН"
                className="w-full px-4 py-3 text-sm text-black bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="py-3 text-sm font-semibold tracking-wider transition w-40 h-10 bg-[#5ACAFA] hover:bg-cyan-600 cursor-pointer"
                >
                  ЗАПИСАТИСЬ
                </button>
              </div>
            </form>
          </div>

          <div className="relative">
            <div className="absolute inset-0 border border-zinc-700">
              <img
                src="/assets/map_photo.png"
                alt="Map"
                className="object-cover w-full h-full"
              />
              <div className="absolute -translate-x-5/4 -translate-y-6/4 top-1/2 left-1/2">
                <img
                  src="/assets/mappin.png"
                  alt="Map Pin"
                  className="w-12 h-16"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
