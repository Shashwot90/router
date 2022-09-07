import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Menu from './Menu';
import Service from './Service';
import User from './User';
import Search from './Search';

function App() {
  const Name = () => {
    return (
      <>
        <h1>This is Name page</h1>
      </>
    )
  }
  return (
   <>
   <Menu />

   <Routes>
    <Route exact path='/' element={ <About />} />
    <Route exact path='/contact' element={<Contact/>} />
    <Route exact path='/service' element={ <Service />} />
    <Route exact path='/search' element={ <Search />} />
    <Route exact path='/user/:fname' element={ <User />} />
    <Route path='/contact/Name' element={<Name />} />
    <Route path='*' element={<Error />}/>
   </Routes>
   </>
  );
}

export default App;
