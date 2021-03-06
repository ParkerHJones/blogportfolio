// import logo from './logo.svg';
import React from 'react'; 
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero/Index';
import AboutMe from './containers/AboutMe';
import programming_portfolio from './containers/ProgrammingPortfolio';
import Blog from './containers/Blog';
// import Card from './components/UI/Card'; 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (

    <Router>
      <div className="App">
      <Header />
      <Hero />

      <Route path="/" exact component={Home}/>
      <Route path="/AboutMe" component={AboutMe}/>
      <Route path="/programmingportfolio" component={programming_portfolio}/>
      <Route path="/Blog" component={Blog}/>

    </div>

      </Router>
    
  );
}

export default App;
