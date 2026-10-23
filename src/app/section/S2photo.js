export function S2photo() {
  const gallery = [
    {
      image: "/barnaby.jpg",
      title: "Pembroke Welsh Corgi",
      name: "Barnaby",
      age: "2 Years Old",
      hobby: "Loves open fields &amp; warm nap spots",
      char1: " Affectionate",
      char2: " Alert",
      char3: "Smart",
    },

    {
      image: "/milo.jpg",
      title: "French Bulldog",
      name: "Milo",
      age: "1.5 Years Old",
      hobby: "Curious couch companion &amp; snore champion",
      char1: " Quiet",
      char2: " Loving",
      char3: " Easygoing",
    },

    {
      image: "/archie.jpg",
      title: "Golden Retriever",
      name: "Archie",
      age: " 3 Years Old",
      hobby: "Radiant park sprinter &amp; swimming enthusiast",
      char1: " Gentle",
      char2: "Devoted",
      char3: "Joyous",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
      {gallery.map((items) => (
        <Section2gallery items={items} key={items.name} />
      ))}
    </div>
  );
}

function Section2gallery({ items }) {
  return (
    <div className="group flex flex-col bg-zinc-900 rounded-3xl p-4 shadow-md hover:-translate-y-1 transition-all duration-300">
      <div className="relative w-full h-64 rounded-3xl overflow-hidden bg-zinc-700">
        <img
          alt=""
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={items.image}
        />
        <div className="absolute top-2 left-2 px-4 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md text-stone-200 font-semibold text-xs">
          {items.title}
        </div>
      </div>
      <div className="flex flex-col gap-1 pt-4">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-xl text-stone-200">{items.name}</h4>
          <span className="text-amber-300 font-semibold text-xs">
            {items.age}
          </span>
        </div>
        <p className="font-normal text-sm leading-5 text-stone-300">
          {items.hobby}
        </p>
        <div className="flex flex-wrap gap-1 pt-1">
          <span className="px-2 py-0.5 rounded-full bg-zinc-800 text-stone-300 font-semibold text-xs">
            {items.char1}
          </span>
          <span className="px-2 py-0.5 rounded-full bg-zinc-800 text-stone-300 font-semibold text-xs">
            {items.char2}
          </span>
          <span className="px-2 py-0.5 rounded-full bg-zinc-800 text-stone-300 font-semibold text-xs">
            {items.char3}
          </span>
        </div>
      </div>
    </div>
  );
}
