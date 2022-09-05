import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';

function App() {
  return (
   <>
   <Routes>
    <Route exact path='/' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='*' element={<Error />}/>
   </Routes>
   </>
  );
}

export default App;
