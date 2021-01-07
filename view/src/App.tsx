import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home'
import Navigation from './components/Navigation/Navigation';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <BrowserRouter>
    <Navigation />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route  path='/login' component={Login} />
      <Route  path='/register' component={Register} />

    </Switch>
  </BrowserRouter>
  );
}

export default App;
