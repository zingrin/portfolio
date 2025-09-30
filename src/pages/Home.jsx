import React from 'react';
import Skills from '../components/Skills';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Education from '../components/Education';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Projects></Projects>
            <Education></Education>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;