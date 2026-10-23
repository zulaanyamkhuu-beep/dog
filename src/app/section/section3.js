import { Icon } from "../icons/section3Icon";
import { S3photo } from "./S3gallery";
import { S3hero } from "./S3hero";

export function Section3() {

  return (
    <section className="bg-zinc-950 font-sans text-base text-stone-200 w-full px-4 lg:px-8 py-10"
      id="gallery">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 items-center">

        <S3hero/>

        <S3photo/>
           
        <div className="pt-4">
          <button
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-zinc-900 text-stone-200 font-semibold text-sm hover:bg-zinc-800 transition-transform active:scale-95 shadow-md"
            id="loadMoreBtn"
            type="button"
          >
            <span>🐾</span>
            <span>Show More Pups</span>
            <Icon/>
          </button>
        </div>
      </div>
    </section>
  );
}

