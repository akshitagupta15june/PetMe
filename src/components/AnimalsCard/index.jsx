import React from 'react';
import animals from '../../helpers/animalsForCards';

function AnimalsCard() {
  return (
    <section className="grid grid-cols-1 mx-auto gap-10 mt-14 lg:grid-cols-3 mb-10 md:grid-cols-2">
      { animals.map((animal) => (
        <section className="flex flex-col">
          <img
            src={animal.image}
            alt={animal.name}
            className="rounded-md w-[20rem] h-[20rem]"
          />
          <h1 className="self-center text-3xl">{animal.name}</h1>
          <div className="grid grid-cols-2 gap-4 p-2 place-items-center">
            <h2>{animal.type}</h2>
            <h2>{animal.race}</h2>
            <h2>{animal.gender}</h2>
            <h2>{animal.color}</h2>
            <h2>{animal.age}</h2>
            <h2>{animal.location}</h2>
            <button
              type="button"
              className="bg-[#C57837] text-white w-52 p-4 focus:outline-none font-bold rounded md:mt-0 col-span-2"
            >
              <a href="/adopt">
                Adopt
              </a>
            </button>
          </div>
        </section>
      ))}
    </section>
  );
}

export default AnimalsCard;
