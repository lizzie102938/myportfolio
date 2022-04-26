import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/CSSicon.png';
import ES6 from '../assets/es6.jpeg';
import GITHUB from '../assets/githubicon.png';
import RUBY from '../assets/rubyicon.png';
import ROR from '../assets/rails2.png';
import SASS from '../assets/sassicon.webp';
import TAILWIND from '../assets/tailwind.png';
import REACT from '../assets/react.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/*Container*/}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#f9b4ab]'>Skills</p>
          <p className='py-4 text-xl'>These are the technologies I know:</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4'>
          <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] shadow-[#679186] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto pt-3' src={HTML} alt="HTML icon" />
            <p>HTML</p>
          </div>
          <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] shadow-[#679186] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto pt-3' src={CSS} alt="CSS icon" />
            <p>CSS</p>
          </div>
          <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] shadow-[#679186] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto pt-3' src={ES6} alt="ES6 icon" />
            <p>ES6</p>
          </div>
          <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] shadow-[#679186] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto pt-3' src={REACT} alt="REACT icon" />
            <p>REACT</p>
          </div>
          <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] shadow-[#679186] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto pt-3' src={GITHUB} alt="GITHUB icon" />
            <p>GITHUB</p>
          </div>
          <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] shadow-[#679186] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto pt-3' src={RUBY} alt="RUBY icon" />
            <p>RUBY</p>
          </div>
          <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] shadow-[#679186] hover:scale-110 duration-500  content-center'>
            <img className='w-20 mx-auto pt-3' src={ROR} alt="RUBY ON RAILS icon" />
            <p>RUBY ON RAILS</p>
          </div>
          <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] shadow-[#679186] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto pt-3' src={SASS} alt="SASS icon" />
            <p>SASS</p>
          </div>
          <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] shadow-[#679186] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto pt-3' src={TAILWIND} alt="TAILWIND icon" />
            <p>TAILWIND</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
