import React, { useState } from "react";
import "../../App.css";

function Proizvod(props) {
  const [sastojciSkriveni, sakrijSastojke] = useState(true);

  const prikaziSastojke = () => {
    if (sastojciSkriveni) {
      sakrijSastojke(false);
      return;
    }
    sakrijSastojke(true);
  };
  return (
    <div className="col-4 ">
      <div className="card m-2" style={{ width: "100%" }}>
        <img src={props.proizvod.img} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{props.proizvod.naziv}</h5>
          <div className="card-text">
            <p>
              Opis: <i>{props.proizvod.opis}</i>
              <br></br>
              Cena: <i>{props.proizvod.cena}</i>
            </p>
            <p id="sastojci" hidden={sastojciSkriveni}>
              Sastojci:
              <br></br>
              Voda: <i>{props.proizvod.sastojci.voda}</i>
              <br></br>
              Azot: <i>{props.proizvod.sastojci.azot}</i>
              <br></br>
              Amonijak: <i>{props.proizvod.sastojci.amonijak}</i>
              <br></br>
              Sumpor: <i>{props.proizvod.sastojci.sumpor}</i>
              <br></br>
            </p>
            <hr></hr>
            <button className="btn btn-block" onClick={prikaziSastojke}>
              Sastojci
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proizvod;
