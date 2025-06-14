import React, { useState } from 'react';
import frame from './img/profile.png'

const Experience = () => {
  const [activeTab, setActiveTab] = useState('mainSkills');

  const renderContent = () => {
    switch (activeTab) {
      case 'awards':
        return (
          <p className="text-w/hite mb-6">
            Awards Section: Recognized as the best designer of the year in 2020 and won multiple awards for innovation and creativity in product design.
          </p>
        );
      case 'education':
        return (
          <p className="text-white mb-6">
            Education Section: Bachelor’s Degree in Graphic Design from ABC University (2003) and Master’s in UI/UX Design from XYZ Institute (2006).
          </p>
        );
      default:
        return (
          <p className="text-white mb-6">
            Hello there! I’m <strong>Suraj Thapa</strong>. I specialize in web
            design and development, and I'm deeply passionate and committed to my craft. With{' '}
            <strong>20 years</strong> of experience as a professional graphic designer.
          </p>
        );
    }
  };

  const renderHeading = () => {
    switch (activeTab) {
      case 'awards':
        return (
          <h2 className="text-3xl font-bold mb-4 text-white">
            Multiple Award Wins{' '}
            <span className="text-blue-500">and Recognitions</span>
          </h2>
        );
      case 'education':
        return (
          <h2 className="text-3xl font-bold mb-4 text-white">
            Academic Excellence{' '}
            <span className="text-blue-500">and Certifications</span>
          </h2>
        );
      default:
        return (
          <h2 className="text-3xl font-bold mb-4 text-white">
            4 Year’s Experience{' '}
            <span className="text-blue-500">on Product Design</span>
          </h2>
        );
    }
  };

  return (
    <section className=" py-12 px-8 p- bg-gradient-to-r from-[#2a1b3d] to-[#44318d]" id='experience'>
      <div className="mx-auto flex flex-col lg:flex-row items-center">
        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center lg:mb-4 "> {/* Reduced the bottom margin here */}
          <div className="relative w-96 h-96 rounded-full overflow-hidden shadow-lg mt-11  hidden sm:flex">
            <img
              src={frame}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 lg:pl-12 mr-8">
          <h3 className="text-sm text-blue-500 uppercase font-semibold mb-2">
            About Me
          </h3>
          {renderHeading()}
          {renderContent()}

          {/* Buttons */}
          <div className="flex space-x-4 mb-6">
            <button 
              className={`px-6 py-2 rounded-md shadow-md ${activeTab === 'mainSkills' ? 'bg-blue-500 text-white' : 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'}`}
              onClick={() => setActiveTab('mainSkills')}
            >
              Main Skills
            </button>
            <button 
              className={`px-6 py-2 rounded-md ${activeTab === 'awards' ? 'bg-blue-500 text-white' : 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'}`}
              onClick={() => setActiveTab('awards')}
            >
              Awards
            </button>
            <button 
              className={`px-6 py-2 rounded-md ${activeTab === 'education' ? 'bg-blue-500 text-white' : 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'}`}
              onClick={() => setActiveTab('education')}
            >
              Education
            </button>
          </div>

          {/* Progress Bars */}
          <div className="space-y-4">
            <div>
              <p className="text-white font-medium mb-1">
                User Experience Design – UI/UX
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: '90%' }}
                ></div>
              </div>
            </div>
            <div>
              <p className="text-white font-medium mb-1">
                Web & User Interface Design – Development
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: '85%' }}
                ></div>
              </div>
            </div>
            <div>
              <p className="text-white font-medium mb-1">
                Interaction Design – Animation
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: '75%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
