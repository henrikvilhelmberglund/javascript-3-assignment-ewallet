export default function Index() {
  return (
    <>
      <h1 className="text-5xl">Add card</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(document.querySelector("#name").value);
          console.log(document.querySelector("#number").value);
          console.log(document.querySelector("#vendor").value);
        }}
        className="mt-12 p-4 bg-white rounded-md flex flex-col gap-3"
        action="">
        <div className="flex gap-1">
          {Array.from({ length: 4 }).map((_, i) => (
            <input
              key={i}
              onChange={(e) => {
                if (i === 3) return;
                if (e.target.value.length === 4) {
                  document.querySelector(`#number-${i + 1}`).focus();
                }
              }}
              className="p-2 rounded w-[4rem] text-center bg-slate-200"
              type="text"
              placeholder="0000"
              maxLength={4}
              name="number"
              id={`number-${i}`}
            />
          ))}
        </div>

        <input
          className="p-2 rounded"
          disabled
          type="text"
          name="name"
          id="name"
          value="First name Last name"
        />
        <select id="vendor" name="vendor">
          <option value="DuckCard">DuckCard</option>
          <option value="FishCard">FishCard</option>
          <option value="SvelteCard">SvelteCard</option>
        </select>
        <div className="mt-8"></div>
        <button className="btn-blue">Submit</button>
      </form>
    </>
  );
}
