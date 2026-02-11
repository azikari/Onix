import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Services from './components/services/Services'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Pricing from './components/pricing/Pricing'
import Subscribe from './components/subscribe/Subscribe'
import Videos from './components/videos/Videos'
import Contact from './components/contact/Contact'
import Info from './components/info/Info'
import Footer from './components/footer/Footer'


function App() {
  return (
    <>
      <Header />
      <Home />
      <Services />
      <About />
      <Portfolio />
      <Pricing />
      <Subscribe />
      <Videos />
      <Contact />
      <Info />
      <Footer />
    </>
  );
}

export default App;
