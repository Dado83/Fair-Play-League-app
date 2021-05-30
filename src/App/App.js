import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../assets/styles.css';
import Navbar from '../components/Navbar';
import Home from './Home';
import Fixtures from './Fixtures';
import Results from './Results';
import Clubs from './Clubs';
import About from './About';
import Admin from './Admin';
import TourMaker from './TourMaker';
import Err404 from './Err404';


export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route path='/raspored'><Fixtures /></Route>
        <Route path='/rezultati'><Results /></Route>
        <Route path='/klubovi'><Clubs /></Route>
        <Route path='/o-nama'><About /></Route>
        <Route path='/admin'><Admin /></Route>
        <Route path='/napravi-raspored'><TourMaker /></Route>
        <Route path='*'><Err404 /></Route>
      </Switch>
    </Router>
  );
}
