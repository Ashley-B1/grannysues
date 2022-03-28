import Hero from "./components/Hero";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Hero />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
