import React from 'react';
import './App.css';
import Customerlist from './components/Customerlist';
import Trainingslist from './components/Trainingslist';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigator from './components/Navigator';


function App() {
  return (
    <div className="App">
         <BrowserRouter>
      <div>
        <Navigator />
        <Switch>
          <Route exact path="/" component={Customerlist} />
          <Route path="/Customerlist" component={Customerlist} />
          <Route path="/Trainingslist" component={Trainingslist} />
          </Switch> 
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
