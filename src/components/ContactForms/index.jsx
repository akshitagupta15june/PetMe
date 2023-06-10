/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function ContactForms() {
  return (
    <section className="text-gray-600 body-font relative bg-[url('Assets/Images/pet-don.jpg')] bg-center bg-no-repeat
    bg-cover"
    >
      <div className="container px-5 py-24 mx-auto card backdrop-blur-sm">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact Us
          </h1>
          <div className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-90">
            <p>Any issues?</p>
            <p className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-90">
              Fill the form below and our team will
              contact you shortly.
            </p>
          </div>
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
                    data-testid="nameInputField"
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
                    data-testid="emailInputField"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <label
                  htmlFor="contact_message"
                  className="leading-7 text-sm text-gray-900"
                >
                  Message
                </label>
                <textarea
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  id="contact_message"
                  name="contact_message"
                  required
                  rows="6"
                  placeholder="Your message"
                  data-testid="messageInputField"
                />
              </div>
              <div className="p-4 w-full">
                <button
                  type="submit"
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForms;
