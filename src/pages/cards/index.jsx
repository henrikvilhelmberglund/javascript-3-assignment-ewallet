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
            <Card {...card} i={i} key={i}></Card>
          ))}

        <p>Inactive cards:</p>
        <div className="w-full flex items-center">
          <div className="relative h-[400px] top-0 left-0">
            {cards
              ?.filter((card) => card.active === false)
              .map((card, i) => (
                <Card {...card} i={i} key={i}></Card>
              ))}
          </div>
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
