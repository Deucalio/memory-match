import React, { useState } from "react";

const Cards = () => {
  const [clickedCards, addClickedCards] = useState([]);

  const matchCard = () => {
    const [card1, card2] = clickedCards;
    if (clickedCards.length === 2) {
      console.log(card1, "\n", card2);
    } else {
      return "no card";
    }
  };

  const flipCard = (clickedCard) => {
    const [frontCard, backCard] = clickedCard.children;
    frontCard.style.transform = "rotateY(180deg)";
    backCard.style.transform = "rotate(0)";

    addClickedCards(prevCards => ([...prevCards, clickedCard]));
    matchCard();

    setTimeout(() => {
      frontCard.style.transform = "";
      backCard.style.transform = "";
      addClickedCards([]);
    }, 1500);
  };

  const handleClick = (e) => {
    const clickedBtn = e.target.parentElement;
    flipCard(clickedBtn);
  };
  return (
    <div className="card-wrapper xl:x-gap-1 container mx-auto mt-5 grid grid-cols-4 gap-2 px-4 pb-4 md:w-5/6 lg:gap-4 lg:px-36">
      <div
        onClick={handleClick}
        className="card h-16 sm:h-28 xl:w-44 cursor-pointer"
      >
        <div className="card__side card__side--front card__side--front-1 h-full rounded-sm bg-cover bg-center"></div>
        <div className="card__side card__side--back card__side--back-1 h-full rounded-sm bg-cover bg-center"></div>
      </div>
      <div
        onClick={handleClick}
        className="card h-16 sm:h-28 xl:w-44 cursor-pointer"
      >
        <div className="card__side card__side--front card__side--front-1 h-full rounded-sm bg-cover bg-center"></div>
        <div className="card__side card__side--back card__side--back-1 h-full rounded-sm bg-cover bg-center"></div>
      </div>
      <div
        onClick={handleClick}
        className="card h-16 sm:h-28 xl:w-44 cursor-pointer"
      >
        <div className="card__side card__side--front card__side--front-1 h-full rounded-sm bg-cover bg-center"></div>
        <div className="card__side card__side--back card__side--back-1 h-full rounded-sm bg-cover bg-center"></div>
      </div>
      <div
        onClick={handleClick}
        className="card h-16 sm:h-28 xl:w-44 cursor-pointer"
      >
        <div className="card__side card__side--front card__side--front-1 h-full rounded-sm bg-cover bg-center"></div>
        <div className="card__side card__side--back card__side--back-1 h-full rounded-sm bg-cover bg-center"></div>
      </div>

      <div
        onClick={handleClick}
        className="card h-16 sm:h-28 xl:w-44 cursor-pointer"
      >
        <div className="card__side card__side--front card__side--front-1 h-full rounded-sm bg-cover bg-center"></div>
        <div className="card__side card__side--back card__side--back-1 h-full rounded-sm bg-cover bg-center"></div>
      </div>
      <div
        onClick={handleClick}
        className="card h-16 sm:h-28 xl:w-44 cursor-pointer"
      >
        <div className="card__side card__side--front card__side--front-1 h-full rounded-sm bg-cover bg-center"></div>
        <div className="card__side card__side--back card__side--back-1 h-full rounded-sm bg-cover bg-center"></div>
      </div>
      <div
        onClick={handleClick}
        className="card h-16 sm:h-28 xl:w-44 cursor-pointer"
      >
        <div className="card__side card__side--front card__side--front-1 h-full rounded-sm bg-cover bg-center"></div>
        <div className="card__side card__side--back card__side--back-1 h-full rounded-sm bg-cover bg-center"></div>
      </div>
      <div
        onClick={handleClick}
        className="card h-16 sm:h-28 xl:w-44 cursor-pointer"
      >
        <div className="card__side card__side--front card__side--front-1 h-full rounded-sm bg-cover bg-center"></div>
        <div className="card__side card__side--back card__side--back-1 h-full rounded-sm bg-cover bg-center"></div>
      </div>

      <div
        onClick={handleClick}
        className="card h-16 sm:h-28 xl:w-44 cursor-pointer"
      >
        <div className="card__side card__side--front card__side--front-1 h-full rounded-sm bg-cover bg-center"></div>
        <div className="card__side card__side--back card__side--back-1 h-full rounded-sm bg-cover bg-center"></div>
      </div>
      <div
        onClick={handleClick}
        className="card h-16 sm:h-28 xl:w-44 cursor-pointer"
      >
        <div className="card__side card__side--front card__side--front-1 h-full rounded-sm bg-cover bg-center"></div>
        <div className="card__side card__side--back card__side--back-1 h-full rounded-sm bg-cover bg-center"></div>
      </div>
      <div
        onClick={handleClick}
        className="card h-16 sm:h-28 xl:w-44 cursor-pointer"
      >
        <div className="card__side card__side--front card__side--front-1 h-full rounded-sm bg-cover bg-center"></div>
        <div className="card__side card__side--back card__side--back-1 h-full rounded-sm bg-cover bg-center"></div>
      </div>
      <div
        onClick={handleClick}
        className="card h-16 sm:h-28 xl:w-44 cursor-pointer"
      >
        <div className="card__side card__side--front card__side--front-1 h-full rounded-sm bg-cover bg-center"></div>
        <div className="card__side card__side--back card__side--back-1 h-full rounded-sm bg-cover bg-center"></div>
      </div>

      <div
        onClick={handleClick}
        className="card h-16 sm:h-28 xl:w-44 cursor-pointer"
      >
        <div className="card__side card__side--front card__side--front-1 h-full rounded-sm bg-cover bg-center"></div>
        <div className="card__side card__side--back card__side--back-1 h-full rounded-sm bg-cover bg-center"></div>
      </div>
      <div
        onClick={handleClick}
        className="card h-16 sm:h-28 xl:w-44 cursor-pointer"
      >
        <div className="card__side card__side--front card__side--front-1 h-full rounded-sm bg-cover bg-center"></div>
        <div className="card__side card__side--back card__side--back-1 h-full rounded-sm bg-cover bg-center"></div>
      </div>
      <div
        onClick={handleClick}
        className="card h-16 sm:h-28 xl:w-44 cursor-pointer"
      >
        <div className="card__side card__side--front card__side--front-1 h-full rounded-sm bg-cover bg-center"></div>
        <div className="card__side card__side--back card__side--back-1 h-full rounded-sm bg-cover bg-center"></div>
      </div>
      <div
        onClick={handleClick}
        className="card h-16 sm:h-28 xl:w-44 cursor-pointer"
      >
        <div className="card__side card__side--front card__side--front-1 h-full rounded-sm bg-cover bg-center"></div>
        <div className="card__side card__side--back card__side--back-1 h-full rounded-sm bg-cover bg-center"></div>
      </div>
    </div>
  );
};

export default Cards;
