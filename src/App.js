import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import MainApp from './Components/MainApp';
import About from './Components/About';
import Contact from './Components/Contact';
import TodoApp from './Components/TodoApp/TodoApp';


function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <div className = 'container'>
          <Route exact path = '/'> 
            <MainApp />
          </Route>

          <Route path = '/about'>
            <About />
          </Route>

          <Route path = '/contact'>
            <Contact />
          </Route>

          <Route path = '/todo'>
            <TodoApp />
          </Route>
      </div>
    </Router>
    </div>
  );
}

export default App;
