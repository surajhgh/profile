import React from 'react';

import NavBar from './components/Nav';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import ServiceCard from './components/ServiceCard';
import Milestones from './components/Milestones';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

import './index.css';

const App = () => {
  return (

    <div>
      <NavBar></NavBar>
      <Hero></Hero>
      <Technologies></Technologies>
      <Experience></Experience>
       <ServiceCard></ServiceCard>
       <Milestones></Milestones>
      <Portfolio></Portfolio>

      <Testimonials></Testimonials>
      <Contact></Contact>


    </div>
  );
};

export default App;
