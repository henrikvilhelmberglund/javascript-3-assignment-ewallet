import { useDispatch } from "react-redux";
import { setActiveCard, setAllCardsToInactive } from "../../redux/ewalletSlice";

export default function Card({
  name,
  number,
  validThru,
  vendor,
  ccv,
  i,
  active,
  allCards
}) {
  const dispatch = useDispatch();
  const cardParts = Array.from({ length: 4 }, (_, index) =>
    number.toString().slice(index * 4, (index + 1) * 4)
  );
  let cardStyle;
  let iconStyle;
  // TODO this seems a bit stupid
  let shouldBeHidden = active && allCards ? "!hidden": "" 
  if (vendor === "DuckCard") {
    cardStyle =
      "from-green-400 to-green-700 bg-gradient-to-rb w-[440px] h-[270px] rounded-xl flex flex-col p-4 justify-between shadow-md shadow-green-800";
    iconStyle =
      "i-noto-duck bg-white border-white border-2 border-solid rounded-md h-16 w-16";
  } else if (vendor === "FishCard") {
    cardStyle =
      "from-blue-400 to-blue-700 bg-gradient-to-b w-[440px] h-[270px] rounded-xl flex flex-col p-4 justify-between shadow-md shadow-blue-800";
    iconStyle = "i-noto-fish  h-16 w-16";
  } else if (vendor === "SvelteCard") {
    cardStyle =
      "to-[#FF3E00] from-orange-500 from-1% to-50% bg-gradient-to-b w-[440px] h-[270px] rounded-xl flex flex-col p-4 justify-between shadow-md shadow-orange-800";
    iconStyle = "i-devicon-svelte  h-16 w-16";
  }
  return (
    <button
      onClick={() => {
        dispatch(setAllCardsToInactive());
        dispatch(setActiveCard({ i, newState: true }));
      }}>
      <article
        className={`${cardStyle} ${
          active === false ? `absolute top-[${i * 40}px] z-${i} left-0` : ""
        } ${shouldBeHidden}`}>
        <header className="flex h-[40%]  justify-between ">
          <div className="flex flex-col items-center justify-center gap-1">
            <span className="i-lucide-nfc -rotate-90 text-3xl text-black/80"></span>
            <span className="i-flat-color-icons-sim-card-chip?bg text-5xl"></span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="flex flex-col items-end gap-2">
              <p className={`font-${vendor} text-4xl`}>{vendor}</p>
              <span className={`${iconStyle}`}></span>
            </div>
          </div>
        </header>
        <section className="flex justify-center gap-10 justify-between text-3xl pb-8">
          {cardParts.map((part, i) => (
            <p key={i}>{part}</p>
          ))}
        </section>
        <footer className="flex justify-between">
          <div className="flex flex-col">
            <p className="text-xs">CARDHOLDER NAME</p>
            <p className="font-semibold">{name.toUpperCase()}</p>
          </div>
          <div className="flex flex-col">
            <p>VALID THRU</p>
            <p className="self-end pr-1 font-semibold">{validThru}</p>
          </div>
        </footer>
      </article>
    </button>
  );
}
