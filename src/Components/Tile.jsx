import React from 'react';
import PropTypes from 'prop-types';

const Tile = ({ label, src }) => {
  return (
    <div className="py-1 shadow-[0_3px_10px_rgb(0,0,0,0.2)] shadow-[#679186] duration-500 hover:scale-110">
      <img className="mx-auto w-20 pt-3 pb-3" src={src} alt="html icon" />
      <p>{label}</p>
    </div>
  );
};

Tile.propTypes = {
  label: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default Tile;
