import React, { useState } from "react";
import logo from "./image/smct_group.png";
import { cardsData } from "./data";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCards = cardsData.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="flex w-full py-3 px-5 bg-blue-700">
        <div className="flex items-center p-2">
          <img
            src={logo}
            alt="SMCT Group of Companies Logo"
            className="w-32 md:w-60"
          />
        </div>
        <div className="p-2 flex flex-col justify-center">
          <h5 className="text-base md:text-2xl font-medium text-white">
            Strong Moto Centrum Group of Companies
          </h5>
          <h2 className="text-lg md:text-4xl font-bold text-white">
            INNOVATION HUB
          </h2>
        </div>
      </div>
      <div className="p-10">
        <div className="mb-10 w-full flex flex-col items-center">
          <h4 className="mb-2 text-base text-[#333] md:text-3xl">Browse systems to get started...</h4>
          <label className="input input-bordered flex items-center gap-2 w-[70%]">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 flex-wrap gap-5 justify-items-center">
          {filteredCards.map((card, index) => (
            <div
              key={index}
              onClick={() => window.open(card.link, "_blank")}
              className="card border-2 border-[#333] bg-base-100 w-full shadow-xl hover:shadow-3xl hover:border-2 hover:border-black hover:-translate-x-2 hover:-translate-y-2 hover:scale-95 duration-75 transition-all cursor-pointer"
            >
              <figure className="p-5">
                <img src={card.imgSrc} alt={card.title} className="rounded-lg" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{card.title}</h2>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;