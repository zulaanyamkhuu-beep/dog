import { Friend } from "../icons/section1Icon";
import { S1button } from "./S1button";
import { S1feature } from "./S1feature";
import { S1photo } from "./S1photo";

export function Section1() {
  return (
    <section
      className="bg-zinc-950 font-sans text-base text-stone-200 relative isolate w-full px-4 lg:px-8 pt-6 pb-10 overflow-hidden"
      id="discover"
    >
      <div className="absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-amber-300/10 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-80 h-80 rounded-full bg-orange-400/10 blur-3xl pointer-events-none -z-10" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-center">
        <div className="lg:col-span-7 flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-zinc-800 text-amber-300 font-semibold text-xs shadow-sm">
            <span>🐾</span>
            <span>Daily Joy Feed</span>
          </div>
          <h1 className="font-extrabold text-4xl leading-tight sm:text-5xl tracking-tight text-stone-200">
            Meet a New
            <span className="text-amber-500 relative inline-block">
              Friend
              <Friend />
            </span>
          </h1>
          <p className="font-normal text-lg leading-7 text-stone-300 max-w-xl">
            Discover dogs from around the world, one adorable face at a time.
            Pure companionship, heart-melting grins, and gentle spirits.
          </p>
            <S1button/>
            <S1feature/>
        </div>
        <S1photo />
      </div>
    </section>
  );
}

