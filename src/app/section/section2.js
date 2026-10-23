import { Star } from "../icons/section1Icon";
import { S2button } from "./S2button";
import { S2hero } from "./S2hero";
import { S2photo } from "./S2photo";

export function Section2() {

  return (
    <section
      className="font-sans text-base text-stone-200 w-full px-4 lg:px-8 py-10 bg-zinc-900/50"
      id="breeds"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <S2hero/>
        <S2button/>

        <div className="w-full bg-zinc-900 p-6 rounded-3xl shadow-md flex flex-col md:flex-row items-center justify-between gap-4 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-amber-300/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center gap-4 z-10">
            <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-300">
              <Star />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-bold text-xl text-stone-200">
                  Pembroke Welsh Corgi
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-amber-500 text-amber-950 font-semibold text-xs">
                  Top Pick
                </span>
                <span className="px-2 py-0.5 rounded-full bg-zinc-700 text-stone-300 font-semibold text-xs">
                  Great with Kids
                </span>
              </div>
              <p className="font-normal text-sm leading-5 text-stone-300 mt-0.5">
                Playful &amp; Bold • Herding Group • Adaptable Companion
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 z-10 w-full md:w-auto justify-end">
            <div className="hidden sm:flex items-center gap-2 text-stone-300 font-semibold text-xs">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>High Trainability</span>
            </div>
            <button
              className="px-4 py-1 rounded-full bg-zinc-800 text-amber-300 hover:bg-zinc-700 font-semibold text-xs transition-colors"
              type="button"
            >
              Read Breed Guide
            </button>
          </div>
        </div>

        <S2photo/>

      </div>
    </section>
  );
};

