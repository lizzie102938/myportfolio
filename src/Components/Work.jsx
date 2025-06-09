import React from 'react';
import RentABuddy from '../assets/RentABuddy.png';
import EyeforDetail from '../assets/eyefordetail.png';
import SkillUp from '../assets/SkillUp.png';
import BBB from '../assets/BBBscreenshot.png';
import { inprogress } from '../assets';

const Work = () => {
  return (
    <div name="work" className="w-full bg-[#679186] text-gray-300 md:h-screen">
      <div className="mx-auto flex h-full w-full max-w-[1000px] flex-col justify-center p-4">
        <div className="pb-6">
          <p className="inline border-b-4 border-[#0a192f] text-4xl font-bold text-gray-300">
            Work
          </p>
          <p className="py-6 text-xl">Check out some personal projects</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div
            style={{ backgroundImage: `url(${inprogress})` }}
            className="content-div content-skillup group container mx-auto flex items-center justify-center rounded-md shadow-lg shadow-[#0a192f]"
          >
            <div className="text-center opacity-0 group-hover:opacity-100">
              <div className="text-lg font-bold tracking-wider text-white">
                JUST ONE MOMENT
              </div>
              <div className="text-lg font-bold tracking-wider text-white">
                Interactive map using Unsplash API
              </div>
              <div className="text-md font-bold tracking-wider text-white">
                Next.js, Typescript, Tailwind CSS
              </div>
              <div className="pt-6 text-center">
                {/* <a
                  target="_"
                  rel="noopener noreferrer"
                  href="http://www.skill-up.xyz/"
                >
                  <button className="m-2 rounded-lg bg-white px-4 py-3 text-center text-lg font-bold text-gray-700">
                    Demo
                  </button>
                </a> */}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/lizzie102938/Skill_Up_Project"
                >
                  <button className="rounded-lg bg-white px-4 py-3 text-center text-lg font-bold text-gray-700">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${SkillUp})` }}
            className="content-div content-skillup group container mx-auto flex items-center justify-center rounded-md shadow-lg shadow-[#0a192f]"
          >
            <div className="text-center opacity-0 group-hover:opacity-100">
              <div className="text-lg font-bold tracking-wider text-white">
                SKILL-UP
              </div>
              <div className="text-lg font-bold tracking-wider text-white">
                Le Wagon Final Project
              </div>
              <div className="text-md font-bold tracking-wider text-white">
                Ruby on Rails
              </div>
              <div className="pt-6 text-center">
                <a
                  target="_"
                  rel="noopener noreferrer"
                  href="http://www.skill-up.xyz/"
                >
                  <button className="m-2 rounded-lg bg-white px-4 py-3 text-center text-lg font-bold text-gray-700">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/lizzie102938/Skill_Up_Project"
                >
                  <button className="m-2 rounded-lg bg-white px-4 py-3 text-center text-lg font-bold text-gray-700">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="content-div content-skillup group container mx-auto flex items-center justify-center rounded-md shadow-lg shadow-[#0a192f]">
            <iframe
              className="content-div content-skillup group container mx-auto flex items-center justify-center rounded-md shadow-lg shadow-[#0a192f]"
              width="350"
              height="200"
              src="https://www.youtube.com/embed/2uIrUrGG89c?start=1104"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div
            style={{ backgroundImage: `url(${BBB})` }}
            className="content-div content-BBB group container mx-auto flex items-center justify-center rounded-md shadow-lg shadow-[#0a192f]"
          >
            <div className="text-center opacity-0 group-hover:opacity-100">
              <div className="text-lg font-bold tracking-wider text-white">
                Berlin's Best Bars Project
              </div>
              <div className="text-lg font-bold tracking-wider text-white">
                React Single Page Application
              </div>
              <div className="pt-6 text-center">
                <a
                  target="_"
                  rel="noopener noreferrer"
                  href="https://berlin-best-bars.vercel.app/"
                >
                  <button className="m-2 rounded-lg bg-white px-4 py-3 text-center text-lg font-bold text-gray-700">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/lizzie102938/Berlin-Best-Bars"
                >
                  <button className="m-2 rounded-lg bg-white px-4 py-3 text-center text-lg font-bold text-gray-700">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${EyeforDetail})` }}
            className="content-div content-eyefordetail group container mx-auto flex items-center justify-center rounded-md shadow-lg shadow-[#0a192f]"
          >
            <div className="text-center opacity-0 group-hover:opacity-100">
              <div className="text-lg font-bold tracking-wider text-white">
                Eye For Detail
              </div>
              <div className="text-lg font-bold tracking-wider text-white">
                Company Project
              </div>
              <div className="text-md font-bold tracking-wider text-white">
                React JS Application
              </div>
              <div className="pt-6 text-center">
                {/* <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a> */}
                <a href="https://github.com/lizzie102938/eyefordetail">
                  <button className="m-2 rounded-lg bg-white px-4 py-3 text-center text-lg font-bold text-gray-700">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${RentABuddy})` }}
            className="content-div content-rentabuddy group container mx-auto flex items-center justify-center rounded-md shadow-lg shadow-[#0a192f]"
          >
            <div className="text-center opacity-0 group-hover:opacity-100">
              <div className="text-lg font-bold tracking-wider text-white">
                Rent-A-Buddy
              </div>
              <span className="text-lg font-bold tracking-wider text-white">
                Ruby on Rails
              </span>
              <div className="text-lg font-bold tracking-wider text-white">
                Le Wagon First Rails project
              </div>
              <div className="pt-6 text-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/lizzie102938/rent_a_buddy-1"
                >
                  <button className="m-2 rounded-lg bg-white px-4 py-3 text-center text-lg font-bold text-gray-700">
                    Code
                  </button>
                </a>
                <a
                  target="_"
                  rel="noopener noreferrer"
                  href="http://rent-a-buddy-site.herokuapp.com/"
                >
                  <button className="m-2 rounded-lg bg-white px-4 py-3 text-center text-lg font-bold text-gray-700">
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
