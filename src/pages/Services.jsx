import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

export default function Services() {
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    // Simulate resource loading
    const loadResources = async () => {
      const timeoutId = setTimeout(() => {
        setLoading(false); // Set loading to false after 3 seconds
      }, 3000); // 3 seconds

      // Cleanup function to clear the timeout if component unmounts
      return () => {
        clearTimeout(timeoutId);
      };
    };

    loadResources();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="bg-white">
            <div className="relative isolate px-6 pt-20 lg:px-8">
              {/* Top Gradient Effect */}
              <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
              >
                <div
                  className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-400 to-cyan-300 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                ></div>
              </div>

              {/* Main Services Section */}
              <div className="relative flex flex-col lg:flex-row justify-center p-6 lg:p-36 lg:px-4 gap-8">
                {/* Left Column */}
                <div className="flex flex-col justify-center space-y-6">
                  {/* Service 1 */}
                  <div className="bg-gradient-to-tr from-blue-500 to-cyan-300 shadow-md p-6 rounded-lg transition-transform duration-300 hover:transform hover:translate-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Health Data Management
                    </h3>
                    <p className="text-gray-600">
                      We offer seamless health data management tools that ensure
                      patients and providers can track and update medical
                      information easily.
                    </p>
                  </div>

                  {/* Service 2 */}
                  <div className="bg-gradient-to-tr from-blue-500 to-cyan-300 shadow-md p-6 rounded-lg transition-transform duration-300 hover:transform hover:translate-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Emergency Medical Access
                    </h3>
                    <p className="text-gray-600">
                      Our technology allows first responders and healthcare
                      providers to access critical patient information during
                      emergencies, saving valuable time.
                    </p>
                  </div>
                </div>

                {/* NFC Health Card (Center) */}
                <div className="mx-auto lg:mx-12 bg-gradient-to-tr from-blue-500 to-cyan-300 shadow-md p-6 rounded-lg flex flex-col justify-center items-center transition-transform duration-300 hover:transform hover:translate-y-4 w-full sm:w-2/3 lg:w-auto">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                    NFC Health Cards
                  </h3>
                  <p className="text-gray-600 mb-4 text-center">
                    Our NFC health cards provide secure and instant access to
                    critical health data, enhancing emergency care and medical
                    management.
                  </p>
                  <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg">
                    <a href="/buy">Buy Now</a>
                  </button>
                </div>

                {/* Right Column */}
                <div className="flex flex-col justify-center space-y-6">
                  {/* Service 3 */}
                  <div className="bg-gradient-to-tr from-blue-500 to-cyan-300 shadow-md p-6 rounded-lg transition-transform duration-300 hover:transform hover:translate-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Personalized Healthcare Solutions
                    </h3>
                    <p className="text-gray-600">
                      We create customized healthcare solutions, tailored to
                      meet the needs of patients and professionals, from
                      hospitals to individual care.
                    </p>
                  </div>

                  {/* Service 4 */}
                  <div className="bg-gradient-to-tr from-blue-500 to-cyan-300 shadow-md p-6 rounded-lg transition-transform duration-300 hover:transform hover:translate-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Data Security & Privacy
                    </h3>
                    <p className="text-gray-600">
                      Our service ensures that all patient information is stored
                      and transmitted securely, following the latest data
                      privacy regulations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Gradient Effect */}
              <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-40rem)]"
                aria-hidden="true"
              >
                <div
                  className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-400 to-cyan-300 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
