import React from 'react';
import './App.css';
import 'tachyons';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
        <Navbar/>
          <Switch>
              <Route exact path='/'>
                <Home/>
              </Route>

         </Switch>
    </Router>
    
   
  );
}

export default App;
