import { Sum } from "../icons/section2Icon";

export function S2hero() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div className="flex flex-col items-start gap-1 max-w-2xl">
        <div className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-zinc-800 text-amber-300 font-semibold text-xs">
          <span>🐾</span>
          <span>BREED COMPENDIUM</span>
        </div>
        <h2 className="font-bold text-3xl leading-tight text-stone-200 tracking-tight">
          Find Your Favorite Breed
        </h2>
        <p className="font-normal text-base leading-6 text-stone-300">
          Choose from hundreds of friendly breeds and see happy pups ready to
          brighten your day.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-2 bg-zinc-900 p-1 rounded-full shadow-sm">
        <div className="relative">
          <select
            aria-label="Select dog breed"
            className="appearance-none bg-zinc-800 text-stone-200 font-semibold text-xs rounded-full pl-4 pr-10 py-1 focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
            id="breedSelect"
          >
            <option value="corgi">Pembroke Welsh Corgi</option>
            <option value="golden">Golden Retriever</option>
            <option value="frenchie">French Bulldog</option>
            <option value="shiba">Shiba Inu</option>
            <option value="samoyed">Samoyed</option>
          </select>
          <Sum/>
        </div>

        <button
          className="px-6 py-1 rounded-full bg-amber-500 text-amber-950 font-semibold text-xs hover:brightness-105 transition-all"
          type="button"
        >
          Show Dogs
        </button>
      </div>
    </div>
  );
}
