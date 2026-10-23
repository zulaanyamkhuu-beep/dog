import { Clock, Paw, Star } from "../icons/section1Icon";

export function S1photo() {
  return (
    <div className="lg:col-span-5 relative">
      <div className="relative bg-zinc-900 p-4 rounded-3xl shadow-xl overflow-hidden group">
        <div className="relative w-full h-105 rounded-3xl overflow-hidden bg-zinc-700">
          <img
            alt=""
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            src="/archie.jpg"
          />
          <div className="absolute top-4 left-4 flex items-center gap-1 px-4 py-1 rounded-full bg-zinc-900/80 backdrop-blur-md text-stone-200 font-semibold text-xs">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span>Golden Retriever</span>
          </div>
          <div className="absolute top-4 right-4 px-4 py-1 rounded-full bg-amber-500 text-amber-950 font-semibold text-xs shadow-sm">
            Gentle Giant
          </div>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
          <div className="absolute bottom-4 inset-x-4 flex items-end justify-between">
            <div>
              <h3 className="font-bold text-2xl text-stone-200">
                Sunny Cooper
              </h3>
              <p className="font-normal text-sm leading-5 text-stone-300">
                Gentle companion • Loves afternoon park fetch
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-zinc-800/90 backdrop-blur-sm flex items-center justify-center text-amber-300 shadow-md">
              <Paw/>
            </div>
          </div>
        </div>
        <div className="mt-4 pt-1 flex items-center justify-between text-stone-300 font-semibold text-xs px-1">
          <span className="flex items-center gap-1">
            <Star/>
            AKC Sporting Group
          </span>
          <span className="flex items-center gap-1">
            <Clock/>
            10–12 Years
          </span>
        </div>
      </div>
    </div>
  );
}
