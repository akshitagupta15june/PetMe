/* eslint-disable max-len */
import React from 'react';

function VolunteerForms() {
  return (
    <section className="text-gray-600 body-font relative bg-[url('Assets/Images/pet-don.jpg')] bg-center bg-no-repeat
    bg-cover"
    >
      <div className="container px-5 py-24 mx-auto card backdrop-blur-sm">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Thanks for showing your support
          </h1>
          <p className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-90">
            Fill out the form below to become volunteer.
          </p>
        </div>
        <form id="survey-form" action="https://formspree.io/f/xayaokzl" method="POST">
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-900">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Richard Zeus"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-900">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="youremail@gmail.com"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="address" className="leading-7 text-sm text-gray-900">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Your Address"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="city" className="leading-7 text-sm text-gray-900">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Indore"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="state" className="leading-7 text-sm text-gray-900">State</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    placeholder="Madhya Pradesh"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="country" className="leading-7 text-sm text-gray-900">Country</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    placeholder="India"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="number" className="leading-7 text-sm text-gray-900">Contact Number</label>

                  <input
                    type="text"
                    id="number"
                    name="number"
                    placeholder="+91 0123456789"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onInput="this.value = this.value.replace(/[^0-9\+\.]/g, '').replace(/(\..*)\./g, '$1');"
                    required
                  />

                </div>
              </div>

              <div className="p-2 w-full">
                <input type="checkbox" name="check" id="check" required />
                <span className="p-1 font-medium text-gray-900">
                  I&apos;ve read and agree to the Terms and Conditions for volunteering this organisation.
                </span>
              </div>
              <div className="p-4 w-full">
                <button
                  type="submit"
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default VolunteerForms;
