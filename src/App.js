import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/stranice/home/Home";
import Proizvodjac from "./components/reusable/Proizvodjac";
import { proizvodjaciData } from "./components/data/ProizvodjaciData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [backgrounds, setBackgrounds] = useState([]);

  useEffect(() => {
    const bgrs = proizvodjaciData.map((proizvodjac) => {
      return proizvodjac.background;
    });
    setBackgrounds([...bgrs]);
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Home backgrounds={backgrounds} />}
          />
          <Route
            exact
            path="/home"
            render={(props) => {
              return <Home backgrounds={backgrounds} />;
            }}
          />
          <Route
            exact
            path="/proizvodjac/:id"
            render={(props) => {
              const id = props.match.params.id;
              return <Proizvodjac proizvodjac={proizvodjaciData[id]} />;
            }}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;