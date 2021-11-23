import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../assets/styles.css?v=0.1';
import Navbar from '../components/Navbar';
import Home from './Home';
import Fixtures from './Fixtures';
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
        <Route exact path='/' component={Home}></Route>
        <Route path='/raspored' component={Fixtures}></Route>
        <Route path='/rezultati' component={Results}></Route>
        <Route path='/klub' component={Club}></Route>
        <Route path='/arhiva' component={Archives}></Route>
        <Route path='/o-nama' component={About}></Route>
        <Route path='/admin' component={Admin}></Route>
        <Route path='/input' component={GameInput}></Route>
        <Route path='/napravi-raspored' component={TourMaker}></Route>
        <Route path='/bilten' component={NewsLetter}></Route>
        <Route component={Err404}></Route>
      </Switch>
    </Router>
  );
}
