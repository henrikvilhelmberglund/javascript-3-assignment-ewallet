import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../_components/Card";
export default function Index() {
  const { cards } = useSelector((store) => store.ewallet);
  return (
    <>
      <h1 className="text-5xl">Cards</h1>
      <section>
        <h2>Here you can view your cards.</h2>
        {cards?.map((card) => (
          <Card {...card}></Card>
        ))}
      </section>
      <div className="mt-12">
        <Link to="/addcard" className="btn-green">
          Add new card
        </Link>
      </div>
    </>
  );
}
