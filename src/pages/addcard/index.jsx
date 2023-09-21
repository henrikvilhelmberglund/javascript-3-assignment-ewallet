import { useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function Index() {
  const { firstName, lastName } = useOutletContext();
  const [error, setError] = useState("");
  return (
    <>
      <h1 className="text-5xl">Add card</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(document.querySelector("#name").value);
          const number1 = document.querySelector("#number-1").value;
          const number2 = document.querySelector("#number-2").value;
          const number3 = document.querySelector("#number-3").value;
          const number4 = document.querySelector("#number-4").value;
          const number = number1 + number2 + number3 + number4;
          console.log(number);
          console.log(document.querySelector("#vendor").value);
          console.log(document.querySelector("#month").value);
          console.log(document.querySelector("#year").value);
          console.log(document.querySelector("#ccv").value);
        }}
        className="mt-12 p-4 bg-white rounded-md flex flex-col gap-3"
        action="">
        <div className="flex gap-1 relative">
          <p className="absolute -top-7 text-red-500 left-0">{error}</p>
          {Array.from({ length: 4 }).map((_, i) => (
            <>
              <input
                key={i}
                onChange={(e) => {
                  let inputAcceptable = /^\d+$/.test(e.target.value);

                  if (!inputAcceptable && e.target.value) {
                    e.target.value = e.target.value.replaceAll(/[^0-9]+/g, "");
                    setError("Only numbers are allowed.");
                    // alert("Only numbers are valid");
                    return;
                  } else if (inputAcceptable) {
                    setError("");
                  }
                  if (i === 3) return;
                  if (e.target.value.length === 4) {
                    document.querySelector(`#number-${i + 2}`).focus();
                  }
                }}
                className="p-2 rounded w-[4rem] text-center"
                required
                type="text"
                placeholder="0000"
                minLength="4"
                maxLength="4"
                name="number"
                id={`number-${i + 1}`}
              />
            </>
          ))}
        </div>

        <div className="gap-2 flex">
          <input
            className="p-2 w-32 rounded bg-slate-300"
            disabled
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
          />
          <input
            className="p-2 w-32 flex-1 rounded bg-slate-300"
            disabled
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
          />
        </div>
        <select className="p-2" id="vendor" name="vendor">
          <option value="DuckCard">DuckCard</option>
          <option value="FishCard">FishCard</option>
          <option value="SvelteCard">SvelteCard</option>
        </select>
        <div>
          <span className="inline">Valid thru: </span>
          <select className="inline p-2 w-14" id="month" name="month">
            {Array.from({ length: 12 }).map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <select className="inline p-2 w-20" id="year" name="year">
            {Array.from({ length: 10 }).map((_, i) => (
              <option key={i} value={2024 + i}>
                {2024 + i}
              </option>
            ))}
          </select>
        </div>
        <input
          type="text"
          id="ccv"
          placeholder="ccv"
          className="w-14"
          minLength="3"
          maxLength="3"
          required
        />
        <div className="mt-8"></div>
        <button className="btn-blue">Submit</button>
      </form>
    </>
  );
}
