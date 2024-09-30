import { useRef, useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import Contact from "./Contact Page";
import Loader from "./Loader";

export default function Main() {
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
        // Main Intro
        <div className="relative isolate px-6 pt-6 lg:px-8 overflow-hidden">
          {/* Top Blur Effect */}
          <div
            className="absolute inset-x-0 -top-60 transform-gpu overflow-hidden blur-3xl sm:-top-80"
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

          <div className="mx-auto max-w-2xl py-24 lg:py-48 text-center sm:py-24">
            <video
              src="/src/assets/heartbeat.mp4"
              autoPlay
              muted
              loop
              className="mx-auto inset-0 w-full h-full object-cover"
              style={{
                objectFit: "cover", // Ensures the video covers the div without stretching
                width: "40%", // Makes the video responsive
                height: "40%",
              }}
            ></video>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Hridhaya
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Hridhaya is focused on using NFC technology to securely store and
              provide instant access to vital health information.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/newuser"
                className="rounded-md bg-cyan-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 z-20"
              >
                Get Started
              </a>
              <button
                onClick={scrollToAbout}
                className="text-sm font-semibold leading-6 text-gray-900 z-30"
              >
                <a href="/login">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </button>
            </div>
          </div>

          <div className="relative isolate p-24 lg:py-16 lg:px-6 text-black z-10">
            {/* Bottom Blur Effect */}
            <div
              className="absolute inset-x-0 bottom-[calc(100%-13rem)] overflow-hidden transform-gpu blur-3xl sm:bottom-[calc(100%-10rem)] z-0"
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

          <ServicesSection />

          {/* About Section */}
          <div className="relative isolate p-10 lg:p-36 px-4">
            {/* Top Blur Effect */}
            <div
              className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80"
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

          <AboutSection ref={aboutRef} />
          <div className="relative isolate p-24 lg:py-16 lg:px-6 text-black z-10">
            {/* Bottom Blur Effect */}
            <div
              className="absolute inset-x-0 bottom-[calc(100%-13rem)] overflow-hidden transform-gpu blur-3xl sm:bottom-[calc(100%-10rem)] z-0"
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
          {/* Contact Section */}
          <Contact ref={contactRef} />

          {/* Bottom Blur Effect Below Footer */}
          <div
            className="absolute inset-x-0 bottom-0 transform-gpu overflow-hidden blur-3xl"
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

          {/* Transparent Footer */}
          <Footer className="bg-transparent backdrop-blur-md relative z-30 p-30" />
        </div>
      )}
    </>
  );
}
