import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Features from './components/Features';
import AudioVideo from './components/AudioVideo';
import WebApp from './components/WebApp';
import MobileApp from './components/MobileApp';
import Values from './components/Values';
import Project from './components/Project';
import Footer from './components/Footer';
import Menu from './components/Menu';
import { useState } from 'react';

function App() {

  const[mobMenu, setMobMenu]= useState(false);
  return (
    <>
    {mobMenu ? (<div>
       <Menu  setmenu={setMobMenu} menu ={mobMenu}/>
      </div>):(
        
        <div className='w-full '>
         <Header setmenu={setMobMenu} menu ={mobMenu}/>
         <Home/>
         <Features/>
         <AudioVideo/>
         <WebApp/>
         <MobileApp/>
         <Values/>
         <Project/>
         <Footer/>
       </div>
      )}
       
    
    
    
   
    
    </>
  );
}

export default App;
