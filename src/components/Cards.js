import frogies from "../images/frogies.jpg";
import settledSkeleton from "../images/settledSkeleton.jpg";
import teddy from "../images/teddy.jpg";
import trickNTreat from "../images/trickNTreat.jpg";
import unsettledSkeleton from "../images/unsettledSkeleton.jpg";
import vampireQueen from "../images/vampireQueen.jpg";
import venomSpiderMan from "../images/venomSpiderMan.jpg";
import wholesomeSpiderMan from "../images/wholesomeSpiderMan.jpg";

import React, { useEffect, useState, useRef } from "react";

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
    frogies,
    settledSkeleton,
    teddy,
    trickNTreat,
    unsettledSkeleton,
    vampireQueen,
    venomSpiderMan,
    wholesomeSpiderMan,
  ];

  const [clickedCards, setClickedCards] = useState([]);
  const [cardDisabled, setCardDisabled] = useState(false);
  const [Indexes, setIndexes] = useState(shuffleArray());

  const [matches, setMatches] = useState(0);
  const [turns, setTurns] = useState(0);

  const [isMatch, setIsMatch] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  // overlay stuff
  const [isActive, setIsActive] = useState(false);
  const [boolList, setBoolList] = useState(isMatch);

  useEffect(() => {
    const check = () => {
      if (boolList.every((b) => b === true)) {
        setIsActive(true);

        setTimeout(() => {
          setBoolList(boolList.map((b) => (b = false)));
        }, 3500);
      } else {
        setIsActive(false);
      }
    };
    check();
  });

  const ref = useRef(null);

  const getImgSrc = (div) => {
    return Indexes[div.parentElement.id];
  };

  useEffect(() => {
    const matchCard = () => {
      let [card1, card2] = clickedCards;

      // disable parent card right after click then remove the effect
      if (clickedCards.length === 1) {
        card1.classList.add("pointer-events-none");

        setTimeout(() => {
          card1.classList.remove("pointer-events-none");
        }, 2000);
      }
      if (clickedCards.length >= 2) {
        const card1_ID = Number(clickedCards[0].id);
        const card2_ID = Number(clickedCards[1].id);

        setCardDisabled(true);
        setTurns(turns + 1);

        card1 = card1.children[1];
        card2 = card2.children[1];

        if (getImgSrc(card1) === getImgSrc(card2)) {
          setMatches((m) => m + 1);

          isMatch[card1_ID] = true;
          isMatch[card2_ID] = true;

          card1.classList.add("match");
          card2.classList.add("match");
        }
      } else {
        return "no card";
      }
    };
    matchCard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    }, 1200);
  };

  const handleClick = (e) => {
    const clickedBtn = e.target.parentElement;

    // clickedBtn.classList.add("pointer-events-none");
    // setTimeout(() => {
    // clickedBtn.classList.remove("pointer-events-none");
    // },1200)

    flipCard(clickedBtn);
  };

  const restartGame = () => {
    setIsMatch(isMatch.map((b) => (b = false)));
    setIndexes(shuffleArray());

    setMatches(0);
    setTurns(0);

    const cardWrapper = ref.current;
    const Cards = [...cardWrapper.children].map((d) => d.children[1]);
    Cards.map((card) => card.classList.remove("match"));
  };

  useEffect(() => {
    setBoolList(isMatch);
  }, [isMatch]);
  return (
    <>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
        <h1 className="text-center text-3xl leading-loose text-[#EE4540] md:text-6xl">
          Memory Match
        </h1>
        <img
          className="mb-2 h-[4.5rem]"
          src="https://cdn-icons-png.flaticon.com/512/8787/8787419.png"
          alt=""
        />
      </div>
      <div className="x-gap-8 mx-auto mt-4 grid grid-cols-3 place-items-center md:w-2/4">
        <p className="text-3xl text-[#C72C41]">{matches}</p>
        <button
          onClick={restartGame}
          className="row-span-2 w-fit rounded-lg bg-[#EE4540]/75 p-2 text-2xl text-[#2D132C] transition-all hover:bg-[#EE4540]/90"
        >
          Restart
        </button>
        <p className="text-3xl text-[#C72C41]">{turns}</p>
        <p className="text-2xl text-[#C72C41]">Matches</p>
        <p className="col-start-3 text-2xl text-[#C72C41]">Turns</p>
      </div>
      <div
        ref={ref}
        className="card-wrapper xl:x-gap-1 container mx-auto grid grid-cols-4 gap-2 px-4 mt-2 md:w-5/6 lg:y-gap-2 lg:px-36"
      >
        <div
          id="0"
          onClick={handleClick}
          className={`card h-28 xl:w-44 cursor-pointer ${
            cardDisabled ? "pointer-events-none" : ""
          } ${isMatch[0] ? "match" : ""}`}
        >
          <div className="card__side card__side--front card__side--front-1 h-full rounded-lg bg-cover bg-center"></div>
          <div
            style={{
              backgroundImage: `url(${ImagesList[Indexes[0]]})`,
            }}
            className="card__side card__side--back card__side--back-1 h-full rounded-lg bg-cover bg-center"
          ></div>
        </div>
        <div
          id="1"
          onClick={handleClick}
          className={`card h-28 xl:w-44 cursor-pointer ${
            cardDisabled ? "pointer-events-none" : ""
          } ${isMatch[1] ? "match" : ""}`}
        >
          <div className="card__side card__side--front card__side--front-1 h-full rounded-lg bg-cover bg-center"></div>
          <div
            style={{
              backgroundImage: `url(${ImagesList[Indexes[1]]})`,
            }}
            className="card__side card__side--back card__side--back-1 h-full rounded-lg bg-cover bg-center"
          ></div>
        </div>
        <div
          id="2"
          onClick={handleClick}
          className={`card h-28 xl:w-44 cursor-pointer ${
            cardDisabled ? "pointer-events-none" : ""
          } ${isMatch[2] ? "match" : ""}`}
        >
          <div className="card__side card__side--front card__side--front-1 h-full rounded-lg bg-cover bg-center"></div>
          <div
            style={{
              backgroundImage: `url(${ImagesList[Indexes[2]]})`,
            }}
            className="card__side card__side--back card__side--back-1 h-full rounded-lg bg-cover bg-center"
          ></div>
        </div>
        <div
          id="3"
          onClick={handleClick}
          className={`card h-28 xl:w-44 cursor-pointer ${
            cardDisabled ? "pointer-events-none" : ""
          } ${isMatch[3] ? "match" : ""}`}
        >
          <div className="card__side card__side--front card__side--front-1 h-full rounded-lg bg-cover bg-center"></div>
          <div
            style={{
              backgroundImage: `url(${ImagesList[Indexes[3]]})`,
            }}
            className="card__side card__side--back card__side--back-1 h-full rounded-lg bg-cover bg-center"
          ></div>
        </div>

        <div
          id="4"
          onClick={handleClick}
          className={`card h-28 xl:w-44 cursor-pointer ${
            cardDisabled ? "pointer-events-none" : ""
          } ${isMatch[4] ? "match" : ""}`}
        >
          <div className="card__side card__side--front card__side--front-1 h-full rounded-lg bg-cover bg-center"></div>
          <div
            style={{
              backgroundImage: `url(${ImagesList[Indexes[4]]})`,
            }}
            className="card__side card__side--back card__side--back-1 h-full rounded-lg bg-cover bg-center"
          ></div>
        </div>
        <div
          id="5"
          onClick={handleClick}
          className={`card h-28 xl:w-44 cursor-pointer ${
            cardDisabled ? "pointer-events-none" : ""
          } ${isMatch[5] ? "match" : ""}`}
        >
          <div className="card__side card__side--front card__side--front-1 h-full rounded-lg bg-cover bg-center"></div>
          <div
            style={{
              backgroundImage: `url(${ImagesList[Indexes[5]]})`,
            }}
            className="card__side card__side--back card__side--back-1 h-full rounded-lg bg-cover bg-center"
          ></div>
        </div>
        <div
          id="6"
          onClick={handleClick}
          className={`card h-28 xl:w-44 cursor-pointer ${
            cardDisabled ? "pointer-events-none" : ""
          } ${isMatch[6] ? "match" : ""}`}
        >
          <div className="card__side card__side--front card__side--front-1 h-full rounded-lg bg-cover bg-center"></div>
          <div
            style={{
              backgroundImage: `url(${ImagesList[Indexes[6]]})`,
            }}
            className="card__side card__side--back card__side--back-1 h-full rounded-lg bg-cover bg-center"
          ></div>
        </div>
        <div
          id="7"
          onClick={handleClick}
          className={`card h-28 xl:w-44 cursor-pointer ${
            cardDisabled ? "pointer-events-none" : ""
          } ${isMatch[7] ? "match" : ""}`}
        >
          <div className="card__side card__side--front card__side--front-1 h-full rounded-lg bg-cover bg-center"></div>
          <div
            style={{
              backgroundImage: `url(${ImagesList[Indexes[7]]})`,
            }}
            className="card__side card__side--back card__side--back-1 h-full rounded-lg bg-cover bg-center"
          ></div>
        </div>

        <div
          id="8"
          onClick={handleClick}
          className={`card h-28 xl:w-44 cursor-pointer ${
            cardDisabled ? "pointer-events-none" : ""
          } ${isMatch[8] ? "match" : ""}`}
        >
          <div className="card__side card__side--front card__side--front-1 h-full rounded-lg bg-cover bg-center"></div>
          <div
            style={{
              backgroundImage: `url(${ImagesList[Indexes[8]]})`,
            }}
            className="card__side card__side--back card__side--back-1 h-full rounded-lg bg-cover bg-center"
          ></div>
        </div>
        <div
          id="9"
          onClick={handleClick}
          className={`card h-28 xl:w-44 cursor-pointer ${
            cardDisabled ? "pointer-events-none" : ""
          } ${isMatch[9] ? "match" : ""}`}
        >
          <div className="card__side card__side--front card__side--front-1 h-full rounded-lg bg-cover bg-center"></div>
          <div
            style={{
              backgroundImage: `url(${ImagesList[Indexes[9]]})`,
            }}
            className="card__side card__side--back card__side--back-1 h-full rounded-lg bg-cover bg-center"
          ></div>
        </div>
        <div
          id="10"
          onClick={handleClick}
          className={`card h-28 xl:w-44 cursor-pointer ${
            cardDisabled ? "pointer-events-none" : ""
          } ${isMatch[10] ? "match" : ""}`}
        >
          <div className="card__side card__side--front card__side--front-1 h-full rounded-lg bg-cover bg-center"></div>
          <div
            style={{
              backgroundImage: `url(${ImagesList[Indexes[10]]})`,
            }}
            className="card__side card__side--back card__side--back-1 h-full rounded-lg bg-cover bg-center"
          ></div>
        </div>
        <div
          id="11"
          onClick={handleClick}
          className={`card h-28 xl:w-44 cursor-pointer ${
            cardDisabled ? "pointer-events-none" : ""
          } ${isMatch[11] ? "match" : ""}`}
        >
          <div className="card__side card__side--front card__side--front-1 h-full rounded-lg bg-cover bg-center"></div>
          <div
            style={{
              backgroundImage: `url(${ImagesList[Indexes[11]]})`,
            }}
            className="card__side card__side--back card__side--back-1 h-full rounded-lg bg-cover bg-center"
          ></div>
        </div>

        <div
          id="12"
          onClick={handleClick}
          className={`card h-28 xl:w-44 cursor-pointer ${
            cardDisabled ? "pointer-events-none" : ""
          } ${isMatch[12] ? "match" : ""}`}
        >
          <div className="card__side card__side--front card__side--front-1 h-full rounded-lg bg-cover bg-center"></div>
          <div
            style={{
              backgroundImage: `url(${ImagesList[Indexes[12]]})`,
            }}
            className="card__side card__side--back card__side--back-1 h-full rounded-lg bg-cover bg-center"
          ></div>
        </div>
        <div
          id="13"
          onClick={handleClick}
          className={`card h-28 xl:w-44 cursor-pointer ${
            cardDisabled ? "pointer-events-none" : ""
          } ${isMatch[13] ? "match" : ""}`}
        >
          <div className="card__side card__side--front card__side--front-1 h-full rounded-lg bg-cover bg-center"></div>
          <div
            style={{
              backgroundImage: `url(${ImagesList[Indexes[13]]})`,
            }}
            className="card__side card__side--back card__side--back-1 h-full rounded-lg bg-cover bg-center"
          ></div>
        </div>
        <div
          id="14"
          onClick={handleClick}
          className={`card h-28 xl:w-44 cursor-pointer ${
            cardDisabled ? "pointer-events-none" : ""
          } ${isMatch[14] ? "match" : ""}`}
        >
          <div className="card__side card__side--front card__side--front-1 h-full rounded-lg bg-cover bg-center"></div>
          <div
            style={{
              backgroundImage: `url(${ImagesList[Indexes[14]]})`,
            }}
            className="card__side card__side--back card__side--back-1 h-full rounded-lg bg-cover bg-center"
          ></div>
        </div>
        <div
          id="15"
          onClick={handleClick}
          className={`card h-28 xl:w-44 cursor-pointer ${
            cardDisabled ? "pointer-events-none" : ""
          } ${isMatch[15] ? "match" : ""}`}
        >
          <div className="card__side card__side--front card__side--front-1 h-full rounded-lg bg-cover bg-center"></div>
          <div
            style={{
              backgroundImage: `url(${ImagesList[Indexes[15]]})`,
            }}
            className="card__side card__side--back card__side--back-1 h-full rounded-lg bg-cover bg-center"
          ></div>
        </div>
      </div>

      <div
        id="overlay"
        data-content={`You won after ${turns} tries`}
        className={`${
          isActive ? "active" : ""
        } transition duration-[2000ms] text-center before:text-[#E66B09] w-full block backdrop-blur-md before:relative inset-0 fixed  before:top-1/2  before:content-[''] before:text-5xl `}
      ></div>
    </>
  );
};

export default Cards;
