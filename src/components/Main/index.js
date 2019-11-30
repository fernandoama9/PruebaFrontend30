import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Login from '../Login/AddProduct.js';
import ListProducts from "../ListProducts/ListProducts.js";
import Home from '../Home/Home.js';
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>MarketPlace</h1>
          <ul className="header">
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/list-products">List-Products</NavLink></li>
            <li><NavLink to="/add-product">AddProduct</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/list-products" component={Login}/>
            <Route path="/add-product" component={ListProducts}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}

export default Main;