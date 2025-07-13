import React from 'react';
import {
  discoveryPanel,
  rentABuddy,
  eyeforDetail,
  skillUp,
  bbb,
  bbb2,
  portfolio,
  diyai,
} from '../assets';
import ProjectCard from './ProjectCard';

const Work = () => {
  return (
    <div
      name="work"
      className="min-h-screen w-full bg-[#679186] pt-12 pb-12 text-gray-300 md:min-h-[120vh]"
    >
      <div className="mx-auto flex h-full w-full max-w-[1000px] flex-col justify-center p-4">
        <div className="pb-4 pt-4">
          <p className="inline border-b-4 border-[#0a192f] text-4xl font-bold text-gray-300">
            Work
          </p>
          <p className="py-6 text-xl">
            Check out some of my past and on-going personal projects:
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <ProjectCard
            image={diyai}
            title="DIY-AI (In Progress)"
            subtitle="Full-Stack project."
            tech="Node.js, React.js, Typescript, Express, SCSS modules, Vercel, multiple APIs."
            codeUrl={'https://github.com/lizzie102938/diy-ai'}
          />
          <ProjectCard
            image={discoveryPanel}
            title="The Discovery Panel"
            subtitle="Full-Stack project."
            tech="Next.js, PostgreSQL, Typescript, SCSS modules, Mantine UI, Vercel, multiple APIs."
            demoUrl={'https://the-discovery-panel.online'}
            codeUrl="https://github.com/lizzie102938/the-discovery-panel"
          />
          <ProjectCard
            image={bbb2}
            title="Berlin's Best Bars V.2"
            subtitle="Revamp of old SPA project."
            tech="React, Typescript, CSS, Node.JS, Vercel, Foursquare API."
            // demoUrl="https://berlin-best-bars-v2.vercel.app/"
            codeUrl="https://github.com/lizzie102938/Berlin-Best-Bars-v2"
          />
          {/* <ProjectCard
            image={portfolio}
            title="Portfolio"
            subtitle="React SPA"
            tech="React, JS, Tailwind, Vercel."
            codeUrl={'https://github.com/lizzie102938/myportfolio'}
          /> */}
          <ProjectCard
            image={eyeforDetail}
            title="Eye For Detail (paused)"
            subtitle="React JS Application."
            tech="React, JS, Tailwind."
            codeUrl="https://github.com/lizzie102938/eyefordetail"
            demoUrl={'https://eyefordetail.vercel.app/'}
          />
          <div className="content-div group container mx-auto flex items-center justify-center rounded-md shadow-lg shadow-[#0a192f]">
            <iframe
              width="350"
              height="200"
              src="https://www.youtube.com/embed/2uIrUrGG89c?start=1104"
              title="2022 YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <ProjectCard
            image={skillUp}
            title="SKILL-UP"
            subtitle="Le Wagon Final Project."
            tech="Ruby on Rails, JS, CSS."
            codeUrl="https://github.com/lizzie102938/Skill_Up_Project"
          />

          <ProjectCard
            image={bbb}
            title="Berlin's Best Bar V.1"
            subtitle="React SPA."
            tech="React, JS, CSS, Vercel."
            // demoUrl="https://berlin-best-bars-4j87.vercel.app"
            codeUrl="https://github.com/lizzie102938/Berlin-Best-Bars"
          />

          <ProjectCard
            image={rentABuddy}
            title="Rent-A-Buddy"
            subtitle="Le Wagon First Rails project."
            tech="Ruby on Rails, JS, CSS."
            codeUrl="https://github.com/lizzie102938/rent_a_buddy-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
