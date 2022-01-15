import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../assets/styles.css?v=0.1';
import Navbar from '../components/Navbar';
import Home from './Home';
import Fixture from '../components/Fixture';
import Results from './Results';
import Club from '../components/Club';
import Archives from './Archives';
import About from './About';
import Admin from './Admin';
import TourMaker from './TourMaker';
import Err404 from './Err404';
import { useEffect } from 'react';
import GameInput from '../components/GameInput';
import NewsLetter from '../components/newsletter/NewsLetter';
import SkTestplay from './SkTestplay';
import { protocol } from '../utility/utility';

export default function App() {
  const site = document.location.hostname;
  console.log(protocol);

  useEffect(() => {
    fetch(`${protocol}://${site}/api/visitors.php?counter=visit`);

    //for 000webhost banner removal//
    /* window.addEventListener('load', function () {
      var bannerNode = document.querySelector('[alt="www.000webhost.com"]').parentNode.parentNode;
      bannerNode.parentNode.removeChild(bannerNode); 
    });*/
  }, []);

  console.log(window.location.href);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/raspored'>
          <Fixture />
        </Route>
        <Route path='/rezultati'>
          <Results />
        </Route>
        <Route path='/klub'>
          <Club />
        </Route>
        <Route path='/arhiva'>
          <Archives />
        </Route>
        <Route path='/o-nama'>
          <About />
        </Route>
        <Route path='/admin'>
          <Admin />
        </Route>
        <Route path='/input'>
          <GameInput />
        </Route>
        <Route path='/napravi-raspored'>
          <TourMaker />
        </Route>
        <Route path='/bilten'>
          <NewsLetter />
        </Route>
        <Route path='/sktestplay'>
          <SkTestplay />
        </Route>
        <Route>Err404</Route>
      </Switch>
    </Router>
  );
}
