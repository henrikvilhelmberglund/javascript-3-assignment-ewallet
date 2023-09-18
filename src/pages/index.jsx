import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/ewalletSlice";
import { Link } from "react-router-dom";

export default function Index() {
  const dispatch = useDispatch();
  const { count } = useSelector((store) => store.ewallet);
  return (
    <>
      <h1 className="text-4xl">E-Wallet</h1>
      <h2 className="text-2xl">
        Welcome to your E-Wallet! Click the link below to view your cards.
      </h2>
      <div className="mt-12">
        <Link
          className="text-xl hover:bg-blue-100 transition-all bg-blue-200 p-4 rounded-lg text-blue-600"
          to="/cards">
          View your cards
        </Link>
      </div>
    </>
  );
}
