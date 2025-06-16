import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full bg-[#679186] py-20 text-gray-300">
      <div className="mx-auto max-w-[1000px] px-4">
        <div className="mb-12">
          <p className="inline border-b-4 border-[#0a192f] text-4xl font-bold">
            About
          </p>
        </div>

        <div className="mb-12 grid gap-8 sm:grid-cols-2">
          <p className="text-4xl font-semibold">From sales to coding.</p>
          <p>
            Before entering the World of Tech, I worked in sales and marketing
            for global spirits companies. I learned to code because I wanted a
            new challenge that felt creative and meaningful.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <p className="text-4xl font-semibold">
            2022 - present: Frontend Developer.
          </p>
          <p>
            3+ years professional experience in software development working for
            an Esports Data company, enjoying bringing our products to life for
            internal and external users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
