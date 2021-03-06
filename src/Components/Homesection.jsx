import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/*Container*/}
      <div className='max-w-[1000px] mx-auto px-8 pt-14 flex flex-col justify-center h-full'>
        <p className='text-3xl text-[#d3877e]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Lizzie Lerwill</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a web developer</h2>
        <p className='text-[#ede1e1] py-4 max-w-[700px]'>I love designing and creating websites and applications. I am originally from London, but living in Berlin working on new projects and building on my skills. I am well-versed in Ruby on Rails, HTML, CSS, JS ES6, and am now delving into other technologies, such as React and Tailwind, which I used to build this page.</p>
        <p className='text-[#ede1e1] pt-1 pb-4 max-w-[700px]'>See code <a className='inline border-b-2 color-white' href='https://github.com/lizzie102938/myportfolio' target='_' rel='noopener noreferrer'>here.</a></p>
        <div>

          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
          <Link to="work" smooth={true} duration={500}>
          View all work
          </Link>
          <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3'/>
          </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home
