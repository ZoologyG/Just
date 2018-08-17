import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('./routes/Home'),
  loading: Loading,
});

const About = Loadable({
  loader: () => import('./routes/About'),
  loading: Loading,
});

const SubAbout = Loadable({
  loader: () => import('./routes/SubAbout'),
  loading: Loading,
});

const Load = () => (
  <Router>
    <div>
      <ul>
        <li><Link to='/'>to home</Link></li>
        <li><Link to='/about'>to about</Link></li>
        <li><Link to='/about/subabout'>to subabout</Link></li>
      </ul>
      <hr/>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/about/subabout" component={SubAbout}/>
    </div>
  </Router>
);

export default Load;