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
    <div name="skills" className="h-screen w-full bg-[#0a192f] text-gray-300">
      <div className="mx-auto flex h-full w-full max-w-[1000px] flex-col justify-center p-4">
        <div className="pb-5">
          <p className="inline border-b-4 border-[#d3877e] text-4xl font-bold">
            Skills
          </p>
        </div>
        <p className="py-4">Used in professional environment:</p>
        <div className="grid w-full grid-cols-2 gap-4 py-2 text-center sm:grid-cols-6">
          {professionalSkillsData.map((skill) => (
            <Tile key={skill.label} label={skill.label} src={skill.src} />
          ))}
        </div>
        <p className="py-4">
          Some lesser experience, experimented with in personal projects:
        </p>
        <div className="grid w-full grid-cols-2 gap-4 py-2 text-center sm:grid-cols-6">
          {personalSkillsData.map((skill) => (
            <Tile key={skill.label} label={skill.label} src={skill.src} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
