import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Hero from "./components/Hero";
import Products from "./components/Products";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Hero />
          <Products />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
