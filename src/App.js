import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "./style.css";

// Pages
import Home from "./pages/home";
import Gallery from "./pages/gallery";
import About from "./pages/about";
import Contact from "./pages/contact";
import Errorpage from "./pages/error";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/about" component={About} />
          <Route exact path="/comissions" component={Contact} />
          <Route exact path="/error" component={Errorpage} />
          <Redirect to="/error" />
        </Switch>
      </Router>
    </div>
  );
}
