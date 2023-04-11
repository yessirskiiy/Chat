import React, {Component} from 'react';
import {Route,Routes} from "react-router-dom";

import {Auth, Home} from './pages';

class App extends  Component{
  render () {
      return(
          <div className="wrapper">
              <Routes>
                  <Route path='/im' element={<Home/>}/>
                  <Route path='/*' element={<Auth/>}/>
              </Routes>
          </div>

      );
  }
}

export default App;
