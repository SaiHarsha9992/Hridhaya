import React, { useEffect, useRef, useState } from "react";
import Contact from "./Contact Page";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";

export default function AboutPage() {
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const [loading, setLoading] = useState(true); // State to manage loading

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Simulate resource loading
    const loadResources = async () => {
      // Load your resources here (like video, images, etc.)
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
      <Header />
      {loading ? ( // Show loader while loading
        <Loader />
      ) : (
        <>
          <div className="bg-white">
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

              {/* Main Content */}

              {/* Bottom Blur Effect */}
              <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
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

            {/* About Section */}
            <div className="relative p-36  px-4 ">
              <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
                  About Hridhaya
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
                  At Hridhaya, our mission is to revolutionize healthcare with
                  cutting-edge NFC card technology that offers secure and
                  instant access to vital health information. We believe in
                  simplifying how healthcare providers, emergency responders,
                  and individuals manage health data, ensuring it is available
                  anytime, anywhere.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Vision */}
                <div className="bg-gradient-to-tr from-[#2563eb] to-[cyan] shadow-md p-6 rounded-lg transition-transform duration-300 hover:transform hover:translate-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Our Vision
                  </h3>
                  <p className="text-gray-600">
                    Our vision is to create a future where secure and real-time
                    access to healthcare information is effortless, saving lives
                    and improving the quality of care.
                  </p>
                </div>
                {/* Mission */}
                <div className="bg-gradient-to-tr from-[#2563eb] to-[cyan] shadow-md p-6 rounded-lg transition-transform duration-300 hover:transform hover:translate-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Our Mission
                  </h3>
                  <p className="text-gray-600">
                    To empower healthcare professionals and individuals with
                    technology that ensures fast and secure access to critical
                    health information, fostering trust and safety in health
                    services.
                  </p>
                </div>
                {/* Values */}
                <div className="bg-gradient-to-tr from-[#2563eb] to-[cyan] shadow-md p-6 rounded-lg transition-transform duration-300 hover:transform hover:translate-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Our Values
                  </h3>
                  <ul className="text-gray-600 list-disc pl-4">
                    <li>Innovation in healthcare</li>
                    <li>Data security and privacy</li>
                    <li>Reliability and accessibility</li>
                    <li>Improving patient outcomes</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="py-12 px-4 lg:px-8">
              <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Our team
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Excepturi repudiandae alias ut. Totam aut facilis. Praesentium
                  in neque vel omnis. Eos error odio. Qui fugit voluptatibus eum
                  culpa.
                </p>
              </div>

              <ul
                role="list"
                className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              >
                <li className="text-center">
                  <img
                    className="mx-auto h-40 w-40 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                    alt="Leslie Alexander"
                  />
                  <h3 className="mt-4 text-lg font-medium text-gray-900">
                    Leslie Alexander
                  </h3>
                  <p className="text-sm text-gray-500">Co-Founder / CEO</p>
                  <p className="text-sm text-gray-500">Toronto, Canada</p>
                </li>

                <li className="text-center">
                  <img
                    className="mx-auto h-40 w-40 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                    alt="Michael Foster"
                  />
                  <h3 className="mt-4 text-lg font-medium text-gray-900">
                    Michael Foster
                  </h3>
                  <p className="text-sm text-gray-500">Co-Founder / CTO</p>
                  <p className="text-sm text-gray-500">Glasgow, Scotland</p>
                </li>

                <li className="text-center">
                  <img
                    className="mx-auto h-40 w-40 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                    alt="Dries Vincent"
                  />
                  <h3 className="mt-4 text-lg font-medium text-gray-900">
                    Dries Vincent
                  </h3>
                  <p className="text-sm text-gray-500">Business Relations</p>
                  <p className="text-sm text-gray-500">Niagara Falls, Canada</p>
                </li>

                <li className="text-center">
                  <img
                    className="mx-auto h-40 w-40 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                    alt="Lindsay Walton"
                  />
                  <h3 className="mt-4 text-lg font-medium text-gray-900">
                    Lindsay Walton
                  </h3>
                  <p className="text-sm text-gray-500">Front-end Developer</p>
                  <p className="text-sm text-gray-500">London, England</p>
                </li>

                <li className="text-center">
                  <img
                    className="mx-auto h-40 w-40 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                    alt="Courtney Henry"
                  />
                  <h3 className="mt-4 text-lg font-medium text-gray-900">
                    Courtney Henry
                  </h3>
                  <p className="text-sm text-gray-500">Designer</p>
                  <p className="text-sm text-gray-500">Toronto, Canada</p>
                </li>

                <li className="text-center">
                  <img
                    className="mx-auto h-40 w-40 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                    alt="Tom Cook"
                  />
                  <h3 className="mt-4 text-lg font-medium text-gray-900">
                    Tom Cook
                  </h3>
                  <p className="text-sm text-gray-500">Director of Product</p>
                  <p className="text-sm text-gray-500">Toronto, Canada</p>
                </li>

                <li className="text-center">
                  <img
                    className="mx-auto h-40 w-40 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                    alt="Whitney Francis"
                  />
                  <h3 className="mt-4 text-lg font-medium text-gray-900">
                    Whitney Francis
                  </h3>
                  <p className="text-sm text-gray-500">Copywriter</p>
                  <p className="text-sm text-gray-500">Toronto, Canada</p>
                </li>

                <li className="text-center">
                  <img
                    className="mx-auto h-40 w-40 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                    alt="Leonard Krasner"
                  />
                  <h3 className="mt-4 text-lg font-medium text-gray-900">
                    Leonard Krasner
                  </h3>
                  <p className="text-sm text-gray-500">Senior Designer</p>
                  <p className="text-sm text-gray-500">Toronto, Canada</p>
                </li>
              </ul>
            </div>

            <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
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

          <div
            className="absolute inset-x-0 top-40 z-10 transform-gpu overflow-hidden blur-3xl sm: top-80"
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
          <Footer />
        </>
      )}
    </>
  );
}
