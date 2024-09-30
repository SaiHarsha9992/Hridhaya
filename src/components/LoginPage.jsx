import React from "react";
import Contact from "./Contact Page";
import Header from "./Header";
import Footer from "./Footer";

export default function LoginPage() {
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
          <section className="mx-auto max-w-7xl px-4 sm:px-6 py-24 lg:px-8 py-12 lg:py-40 z-30 relative mb-32">
            <h2 className="text-3xl font-bold tracking-tight text-black text-center mb-12">
              Login
            </h2>
            <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
              {/* Lottie Animation - Left Side */}
              <div className="flex justify-center lg:w-2/5 w-full max-w-xl mx-auto lg:mx-0">
                <iframe
                  src="https://lottie.host/embed/bd28b18d-c2fb-4e60-aa27-311beacd6de5/YoGmxIqSPF.json"
                  className="rounded-lg lg:w-full lg:h-[450px] h-[300px] w-[90%] lg:max-w-[450px]"
                  title="Login Animation"
                ></iframe>
              </div>
              {/* Login Form - Right Side */}
              <div className="flex flex-col lg:w-3/5 w-full bg-white p-8 rounded-lg shadow-lg max-w-xl mx-auto lg:mx-0">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                  Welcome Back
                </h3>
                <p className="text-gray-700 text-sm text-center mb-6">
                  Log in to access your dashboard and services.
                </p>
                <form className="space-y-6">
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
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <a
                      href="/forgot"
                      className="text-indigo-600 hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Log In
                  </button>
                </form>
                <p className="text-gray-600 text-sm text-center mt-4">
                  Don't have an account?{" "}
                  <a
                    href="/signup"
                    className="text-indigo-600 font-semibold hover:underline"
                  >
                    Sign Up
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
      <Footer className="z-10 relative" />
    </>
  );
}
