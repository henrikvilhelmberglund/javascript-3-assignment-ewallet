export default function Card({ name, number, validThru, vendor, ccv }) {
  const cardParts = Array.from({ length: 4 }, (_, index) =>
    number.toString().slice(index * 4, (index + 1) * 4)
  );
  return (
    <>
      <article className="bg-amber-400 w-[440px] h-[270px] rounded-xl flex flex-col p-4 justify-between">
        <header className="flex h-[40%]  justify-between ">
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="i-lucide-nfc -rotate-90 text-3xl text-amber-800"></div>
            <div className="i-flat-color-icons-sim-card-chip?bg text-5xl"></div>
          </div>
          <div className="flex pt-2">
            <p>Icon 3</p>
          </div>
        </header>
        <section className="flex justify-center gap-10 justify-between text-3xl pb-8">
          {cardParts.map((part) => (
            <p>{part}</p>
          ))}
        </section>
        <footer className="flex justify-between">
          <div className="flex flex-col">
            <p className="text-xs">CARDHOLDER NAME</p>
            <p className="font-semibold">{name}</p>
          </div>
          <div className="flex flex-col">
            <p>VALID THRU</p>
            <p className="self-end pr-1 font-semibold">{validThru}</p>
          </div>
        </footer>
      </article>
    </>
  );
}
