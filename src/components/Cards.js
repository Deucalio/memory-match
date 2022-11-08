import React, { useEffect, useState } from "react";

const Cards = () => {
  /* Randomize array in-place using Durstenfeld shuffle algorithm */
  const shuffleArray = (
    array = [0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7]
  ) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const ImagesList = [
    "frogies",
    "settledSkeleton",
    "teddy",
    "trickNTreat",
    "UnsettledSkeleton",
    "vampireQueen",
    "venomSpiderMan",
    "wholesomeSpiderMan",
  ];

  const [clickedCards, setClickedCards] = useState([]);
  const [cardDisabled, setCardDisabled] = useState(false);
  const [Images, setImages] = useState([]);
  const [Indexes, setIndexes] = useState(shuffleArray());


  useEffect(() => {
    const matchCard = () => {
      const [card1, card2] = clickedCards;
      if (clickedCards.length >= 2) {
        setCardDisabled(true);
        console.log(card1, "\n", card2);
      } else {
        return "no card";
      }
    };
    matchCard();
  }, [clickedCards]);

  const flipCard = (clickedCard) => {
    const [frontCard, backCard] = clickedCard.children;
    frontCard.style.transform = "rotateY(180deg)";
    backCard.style.transform = "rotate(0)";

    setClickedCards((prevCards) => [...prevCards, clickedCard]);

    setTimeout(() => {
      frontCard.style.transform = "";
      backCard.style.transform = "";
      setClickedCards([]);
      setCardDisabled(false);
    }, 2000);
  };

  const handleClick = (e) => {
    const clickedBtn = e.target.parentElement;
    flipCard(clickedBtn);
  };
  return (
    <div className="card-wrapper xl:x-gap-1 container mx-auto grid grid-cols-4 gap-2 px-4 mt-2 md:w-5/6 lg:y-gap-2 lg:px-36">
      <div
        onClick={handleClick}
        className={`card h-28 xl:w-44 cursor-pointer ${
          cardDisabled ? "pointer-events-none" : ""
        }`}
      >
        <div className="card__side card__side--front card__side--front-1 h-full rounded-lg bg-cover bg-center"></div>
        <div style={{backgroundImage: `url(/images/${ImagesList[Indexes[0]]}.jpg)`}} className="card__side card__side--back card__side--back-1 h-full rounded-lg bg-cover bg-center"></div>
      </div>
      <div
        onClick={handleClick}
        className={`card h-28 xl:w-44 cursor-pointer ${
          cardDisabled ? "pointer-events-none" : ""
        }`}
      >
        <div className="card__side card__side--front card__side--front-1 h-full rounded-lg bg-cover bg-center"></div>
        <div style={{backgroundImage: `url(/images/${ImagesList[Indexes[1]]}.jpg)`}} className="card__side card__side--back card__side--back-1 h-full rounded-lg bg-cover bg-center"></div>
      </div>
      <div
        onClick={handleClick}
        className={`card h-28 xl:w-44 cursor-pointer ${
          cardDisabled ? "pointer-events-none" : ""
        }`}
      >
        <div className="card__side card__side--front card__side--front-1 h-full rounded-lg bg-cover bg-center"></div>
        <div style={{backgroundImage: `url(/images/${ImagesList[Indexes[2]]}.jpg)`}} className="card__side card__side--back card__side--back-1 h-full rounded-lg bg-cover bg-center"></div>
      </div>
      <div
        onClick={handleClick}
        className={`card h-28 xl:w-44 cursor-pointer ${
          cardDisabled ? "pointer-events-none" : ""
        }`}
      >
        <div className="card__side card__side--front card__side--front-1 h-full rounded-lg bg-cover bg-center"></div>
        <div style={{backgroundImage: `url(/images/${ImagesList[Indexes[3]]}.jpg)`}} className="card__side card__side--back card__side--back-1 h-full rounded-lg bg-cover bg-center"></div>
      </div>

      <div
        onClick={handleClick}
        className={`card h-28 xl:w-44 cursor-pointer ${
          cardDisabled ? "pointer-events-none" : ""
        }`}
      >
        <div className="card__side card__side--front card__side--front-1 h-full rounded-lg bg-cover bg-center"></div>
        <div style={{backgroundImage: `url(/images/${ImagesList[Indexes[4]]}.jpg)`}} className="card__side card__side--back card__side--back-1 h-full rounded-lg bg-cover bg-center"></div>
      </div>
      <div
        onClick={handleClick}
        className={`card h-28 xl:w-44 cursor-pointer ${
          cardDisabled ? "pointer-events-none" : ""
        }`}
      >
        <div className="card__side card__side--front card__side--front-1 h-full rounded-lg bg-cover bg-center"></div>
        <div style={{backgroundImage: `url(/images/${ImagesList[Indexes[5]]}.jpg)`}} className="card__side card__side--back card__side--back-1 h-full rounded-lg bg-cover bg-center"></div>
      </div>
      <div
        onClick={handleClick}
        className={`card h-28 xl:w-44 cursor-pointer ${
          cardDisabled ? "pointer-events-none" : ""
        }`}
      >
        <div className="card__side card__side--front card__side--front-1 h-full rounded-lg bg-cover bg-center"></div>
        <div style={{backgroundImage: `url(/images/${ImagesList[Indexes[6]]}.jpg)`}} className="card__side card__side--back card__side--back-1 h-full rounded-lg bg-cover bg-center"></div>
      </div>
      <div
        onClick={handleClick}
        className={`card h-28 xl:w-44 cursor-pointer ${
          cardDisabled ? "pointer-events-none" : ""
        }`}
      >
        <div className="card__side card__side--front card__side--front-1 h-full rounded-lg bg-cover bg-center"></div>
        <div style={{backgroundImage: `url(/images/${ImagesList[Indexes[7]]}.jpg)`}} className="card__side card__side--back card__side--back-1 h-full rounded-lg bg-cover bg-center"></div>
      </div>

      <div
        onClick={handleClick}
        className={`card h-28 xl:w-44 cursor-pointer ${
          cardDisabled ? "pointer-events-none" : ""
        }`}
      >
        <div className="card__side card__side--front card__side--front-1 h-full rounded-lg bg-cover bg-center"></div>
        <div style={{backgroundImage: `url(/images/${ImagesList[Indexes[8]]}.jpg)`}} className="card__side card__side--back card__side--back-1 h-full rounded-lg bg-cover bg-center"></div>
      </div>
      <div
        onClick={handleClick}
        className={`card h-28 xl:w-44 cursor-pointer ${
          cardDisabled ? "pointer-events-none" : ""
        }`}
      >
        <div className="card__side card__side--front card__side--front-1 h-full rounded-lg bg-cover bg-center"></div>
        <div style={{backgroundImage: `url(/images/${ImagesList[Indexes[9]]}.jpg)`}} className="card__side card__side--back card__side--back-1 h-full rounded-lg bg-cover bg-center"></div>
      </div>
      <div
        onClick={handleClick}
        className={`card h-28 xl:w-44 cursor-pointer ${
          cardDisabled ? "pointer-events-none" : ""
        }`}
      >
        <div className="card__side card__side--front card__side--front-1 h-full rounded-lg bg-cover bg-center"></div>
        <div style={{backgroundImage: `url(/images/${ImagesList[Indexes[10]]}.jpg)`}} className="card__side card__side--back card__side--back-1 h-full rounded-lg bg-cover bg-center"></div>
      </div>
      <div
        onClick={handleClick}
        className={`card h-28 xl:w-44 cursor-pointer ${
          cardDisabled ? "pointer-events-none" : ""
        }`}
      >
        <div className="card__side card__side--front card__side--front-1 h-full rounded-lg bg-cover bg-center"></div>
        <div style={{backgroundImage: `url(/images/${ImagesList[Indexes[11]]}.jpg)`}} className="card__side card__side--back card__side--back-1 h-full rounded-lg bg-cover bg-center"></div>
      </div>

      <div
        onClick={handleClick}
        className={`card h-28 xl:w-44 cursor-pointer ${
          cardDisabled ? "pointer-events-none" : ""
        }`}
      >
        <div className="card__side card__side--front card__side--front-1 h-full rounded-lg bg-cover bg-center"></div>
        <div style={{backgroundImage: `url(/images/${ImagesList[Indexes[12]]}.jpg)`}} className="card__side card__side--back card__side--back-1 h-full rounded-lg bg-cover bg-center"></div>
      </div>
      <div
        onClick={handleClick}
        className={`card h-28 xl:w-44 cursor-pointer ${
          cardDisabled ? "pointer-events-none" : ""
        }`}
      >
        <div className="card__side card__side--front card__side--front-1 h-full rounded-lg bg-cover bg-center"></div>
        <div style={{backgroundImage: `url(/images/${ImagesList[Indexes[13]]}.jpg)`}} className="card__side card__side--back card__side--back-1 h-full rounded-lg bg-cover bg-center"></div>
      </div>
      <div
        onClick={handleClick}
        className={`card h-28 xl:w-44 cursor-pointer ${
          cardDisabled ? "pointer-events-none" : ""
        }`}
      >
        <div className="card__side card__side--front card__side--front-1 h-full rounded-lg bg-cover bg-center"></div>
        <div style={{backgroundImage: `url(/images/${ImagesList[Indexes[14]]}.jpg)`}} className="card__side card__side--back card__side--back-1 h-full rounded-lg bg-cover bg-center"></div>
      </div>
      <div
        onClick={handleClick}
        className={`card h-28 xl:w-44 cursor-pointer ${
          cardDisabled ? "pointer-events-none" : ""
        }`}
      >
        <div className="card__side card__side--front card__side--front-1 h-full rounded-lg bg-cover bg-center"></div>
        <div style={{backgroundImage: `url(/images/${ImagesList[Indexes[15]]}.jpg)`}} className="card__side card__side--back card__side--back-1 h-full rounded-lg bg-cover bg-center"></div>
      </div>
    </div>
  );
};

export default Cards;
