import React from 'react'
import SkillUpCropped from '../assets/croppedskillup.png'
import RentABuddy from '../assets/rentabuddy.jpeg'
import FlipProject from '../assets/flipproject.jpeg'
import EyeforDetail from '../assets/eyefordetail.png'
import SkillUp from '../assets/SkillUp.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#679186]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#0a192f]'>Work</p>
          <p className='text-xl py-6'>Check out my some of my work:</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${SkillUp})` }}
            className='shadow-lg shadow-[#0a192f] group container rounded-md flex justify-center items-center mx-auto content-div content-skillup'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Ruby on Rails
              </span>
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
          <div
            style={{ backgroundImage: `url(${EyeforDetail})` }}
            className='shadow-lg shadow-[#0a192f] group container rounded-md flex justify-center items-center mx-auto content-div content-eyefordetail'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS
              </span>
              <div className='text-lg font-bold text-white'>
                (Project in progress)
              </div>
              <div className='pt-8 text-center'>
                {/* <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a> */}
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${FlipProject})` }}
            className='shadow-lg shadow-[#0a192f] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Single Page Application
              </span>
              <div className='pt-8 text-center'>
                {/* <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a> */}
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* <div
            style={{ backgroundImage: `url(${RentABuddy})` }}
            className='shadow-lg shadow-[#0a192f] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            {/* <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Ruby on Rails
              </span>
              <div className='pt-8 text-center'> */}
                {/* <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a> */}
                {/* <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a> */}
              {/* </div>
            </div>
          </div>  */}
        </div>
      </div>
    </div>
  );
};

export default Work;
