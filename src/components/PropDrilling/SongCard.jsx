import React from "react";
import { MdDone } from "react-icons/md";

function SongCard({ index, props, handleClick }) {
  const { image, songName, artist, added } = props;

  return (
    <div className="relative h-52 w-96 mb-12 rounded-lg shadow-md">
      <div className="h-full w-full rounded-lg overflow-hidden flex items-center gap-5 bg-white text-black">
        <img className="h-full w-1/2 object-cover" src={image} />
        <div>
          <h1 className="text-2xl font-semibold">{songName}</h1>
          <h2>- {artist}</h2>
        </div>
      </div>
      <button
        onClick={() => handleClick(index)}
        className={`absolute bottom-0 translate-y-[40%] left-1/2 -translate-x-[50%] px-4 py-3 ${
          added === false ? "bg-orange-500" : "bg-teal-500"
        } text-white rounded-full shadow-lg`}
      >
        {added === false ? (
          "Add to Favourites"
        ) : (
          <span className="flex items-center gap-2">Added {<MdDone />}</span>
        )}
      </button>
    </div>
  );
}

export default SongCard;
