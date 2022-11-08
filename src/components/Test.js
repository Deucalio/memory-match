import React, { useEffect, useState, useRef } from "react";

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

const Test = () => {
  const [clickedCards, addClickedCards] = useState([]);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [Images, setImages] = useState([]);

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

  const [Indexes, setIndexes] = useState(shuffleArray());

  useEffect(() => {
    const assignImg = () => {
      const imgName = ImagesList[Indexes.length - 1];
      setIndexes(Indexes.splice(Indexes.length - 1));
      return imgName;
    };
    setImages(assignImg());
  }, [Images, Indexes]);

  useEffect(() => {
    const matchCard = () => {
      if (clickedCards.length === 2) {
        // const{value: value1} = clickedCards
        console.log(clickedCards);
        setBtnDisabled(true);
      }
    };
    matchCard();
  }, [clickedCards]);

  const handleClick = (e) => {
    const clickedBtn = e.target;
    addClickedCards((prevCards) => [...prevCards, clickedBtn]);

    setTimeout(() => {
      addClickedCards([]);
      setBtnDisabled(false);
    }, 2000);
  };

  return (
    <div className="w-3/4 grid grid-cols-2 gap-4 place-items-center p-10 mx-auto mt-32 border-4 border-rose-900 rounded-md">
      <div
        style={{ backgroundImage: `url(/images/teddy.jpg)` }}
        value="1"
        onClick={handleClick}
        className={`${
          btnDisabled ? "pointer-events-none" : ""
        } border-4 border-indigo-400 py-2 w-36 h-20 cursor-pointer`}
      ></div>
      <div
        value="1"
        onClick={handleClick}
        className={`${
          btnDisabled ? "pointer-events-none" : ""
        } border-4 border-indigo-400 py-2 w-36 h-20 cursor-pointer`}
      ></div>
      <div
        value="3"
        onClick={handleClick}
        className={`${
          btnDisabled ? "pointer-events-none" : ""
        } border-4 border-indigo-400 py-2 w-36 h-20 cursor-pointer`}
      ></div>
      <div
        value="3"
        onClick={handleClick}
        className={`${
          btnDisabled ? "pointer-events-none" : ""
        } border-4 border-indigo-400 py-2 w-36 h-20 cursor-pointer`}
      ></div>
    </div>
  );
};

export default Test;
