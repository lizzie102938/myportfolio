import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ image, title, subtitle, tech, demoUrl, codeUrl }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="content-div group container mx-auto flex items-center justify-center rounded-md bg-cover bg-center bg-no-repeat shadow-lg shadow-[#0a192f]"
    >
      <div className="p-4 text-center opacity-0 group-hover:opacity-100 sm:p-6">
        <div className="text-md mb-2 font-bold tracking-wider text-white">
          {title}
        </div>
        <div className="text-md mb-2 font-bold tracking-wider text-white">
          {subtitle}
        </div>
        <div className="mb-4 text-sm font-bold tracking-wider text-white">
          {tech}
        </div>

        <div className="flex justify-center gap-4">
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <button className="rounded-lg bg-white px-4 py-2 text-sm font-bold text-gray-700 transition duration-300 hover:bg-pink-600 hover:text-white">
                Demo
              </button>
            </a>
          )}
          {codeUrl && (
            <a href={codeUrl} target="_blank" rel="noopener noreferrer">
              <button className="rounded-lg bg-white px-4 py-2 text-sm font-bold text-gray-700 transition duration-300 hover:bg-pink-600 hover:text-white">
                Code
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
  demoUrl: PropTypes.string,
  codeUrl: PropTypes.string,
};

export default ProjectCard;
