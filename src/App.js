import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from './Components/Navbar';
import Common from "./Components/Common";




const App = () =>{

  return(
          <>
            <Navbar/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
            </Switch>
          </>
        )
}

export default App;