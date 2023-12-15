import React, { useState } from "react";

export const Form = () => {
  const [ugis, setUgis] = useState("");
  const [svoris, setSvoris] = useState(0);
  const [rezultatas, setRezultatas] = useState(null);

  const handleKMI = (е) => {
    e.preventDefault();
  };

  return (
    <div>
      <form>
        <label htmlFor="ugis">Ugis metrais</label>
        <input
          id="ugis"
          type="number"
          input
          className=""
          placeholder="ugis"
          value={ugis}
          onChange={(e) => setUgis(e.target.value)}
        ></input>
        <label htmlFor="svoris">Svoris kilogramais</label>
        <input
          id="svoris"
          type="number"
          input
          className=""
          placeholder="svoris"
          value={svoris}
          onChange={(e) => setSvoris(e.target.value)}
        ></input>
        <button
          className=""
          onClick={(e) => {
            e.preventDefault();
            const rez = svoris / (ugis * ugis);
            setRezultatas(rez.toFixed(2));
          }}
        >
          Skaiciuoti KMI
        </button>

        <div className="rezultatas">
          {rezultatas && (
            <>
              <p
                style={
                  +rezultatas < 18.7 ? { color: "red" } : { color: "yellow" }
                }
                // style={
                //   +rezultatas < 18.5
                //     ? "color:yellow;"
                //     : +rezultatas > 18.5 && +rezultatas < 25
                //     ? "color:green;"
                //     : "color:orange;"
                // }
              >
                {rezultatas}
              </p>
              <button
                onClick={() => {
                  setRezultatas(null);
                  setUgis(0);
                  setSvoris(0);
                }}
              >
                Reset
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};
