export function S3photo() {
  const photo = [
    {
      image: "/barnaby.jpg",
      title: "Summer Garden Stroll",
      breed: "Corgi Companion",
    },
    {
      image: "/milo.jpg",
      title: "Curious Head-tilt",
      breed: "French Bulldog",
    },
    {
      image: "/archie.jpg",
      title: "Sunlit Afternoon",
      breed: "Golden Retriever",
    },
    {
      image: "/extra.jpg",
      title: "Forest Wanderer",
      breed: "Aussie Shepherd",
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-4">
      {photo.map((items) => (
        <Image items={items} key={items.breed} />
      ))}
    </div>
  );
}

function Image({ items }) {
  return (
    <div className="group relative h-80 rounded-3xl overflow-hidden bg-zinc-900 shadow-md">
      <img
        alt=""
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        src={items.image}
      />
      <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
        <div>
          <p className="text-stone-200 font-semibold text-sm">{items.title}</p>
          <p className="text-amber-300 font-semibold text-xs">{items.breed}</p>
        </div>
      </div>
    </div>
  );
}
