import AnimatedCursor from "react-animated-cursor";
import Home from './pages/Home';
import Header from './components/common/Header';
import { Footer }from './components/common/Footer';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <AnimatedCursor />

      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
