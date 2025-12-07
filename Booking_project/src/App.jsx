import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import Destinations from './components/destination.jsx';
import Footer from './components/Footer.jsx';
import SearchBar from './components/Searchbar.jsx';
import Tours from './components/Tours.jsx';
import Features from './components/Features.jsx';

function App() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Destinations/>
      <SearchBar/>
      <Tours/>
      <Features/>
      <Footer/>
    </>
  );
}

export default App;
