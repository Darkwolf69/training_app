import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';

function App() {
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}>
          </Route>
          <Route path="/preferences" element={<Preferences/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
