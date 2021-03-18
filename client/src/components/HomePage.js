import React from 'react'
import ParticlesJS from './Particles';
import Header from "./Header";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Technologies from "./Technologies";
import Contact from "./Contact";


const HomePage = () => {
    return (
        <div>
        <ParticlesJS/>
         <Header /> 
         <AboutMe />
         <Projects />
         <Technologies />
         <Contact />
        </div>
    )
}

export default HomePage
