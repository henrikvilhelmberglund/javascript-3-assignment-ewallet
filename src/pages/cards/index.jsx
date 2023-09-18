import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../_components/Card";
export default function Index() {
  const { cards } = useSelector((store) => store.ewallet);

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
        <div className="relative h-[400px] top-0 left-0 translate-x-[-14vw]">
          {cards.map((card, i) => (
            <Card {...card} allCards={true} i={i} key={i}></Card>
          ))}
        </div>
      </section>
      <div className="mt-12">
        <Link to="/addcard" className="btn-green">
          Add new card
        </Link>
      </div>
    </>
  );
}
