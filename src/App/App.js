import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../assets/styles.css";
import Navbar from "../components/Navbar";
import Home from "./Home";
import Fixtures from "./Fixtures";
import Results from "./Results";
import Clubs from "./Clubs";
import Club from "../components/Club";
import Archives from "./Archives";
import About from "./About";
import Admin from "./Admin";
import TourMaker from "./TourMaker";
import Err404 from "./Err404";
import { useEffect } from "react";
import GameInput from "../components/GameInput";
import NewsLetter from "../components/newsletter/NewsLetter";

export default function App() {
  const site = document.location.hostname;
  useEffect(() => {
    fetch(`http://${site}/api/visitors.php?counter=visit`);
  }, []);

  console.log(window.location.href);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/raspored">
          <Fixtures />
        </Route>
        <Route path="/rezultati">
          <Results />
        </Route>
        <Route path="/klubovi">
          <Clubs />
        </Route>
        <Route path="/klub">
          <Club />
        </Route>
        <Route path="/arhiva">
          <Archives />
        </Route>
        <Route path="/o-nama">
          <About />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/input">
          <GameInput />
        </Route>
        <Route path="/napravi-raspored">
          <TourMaker />
        </Route>
        <Route path="/bilten">
          <NewsLetter />
        </Route>
        <Route>
          <Err404 />
        </Route>
      </Switch>
    </Router>
  );
}
