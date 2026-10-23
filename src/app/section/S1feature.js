import { Fire, Smile, Thunder } from "../icons/section1Icon";

export function S1feature() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 w-full max-w-lg">
      <Friendliness />

      <div className="flex flex-col gap-1 p-4 rounded-3xl bg-zinc-900 shadow-sm">
        <div className="flex items-center justify-between text-stone-300 font-semibold text-xs">
          <span>Energy Level</span>
          <Thunder/>
        </div>
        <span className="font-bold text-xl text-stone-200">Vibrant</span>
        <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden mt-1">
          <div className="bg-amber-500 h-full w-4/5 rounded-full" />
        </div>
      </div>

      <Mood />
    </div>
  );
}

function Friendliness() {
  return (
    <div className="flex flex-col gap-1 p-4 rounded-3xl bg-zinc-900 shadow-sm">
      <div className="flex items-center justify-between text-stone-300 font-semibold text-xs">
        <span>Friendliness</span>
        <Smile/>
      </div>
      <span className="font-bold text-xl text-stone-200">10 / 10</span>
      <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden mt-1">
        <div className="bg-amber-500 h-full w-full rounded-full" />
      </div>
    </div>
  );
}

function Mood() {
  return (
    <div className="flex flex-col gap-1 p-4 rounded-3xl bg-zinc-900 shadow-sm">
      <div className="flex items-center justify-between text-stone-300 font-semibold text-xs">
        <span>Mood Boost</span>
        <Fire/>
      </div>
      <span className="font-bold text-xl text-stone-200">Instant</span>
      <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden mt-1">
        <div className="bg-amber-500 h-full w-full rounded-full" />
      </div>
    </div>
  );
}
