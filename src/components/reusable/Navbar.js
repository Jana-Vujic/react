import React from "react";
import "../../App.css";
import { proizvodjaciData } from "../data/ProizvodjaciData";

function Navbar(props) {
  function isActive(page) {
    if (props.activePage === page) return true;
    return false;
  }

  return (
    <div className="col-3" id="NavBar">
      <div className="nav flex-column nav-pills">
        <a
          href="http://127.0.0.1:3000/home"
          className={isActive("Početna") ? "nav-link active" : "nav-link"}
        >
          Početna
        </a>
        {proizvodjaciData.map((proizvodjac, index) => {
          return (
            <a
              href={"http://127.0.0.1:3000/proizvodjac/" + index}
              key={index + proizvodjac.naziv}
              className={isActive(proizvodjac.naziv) ? "nav-link active" : "nav-link"}
            >
              {proizvodjac.naziv}
              <img
                width="15%"
                height="15%"
                src={"http://localhost:3000/" + proizvodjac.logo}
              ></img>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
