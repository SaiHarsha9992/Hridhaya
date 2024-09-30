import React from "react";
import Contact from "./Contact Page";
import Header from "./Header";
import Footer from "./Footer";

export default function SignupPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow bg-white relative">
          <div className="relative isolate px-6 pt-14 lg:px-8">
            {/* Top Blur Effect */}
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[blue] to-[cyan] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              ></div>
            </div>
          </div>

          {/* Main Content */}
          <section className="relative z-10 mx-auto max-w-7xl px-2 sm:px-4 lg:px-6 py-8 lg:py-40 p-12">
            <h2 className="text-3xl font-bold tracking-tight text-black text-center mb-12">
              Sign Up
            </h2>

            <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
              {/* Lottie Animation - Left Side */}
              <div className="flex justify-center lg:w-2/5 w-full max-w-xl mx-auto lg:mx-0">
                <iframe
                  src="https://lottie.host/embed/61d216ad-bf64-4a66-a13f-f5f64698d2a7/0BpTDBEGZC.json"
                  className="rounded-lg lg:w-full lg:h-[550px] h-[300px] w-[90%] lg:max-w-[450px]"
                  title="Signup Animation"
                ></iframe>
              </div>

              {/* Signup Form - Right Side */}
              <div className="flex flex-col lg:w-3/5 w-full bg-white p-8 rounded-lg shadow-lg max-w-xl mx-auto lg:mx-0">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                  Create an Account
                </h3>
                <p className="text-gray-700 text-sm text-center mb-6">
                  Sign up to start managing your health services today.
                </p>

                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Password</label>
                    <input
                      type="password"
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-all duration-300"
                      placeholder="Create a password"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-all duration-300"
                      placeholder="Confirm your password"
                    />
                  </div>

                  {/* Gender Selection */}
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Which gender do you identify as?
                    </label>
                    <div className="flex items-center space-x-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value="Male"
                          className="mr-2"
                        />
                        Male
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value="Female"
                          className="mr-2"
                        />
                        Female
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value="Other"
                          className="mr-2"
                        />
                        Other
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Sign Up
                  </button>
                </form>

                <p className="text-gray-600 text-sm text-center mt-4">
                  Already have an account?{" "}
                  <a
                    href="/login"
                    className="text-indigo-600 font-semibold hover:underline"
                  >
                    Log In
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Bottom Blur Effect */}
          <div
            className="absolute inset-x-0 bottom-0 z-0 transform-gpu overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[blue] to-[cyan] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
