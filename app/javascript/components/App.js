import React from 'react';
import {
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import Greeting from './Greeting';

const App = () => (
  <>
    <header>
      <nav>
        <NavLink to="/Greeting">Greetings</NavLink>
      </nav>
    </header>
    <Routes>
      <Route path="/Greeting" element={<Greeting />} />
    </Routes>
  </>
);

export default App;
