import React from 'react';

function TitleImage() {
  return (
    <div className="main-body-section-div  relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-43" />
      <div className="flex flex-content w-100">
        <div className="main-body-heading-text z-10">
          <h1 className="text-6xl font-bold tracking-wide text-[#CE8A1F]">
            <span
              className="text-[#c97f06] antialiased"
            >
              Adopt
            </span>
            {' '}
            Me
          </h1>
          <p className="text-xl tracking-wide from-neutral-400">
            Give life to an animal in need.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TitleImage;
