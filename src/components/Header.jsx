import React, { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 shadow-md backdrop-blur-lg">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a
              href="/"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              About
            </a>
            <a
              href="/services"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Services
            </a>
            <a
              href="/contact"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Contact Us
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="/login"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-white"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-opacity-50 backdrop-blur-lg"
            onClick={toggleMenu}
            aria-hidden="true"
          ></div>
          <div className="absolute inset-0 flex flex-col p-6">
            <div className="flex items-center justify-between mb-6">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                onClick={toggleMenu}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col space-y-6">
              <a
                href="/"
                className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
              >
                Home
              </a>
              <a
                href="/about"
                className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
              >
                About
              </a>
              <a
                href="/services"
                className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
              >
                Services
              </a>
              <a
                href="/contact"
                className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
              >
                Contact Us
              </a>
              <a
                href="/login"
                className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
