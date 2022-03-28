import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Hero from "./components/Hero";
import Products from "./components/Products";
import Feature from './components/Feature';

import { dinnerData, dessertData } from './components/Products/data';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Hero />
          <Products heading='Order Dinner' data={dinnerData} />
          <Feature />
          <Products heading='Sweet Tooth?' data={dessertData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
