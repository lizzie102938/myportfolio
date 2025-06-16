import React from 'react';
import {
  html,
  css,
  es6,
  github,
  ruby,
  ror,
  sass,
  tailwind,
  react,
  typescript,
  mantine,
  bootstrap,
  redux,
  nextjs,
  vercel,
} from '../assets';

import Tile from './Tile';

const professionalSkillsData = [
  { label: 'REACT', src: react },
  { label: 'REDUX', src: redux },
  { label: 'TYPESCRIPT', src: typescript },
  { label: 'MANTINE', src: mantine },
  { label: 'BOOTSTRAP', src: bootstrap },
  { label: 'HTML', src: html },
  { label: 'CSS', src: css },
  { label: 'ES6', src: es6 },
  { label: 'GITHUB', src: github },
  { label: 'SASS', src: sass },
];

const personalSkillsData = [
  { label: 'RUBY', src: ruby },
  { label: 'RUBY ON RAILS', src: ror },
  { label: 'TAILWIND', src: tailwind },
  { label: 'NEXT.JS', src: nextjs },
  { label: 'VERCEL', src: vercel },
];

const Skills = () => {
  return (
    <section
      name="skills"
      className="min-h-screen w-full bg-[#0a192f] px-6 pb-16 pt-16 text-gray-300 md:min-h-[120vh] md:px-32 md:pt-24 md:pb-16"
    >
      <div>
        <h2 className="inline border-b-4 border-[#d3877e] text-4xl font-bold">
          Skills
        </h2>
      </div>

      <p className="py-8">Used in professional environment:</p>
      <div className="grid w-full grid-cols-2 gap-4 text-center sm:grid-cols-4">
        {professionalSkillsData.map(({ label, src }) => (
          <Tile key={label} label={label} src={src} />
        ))}
      </div>

      <p className="py-8">
        Some lesser experience, but have used in personal projects or during Le
        Wagon Fullstack Bootcamp:
      </p>
      <div className="grid w-full grid-cols-2 gap-4 text-center sm:grid-cols-4">
        {personalSkillsData.map(({ label, src }) => (
          <Tile key={label} label={label} src={src} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
