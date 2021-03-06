import React from 'react'
// import SkillUpCropped from '../assets/croppedskillup.png'
import RentABuddy from '../assets/RentABuddy.png'
// import FlipProject from '../assets/flipproject.jpeg'
import EyeforDetail from '../assets/eyefordetail.png'
import SkillUp from '../assets/SkillUp.png'
import BBB from '../assets/BBBscreenshot.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#679186]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#0a192f]'>Work</p>
          <p className='text-xl py-6'>Check out some of my work:</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${SkillUp})` }}
            className='shadow-lg shadow-[#0a192f] group container rounded-md flex justify-center items-center mx-auto content-div content-skillup'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <div className='text-xl font-bold text-white tracking-wider'>
                SKILL-UP
              </div>
              <div className='text-xl font-bold text-white tracking-wider'>
                Le Wagon Final Project
              </div>
              <div className='text-lg font-bold text-white tracking-wider'>
                Ruby on Rails
              </div>
              <div className='pt-8 text-center'>
                <a target='_' rel='noopener noreferrer' href='http://www.skill-up.xyz/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a target='_blank' rel='noopener noreferrer' href='https://github.com/lizzie102938/Skill_Up_Project'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className='shadow-lg shadow-[#0a192f] group container rounded-md flex justify-center items-center mx-auto content-div content-skillup'>
            <iframe className='shadow-lg shadow-[#0a192f] group container rounded-md flex justify-center items-center mx-auto content-div content-skillup' width="350" height="200" src="https://www.youtube.com/embed/2uIrUrGG89c?start=1104" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div
            style={{ backgroundImage: `url(${BBB})` }}
            className='shadow-lg shadow-[#0a192f] group container rounded-md flex justify-center items-center mx-auto content-div content-BBB'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
            <div className='text-xl font-bold text-white tracking-wider'>
                Berlin's Best Bars Project
              </div>
              <div className='text-lg font-bold text-white tracking-wider'>
                React Single Page Application
              </div>
              <div className='pt-8 text-center'>
                <a target='_' rel='noopener noreferrer' href='https://berlin-best-bars.herokuapp.com/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a target='_blank' rel='noopener noreferrer' href='https://github.com/lizzie102938/Berlin-Best-Bars'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${EyeforDetail})` }}
            className='shadow-lg shadow-[#0a192f] group container rounded-md flex justify-center items-center mx-auto content-div content-eyefordetail'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <div className='text-xl font-bold text-white tracking-wider'>
                Eye For Detail (in progress)
              </div>
              <div className='text-xl font-bold text-white tracking-wider'>
                Company Project
              </div>
              <div className='text-lg font-bold text-white tracking-wider'>
                React JS Application
              </div>
              <div className='pt-8 text-center'>
                {/* <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a> */}
                <a href='https://github.com/lizzie102938/eyefordetail'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}

          <div
            style={{ backgroundImage: `url(${RentABuddy})` }}
            className='shadow-lg shadow-[#0a192f] group container rounded-md flex justify-center items-center mx-auto content-div content-rentabuddy'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <div className='text-xl font-bold text-white tracking-wider'>
                Rent-A-Buddy
              </div>
              <span className='text-xl font-bold text-white tracking-wider'>
                Ruby on Rails
              </span>
              <div className='text-xl font-bold text-white tracking-wider'>
                Le Wagon First Rails project
              </div>
              <div className='pt-8 text-center'>
                <a target='_blank' rel='noopener noreferrer' href='https://github.com/lizzie102938/rent_a_buddy-1'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
                <a target='_' rel='noopener noreferrer' href='http://rent-a-buddy-site.herokuapp.com/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
