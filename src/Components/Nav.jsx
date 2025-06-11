import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import CV from '../documents/CV.pdf';
import Photo from '../assets/mephoto.jpeg';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed flex h-[80px] w-full items-center justify-between bg-[#0a192f] px-4 text-gray-300">
      <div>
        <img
          src={Photo}
          alt="Lizzie"
          className="absolute left-7 top-6 rounded-full"
          style={{ width: '100px' }}
        />
      </div>

      {/*menu*/}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className="z-10 md:hidden">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 flex h-screen w-full flex-col items-center justify-center bg-[#0a192f]'
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>

        <li className="flex h-[60px] w-[160px] items-center justify-between bg-[#8892B0] duration-300 hover:ml-[-10px]">
          <a
            className="flex w-full items-center justify-between text-gray-300"
            href="https://www.linkedin.com/in/lizzielerwill/"
            target="_"
            rel="noopener noreferrer"
          >
            LinkedIn <FaLinkedin size={30} />
          </a>
        </li>
        <li className="flex h-[60px] w-[160px] items-center justify-between bg-[#333333] duration-300 hover:ml-[-10px]">
          <a
            className="flex w-full items-center justify-between text-gray-300"
            href="https://github.com/lizzie102938"
            target="_"
            rel="noopener noreferrer"
          >
            Github <FaGithub size={30} />
          </a>
        </li>
        <li className="flex h-[60px] w-[160px] items-center justify-between bg-[#d3877e] duration-300 hover:ml-[-10px]">
          <Link
            className="flex w-full items-center justify-between text-gray-300"
            to="contact"
            smooth={true}
            duration={500}
          >
            Email <HiOutlineMail size={30} />
          </Link>
        </li>
        <li className="flex h-[60px] w-[160px] items-center justify-between bg-[#565f69] duration-300 hover:ml-[-10px]">
          <a
            className="flex w-full items-center justify-between text-gray-300"
            href={CV}
            target="_"
            rel="noopener noreferrer"
          >
            CV <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>

      {/*social icons*/}
      <div className="flex-column fixed top-[35%] left-0 hidden lg:flex">
        <ul>
          <li className="ml-[-100px] flex h-[60px] w-[160px] items-center justify-between bg-[#8892B0] duration-300 hover:ml-[-10px]">
            <a
              className="flex w-full items-center justify-between text-gray-300"
              href="https://www.linkedin.com/in/lizzielerwill/"
              target="_"
              rel="noopener noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="ml-[-100px] flex h-[60px] w-[160px] items-center justify-between bg-[#333333] duration-300 hover:ml-[-10px]">
            <a
              className="flex w-full items-center justify-between text-gray-300"
              href="https://github.com/lizzie102938"
              target="_"
              rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="ml-[-100px] flex h-[60px] w-[160px] items-center justify-between bg-[#d3877e] duration-300 hover:ml-[-10px]">
            <Link
              className="flex w-full items-center justify-between text-gray-300"
              to="contact"
              smooth={true}
              duration={500}
            >
              Email <HiOutlineMail size={30} />
            </Link>
          </li>
          <li className="ml-[-100px] flex h-[60px] w-[160px] items-center justify-between bg-[#565f69] duration-300 hover:ml-[-10px]">
            <a
              className="flex w-full items-center justify-between text-gray-300"
              href={CV}
              target="_"
              rel="noopener noreferrer"
            >
              CV <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
