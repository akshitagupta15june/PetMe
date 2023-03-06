/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function ContactForms() {
  return (
    <section className="dark:bg-gray-900 b_1 pt-20 pb-20">
      <div className="w-full contact-form-container mx-auto max-w-screen-md">
        <form
          action="https://formspree.io/f/xayaokzl"
          method="POST"
          className="bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 px-8 pt-6 pb-8"
        >
          <p id="contact" />
          <h2 className="text-3xl text-white mt-1 mb-2 text-center bold-500">
            CONTACT US
          </h2>
          <p className="text-base text-center text-white">
            Any issues! Fill the form below and our team will
            contact you shortly.
          </p>
          <br />
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="contact_nom"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
              id="contact_nom"
              name="contact_nom"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="contact_email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
              id="contact_email"
              name="contact_email"
              type="email"
              required
              placeholder="hello@petme"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="contact_message"
              className="block text-white text-sm font-bold mb-2"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
              id="contact_message"
              name="contact_message"
              required
              rows="6"
              placeholder="Your message"
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-gray-800 hover:bg-gray-900 text-center text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Contact Us
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForms;
