import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#679186] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#0a192f]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>From sales to coding.</p>
            </div>
            <div>
              <p>Before entering the World of Tech, I worked in sales and marketing for global spirits companies, Pernod Ricard and Rémy Cointreau. I learned to code because I wanted a new challenge that felt creative and meaningful. Using my tech skills and prior business experience, I look to create user experiences that shape modern society. I enjoy working in teams of interesting people and love the collaborative nature of the developer community.</p>
              <br></br>
              <p>Access my LinkedIn, Github, Email and CV from the links on this site.</p>
            </div>
        </div>
      </div>
    </div>

  );
}

export default About;
