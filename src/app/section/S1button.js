import { Explore, Show } from "../icons/section1Icon";

export function S1button() {
  return (
    <div className="flex flex-wrap items-center gap-4 pt-2">
      <button
        className="inline-flex items-center gap-1 px-10 py-4 rounded-full bg-amber-500 text-amber-950 font-semibold text-sm transition-transform hover:scale-105 active:scale-95 shadow-md"
        id="shuffleHeroBtn"
        type="button"
      >
        <Show/>
        <span>Show Another</span>
      </button>
      <a
        className="inline-flex items-center gap-1 px-6 py-4 rounded-full bg-zinc-900 text-stone-200 font-semibold text-sm hover:bg-zinc-800 transition-colors"
        href="#breeds"
      >
        <span>Explore Breeds</span>
        <Explore/>
      </a>
    </div>
  );
}
