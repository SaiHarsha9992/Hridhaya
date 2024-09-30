import React from "react";
import Contact from "./Contact Page";
import Header from "./Header";
import Footer from "./Footer";

export default function ForgotPasswordPage() {
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
          <section className="relative z-10 mx-auto max-w-7xl px-2 sm:px-4 lg:px-6 py-24 lg:py-30">
            <h2 className="text-3xl font-bold tracking-tight text-black text-center mb-12">
              Forgot Password
            </h2>

            <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
              {/* Lottie Animation - Left Side */}
              <div className="flex justify-center lg:w-2/5 w-full max-w-xl mx-auto lg:mx-0">
                <iframe
                  src="https://lottie.host/embed/84d80ce5-0dda-46c1-8084-6b6f992fd556/EhVarcUGKn.json"
                  className="rounded-lg lg:w-full lg:h-[350px] h-[200px] w-[80%] lg:max-w-[350px]"
                  title="Forgot Password Animation"
                ></iframe>
              </div>

              {/* Forgot Password Form - Right Side */}
              <div className="flex flex-col lg:w-3/5 w-full bg-white p-8 rounded-lg shadow-lg max-w-xl mx-auto lg:mx-0">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                  Reset Your Password
                </h3>
                <p className="text-gray-700 text-sm text-center mb-6">
                  Enter your email address to receive a password reset link.
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

                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Send Reset Link
                  </button>
                </form>

                <p className="text-gray-600 text-sm text-center mt-4">
                  Remember your password?{" "}
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
      <Footer className="z-10 relative" />
    </>
  );
}
