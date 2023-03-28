import React from 'react';
import FormsInput from './components/FormsInput';
import inputs from '../../helpers/inputsForDonateForms';

function DonateForms() {
  return (
    <section className="flex flex-col items-center gap-10 p-10 w-full">

      <div className="text-center my-10">

        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Donate Animals
        </h1>
        <p className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-90">
          Fill up the form below and donate your pets.
        </p>

      </div>

      <form
        id="survey-form"
        action="https://formspree.io/f/xayaokzl"
        method="POST"
        className="w-full lg:grid lg:grid-cols-2 gap-4 lg:w-1/2 md:w-2/3"
      >
        { inputs
          .map((inputText, index) => <FormsInput text={inputText} key={inputText} index={index} />)}
      </form>

      <div className="text-center w-full">

        <label htmlFor="message" className="leading-7 text-xl text-gray-900">
          Your Pet Image
        </label>

        <div className="max-w-3xl mx-auto mt-5">

          <label
            className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
          >
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>

              <span className="font-medium text-gray-600">
                Drop files to Attach, or
                <span className="text-blue-600 underline">Browse</span>
              </span>
            </span>

            <input type="file" name="file_upload" className="hidden" />

          </label>
        </div>
      </div>

      <div>

        <input type="checkbox" name="check" id="check" required />

        <span className="p-1 font-medium text-gray-900">
          I have read and agree to the Terms and Conditions of PetMe.
        </span>

      </div>

      <div>

        <button
          type="submit"
          className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Submit
        </button>

      </div>

    </section>
  );
}

export default DonateForms;
