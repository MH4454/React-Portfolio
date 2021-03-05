import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ContactForm from './components/Contactform';
import ParticlesJS from './components/Particles';

function App() {
  return (
    <>
    <Router>
      <Route exact path="/" component={ParticlesJS} />
      <Navbar />
        <Route exact path="/" component={Header} /> 
        <Route exact path="/" component={AboutMe} />
        <Route exact path="/" component={Projects} />
        <Route exact path="/" component={Technologies} />
        <Route exact path="/" component={Contact} />
        <Route exact path="/contact" component={ContactForm} />
    </Router>
    </>
  );
}

export default App;
