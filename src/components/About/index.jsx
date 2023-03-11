import React from 'react';

function index() {
  return (
    <section className="bg-[#111827]">
      <section className="max-w-screen-xl mx-auto p-6 flex flex-col items-center">
        <h1 className="text-white font-bold text-3xl lg:text-5xl py-4">
          About
        </h1>
        <p className="text-[#696C72] text-center pb-4 text-sm lg:text-xl">
          Our mission is to provide a platform that connects animal lovers with pets in need
          of a forever home,
          while also providing emergency medical care for stray animals in distress.
          We strive to make a difference in the lives of these innocent creatures by
          offering options to Adopt,
          Donate and through our SOS feature Report stray animals in need of immediate assistance.
          Together, we can create a better world for all animals.
        </p>
      </section>
    </section>
  );
}

export default index;
