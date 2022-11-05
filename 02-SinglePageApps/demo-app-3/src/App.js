import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import Products from './Products';
import ProductsMasterDetail from './ProductsMasterDetail';
import Product from './Product';
import About from './About';
import Contact from './Contact';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <div>

      <Menu/>

      <Switch>

        <Route exact path="/" >
          <Home />
        </Route>
        
        <Route exact path="/products">
          <Products />
        </Route>

        <Route exact path="/catalog">
          <Redirect to="/products" />
        </Route>

        { /* Note this path is not "exact" because it's just the prefix part of a nested path */ }
        <Route path="/productsmasterdetail">
          <ProductsMasterDetail />
        </Route>

        <Route exact path="/product/:id">
          <Product />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>

        <Route path="*" >
          <PageNotFound />
        </Route>
        
      </Switch>
    </div>
  );
}
export default App;
