import React from 'react';
import hero from '../../assets/images/main-heading-body-bg.jpg';

function index() {
  return (
    <img
      src={hero}
      alt=""
      className="w-[100vw] h-[50rem] object-cover"
    />
  );
}

export default index;
