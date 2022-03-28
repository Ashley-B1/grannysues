import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Hero from "./components/Hero";
import Products from "./components/Products";
import Feature from './components/Feature';
import Footer from './components/Footer';

import { dinnerData, dessertData } from './components/Products/data';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Hero />
          <Products heading='Order Dinner' data={dinnerData} />
          <Feature />
          <Products heading='Sweet Tooth?' data={dessertData} />
          <Footer />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
