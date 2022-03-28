import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Hero from "./components/Hero";
import Products from "./components/Products";
import Feature from './components/Feature';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Hero />
          <Products />
          <Feature />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
