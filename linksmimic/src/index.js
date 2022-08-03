import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { 
  BrowserRouter,
  Routes,
  Route } from 'react-router-dom';
import App from './App';
import Home from './Components/home';
import Contact from './Components/contact';


const root = ReactDOM.createRoot(
  document.getElementById('root')
  );
  
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="Home" element={<Home />} />
        <Route path="Contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
