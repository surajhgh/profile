import React from 'react';
import frame from './img/profile1.png'


const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center px-8 py-16 bg-gradient-to-r from-[#2a1b3d] to-[#44318d]  p-20" id='home'>
      <div className="text-center lg:text-left lg:w-1/2">
        <p className="text-white mb-2 ">Welcome to my Portfolio</p>
        <h1 className="text-4xl font-bold mb-4 text-white">
          Hi I’m <span className="text-white">Suraj Thapa</span>
        </h1>
        <h2 className="text-2xl font-semibold mb-6 text-white">Product Designer</h2>
        <p className="text-white mb-6">
          Collaborating with highly skilled individuals, our agency delivers top-quality services.
        </p>
        <div className="flex justify-center lg:justify-start space-x-4">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600">
            Hire Me!
          </button>
          <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-md shadow-md hover:bg-blue-500 hover:text-white">
            Download CV
          </button>
        </div>
      </div>
      <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
        <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-lg hidden sm:flex">
          <img
            src={frame}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
