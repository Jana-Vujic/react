import React, { useState } from "react";
import Navbar from "./Navbar";
import Proizvod from "./Proizvod";

function Proizvodjac(props) {
  const [proizvodjac, setProizvodjac] = useState(props.proizvodjac);

  const prikaziProizvode = (proizvodi) => {
    if (proizvodi != undefined) {
      return proizvodi.map((proizvod, index) => {
        return <Proizvod key={proizvod.naziv + index} proizvod={proizvod} />;
      });
    }
  };

  return (
    <div className="d-flex">
      <Navbar activePage={proizvodjac.naziv} />
      <div className="col-9">
        <h1 align="center">{proizvodjac.naziv}</h1>
        <h2 align="center">{proizvodjac.mesto}</h2>
        <div className="row justify-content-between">
          {prikaziProizvode(proizvodjac.proizvodi)}
        </div>
      </div>
    </div>
  );
}

export default Proizvodjac;
