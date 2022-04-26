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
              <p>I'm Lizzie, I'll tell you some more about me here.</p>
            </div>
            <div>
              <p>I'm passionate about all sorts of tech. I would love to create seamless user experiences everyday for good causes.</p>
            </div>
        </div>
      </div>
    </div>

  );
}

export default About;
