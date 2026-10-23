export function S2button() {
  const buttonText = [
    { text: "Pembroke Welsh Corgi" },
    { text: "Golden Retriever" },
    { text: "French Bulldog" },
    { text: "Shiba Inu" },
    { text: "Samoyed" },
  ];

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-1">
      <button
        className="px-4 py-1 rounded-full bg-amber-500 text-amber-950 font-semibold text-xs whitespace-nowrap shadow-sm"
        type="button"
      >
        All Breeds
      </button>

      {buttonText.map((button) => (
        <Buttonitems button={button} key={button.text} />
      ))}
    </div>
  );
}

function Buttonitems({ button }) {
  return (
    <button
      className="px-4 py-1 rounded-full bg-zinc-900 text-stone-300 hover:text-stone-200 hover:bg-zinc-800 font-semibold text-xs whitespace-nowrap transition-colors"
      type="button"
    >
      {button.text}
    </button>
  );
}