import React from 'react';

const About = () => {
  return (
    <div name="about" className="h-screen w-full bg-[#679186] text-gray-300">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="grid w-full max-w-[1000px] grid-cols-2 gap-8 px-4">
          <div className="pb-8 pl-4 sm:text-right">
            <p className="inline border-b-4 border-[#0a192f] text-4xl font-bold">
              About
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex grid w-full max-w-[1000px] gap-8 px-4 sm:grid-cols-2">
            <p className="text-4xl">
              3+ years professional experience in software developmemt working
              for an Esports Data company.
            </p>
            <p>
              With 3 years of experience in the Esports data industry, I was
              promoted to mid-level developer.
            </p>
          </div>

          <div className="flex grid w-full max-w-[1000px] gap-8 px-4 sm:grid-cols-2">
            <p className="text-4xl">From sales to coding.</p>
            <div>
              <p>
                Before entering the World of Tech, I worked in sales and
                marketing for global spirits companies. I learned to code
                because I wanted a new challenge that felt creative and
                meaningful. Using my tech skills and prior business experience,
                I look to create user experiences that shape modern society. I
                enjoy working in teams of interesting people and love the
                collaborative nature of the developer community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // test
  );
};

export default About;
