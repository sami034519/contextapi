import React from 'react';
import {Counterprovider} from "./Components/Counter"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import LoginForm from './Components/LoginForm';
import Profile from './Components/Profile';
function App() {
  return (
    <Router>
      <Counterprovider>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Counterprovider>
    </Router>
  );
}

export default App;
