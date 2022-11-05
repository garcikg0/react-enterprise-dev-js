import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import Products from './Products';
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
