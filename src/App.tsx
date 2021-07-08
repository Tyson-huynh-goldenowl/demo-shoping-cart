import React from "react";
import "./App.css";
import "./styles/main.scss";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Cart from './pages/Carts/Carts';
import Product from './pages/Product/Products';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/carts">
            <Cart />
          </Route>
          <Route path="/">
            <Product />
          </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default connect()(App);
