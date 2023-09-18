import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/ewalletSlice";

export default function Index() {
  const dispatch = useDispatch();
  const { count } = useSelector((store) => store.ewallet);
  return (
    <>
      <p className="text-4xl">hi I am index</p>
      <button onClick={() => dispatch(increment())}>{count}</button>
    </>
  );
}
