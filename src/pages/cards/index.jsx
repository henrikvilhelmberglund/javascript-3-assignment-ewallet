import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Card from "../_components/Card";
import { deleteCard } from "../../redux/ewalletSlice";
import React from "react";
export default function Index() {
  const { cards } = useSelector((store) => store.ewallet);
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="text-5xl">Cards</h1>
      <section className="flex flex-col gap-6 items-center">
        <h2>Here you can view your cards.</h2>
        <p>Active card:</p>

        {cards
          ?.filter((card) => card.active === true)
          .map((card, i) => (
            <Card {...card} allCards={false} i={i} key={i}></Card>
          ))}

        <p>Inactive cards:</p>

        {/* TODO fix this jank */}
        <div className="relative h-[400px] -top-4 -left-55">
          {cards.map((card, i) => (
            <article className="relative" key={i}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(deleteCard(i));
                }}
                className={`${card.active === true ? "hidden" : ""}
                } i-lucide-x absolute top-[${i*40-10}px] z-100 -left-8 w-16 h-16 bg-red-500`}></button>
              <Card {...card} allCards={true} i={i} key={i}></Card>
            </article>
          ))}
        </div>
      </section>
      <div className="mt-14">
        <Link to="/addcard" className="btn-green">
          Add new card
        </Link>
      </div>
    </>
  );
}
