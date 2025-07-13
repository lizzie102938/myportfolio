import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-[#0a192f]">
      <div className="mx-auto flex h-full max-w-[1000px] flex-col justify-center px-8 pt-14">
        <p className="text-3xl text-[#d3877e]">Hi, I'm</p>
        <h1 className="text-4xl font-bold text-[#ccd6f6] sm:text-7xl">
          Lizzie Lerwill,
        </h1>
        <h2 className="text-4xl font-bold text-[#8892b0] sm:text-7xl">
          a Frontend Developer
        </h2>
        <p className="max-w-[700px] py-4 text-[#ede1e1]">
          I love designing and creating websites and applications. I'm
          originally from London, but now living and working in Berlin. I work
          with Typescript, React, Redux and CSS on a daily basis in my
          professional life. I'm currently working at Bayes Esports as a
          mid-level developer.
        </p>
        <div>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="w-50 group my-2 inline-flex cursor-pointer items-center border-2 px-6 py-3 text-white hover:border-pink-600 hover:bg-pink-600"
          >
            View technologies
            <span className="duration-300 group-hover:rotate-90">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </Link>
        </div>
        <br></br>
        <p className="text-[#ede1e1]">
          Access my LinkedIn, Github, Email and CV via the left-side tabs on
          this site.
        </p>
        <br></br>
        <p className="max-w-[700px] pt-1 pb-4 text-[#ede1e1]">
          This portfolio was built using Javascript, Tailwind, React and
          deployed with Vercel. See the code for this site{' '}
          <a
            className="color-white inline border-b-2"
            href="https://github.com/lizzie102938/myportfolio"
            target="_"
            rel="noopener noreferrer"
          >
            here.
          </a>
        </p>
        <div>
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="group my-2 inline-flex cursor-pointer items-center border-2 px-6 py-3 text-white hover:border-pink-600 hover:bg-pink-600"
          >
            View work
            <span className="duration-300 group-hover:rotate-90">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
