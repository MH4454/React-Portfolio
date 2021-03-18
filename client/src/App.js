import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactForm from './components/Contactform';
import HomePage from './components/HomePage';
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
    
    <Router>
    <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/contact" component={ContactForm} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
