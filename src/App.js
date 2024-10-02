import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './Components/Login';
import Home from './Components/home';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the login/signup page */}
        {/* <Route path="/" element={<Login/>} /> */}

        {/* Route for the home page */}
        <Route path="/" element={<Home />} />

        {/* Add any additional routes if necessary */}
      </Routes>
    </Router>
  );
}

export default App;
