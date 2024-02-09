import React from "react";

// eslint-disable-next-line react/prop-types
function Card({ elem, handleClick, index }) {
  // eslint-disable-next-line react/prop-types
  const { image, name, artist, added } = elem;

  return (
    <>
      <div className="w-60 bg-zinc-100 p-4 rounded-md flex gap-4 ph-10 relative mt-10">
        <div className="w-20 h-20 bg-orange-600 rounded-md">
          <img
            className="w-full h-full object-cover overflow-hidden"
            src={image}
            alt="songPNG"
          />
        </div>
        <div className="">
          <h3 className="text-xl leading-none font-semibold">{name}</h3>
          <h6 className="text-sm mt-2">{artist}</h6>
        </div>
        <button
          onClick={() => handleClick(index)}
          className={`px-4 py-3 ${added ? "bg-teal-500" : "bg-orange-600"}
        absolute text-white text-sm rounded-full bottom-0 left-1/2 translate-y-[50%] whitespace-nowrap`}
        >
          {added ? "Added" : "ADD to Favourite"}
        </button>
      </div>
    </>
  );
}

export default Card;
