import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg';

function Footer() {
  return (
    <footer className="bg-[#010001] h-full text-white py-4 lg:grid lg:grid-flow-row lg:grid-cols-3">

      <div className="flex flex-col lg:flex-row lg:gap-10 justify-center items-center py-10">

        <img
          src={logo}
          alt="PetMe logo"
          className="w-20 h-20 rounded-full"
        />

        <div className="text-center">

          <h2 className="text-sm">
            ADOPT A PET
          </h2>

          <h2 className="text-sm mt-4">
            Give a life to an animal in need
          </h2>

        </div>

      </div>

      <div className="flex flex-col justify-center gap-2">

        <h3 className="text-2xl text-center">Subscribe to our newsletter</h3>
        <p className="text-md text-center">
          Get the latest news and updates delivered straight to your inbox.
        </p>
        <div className="text-center">
          <input
            className="  bg-opacity-50 my-1 mr-2 p-2 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
          />
          <button
            className="bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded-md"
            type="submit"
          >
            Subscribe
          </button>
        </div>

      </div>

      <div className="flex-1 flex flex-col items-center justify-center py-5">

        <div className="text-2xl">Follow us on</div>

        <div className="flex mt-2 flex-row space-x-3 my-0">

          <div>
            <Link to className="w-5 ml-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                className="fill-white"
                viewBox="0 0 20 20"
              >
                <path
                  d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                />
              </svg>
            </Link>
          </div>

          <div>
            <Link to className="w-10 ml-3 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                className="fill-white"
                viewBox="0 0 20 20"
              >
                <path
                  d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                />
              </svg>
            </Link>
          </div>

          <div>
            <Link
              to="https://github.com/akshitagupta15june/PetMe"
              target="_blank"
              className="w-10 ml-3 mr-3"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                className="fill-white"
                viewBox="0 0 20 20"
              >
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
