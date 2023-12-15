import React, { useState } from "react";

export const Form = () => {
  const [ugis, setUgis] = useState("");
  const [svoris, setSvoris] = useState(0);
  const [rezultatas, setRezultatas] = useState(null);

  return (
    <div>
      <h1> KŪNO MASĖS INDEKSO SKAIČIAVIMAS</h1>
      <form>
        <label style={{ fontSize: "18px" }} htmlFor="ugis">
          Ugis metrais
        </label>
        <input
          style={{ marginLeft: "10px" }}
          id="ugis"
          type="number"
          input
          className=""
          placeholder="ugis"
          value={ugis}
          onChange={(e) => setUgis(e.target.value)}
        ></input>
        <label
          style={{ marginLeft: "10px", fontSize: "18px" }}
          htmlFor="svoris"
        >
          Svoris kilogramais
        </label>
        <input
          style={{ marginLeft: "10px" }}
          id="svoris"
          type="number"
          input
          className=""
          placeholder="svoris"
          value={svoris}
          onChange={(e) => setSvoris(e.target.value)}
        ></input>
        <button
          style={{ marginLeft: "10px" }}
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
              <p style={{ fontSize: "18px" }}>Jūs sveriate: {svoris} kg</p>
              <p style={{ fontSize: "18px" }}>Jūsų ūgis: {ugis} m</p>
              <p></p>
              <p
                style={
                  +rezultatas < 18.5
                    ? { color: "red", fontSize: "18px" }
                    : +rezultatas > 18.5 && +rezultatas < 25
                    ? { color: "green", fontSize: "18px" }
                    : { color: "orange", fontSize: "18px" }
                }
              >
                Jūsų kūno masės indeksas: {rezultatas} KMI
              </p>
              {+rezultatas < 18.5 ? (
                <p style={{ color: "red", fontSize: "25px" }}>
                  Susirūpinkite, Jūsų svoris nepakankamas!!!
                </p>
              ) : +rezultatas > 18.5 && +rezultatas < 25 ? (
                <p style={{ color: "green", fontSize: "25px" }}>
                  Sveikiniame! Jūsų svoris normalus.
                </p>
              ) : (
                <p style={{ color: "orange", fontSize: "25px" }}>
                  Susirūpinkite! Jūsų svoris per didelis.
                </p>
              )}
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
