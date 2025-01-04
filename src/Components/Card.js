import React from "react";

function Card({ img, name }) {
  return (
    <>
      {" "}
      <div className="w-1/4 h-1/4 p-4">
        <div
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "150px",
            width: "285px",
            border: "3px solid gray",
          }}
        ></div>{" "}
        <p className="bg-black text-white text-s w-60px text-center ">{name}</p>
      </div>
    </>
  );
}

export default Card;
