import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div className="relative py-8 pt-8 px-4 lg:px-6 ">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold tracking-tight text-black p-4 sm:text-3xl md:text-4xl">
          Contact Us
        </h2>

        <iframe
          src="https://lottie.host/embed/63e9be73-1c6c-4e9b-b5b5-bdf9876f4ded/xKd25qty7s.json"
          className="rounded-lg lg:w-[300px] lg:h-[300px] max-w-full mx-auto"
        ></iframe>
        <p className="mt-4 text-base sm:text-lg text-black p-4">
          At Hridhaya, we are revolutionizing healthcare by providing secure and
          immediate access to vital health information through innovative NFC
          card technology. Our mission is to ensure that your health data is
          always available when you need it most—anytime, anywhere.
        </p>
      </div>
      <div className="mt-8 sm:mt-12 max-w-lg mx-auto grid gap-6 sm:gap-8 md:grid-cols-1 lg:grid-cols-3 lg:max-w-none">
        {/* Card for Sales */}
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-gradient-to-tr from-[#2563eb] to-[cyan]  p-6 sm:p-8 transition-transform duration-300 hover:transform hover:translate-y-4 z-20">
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div className="flex-1">
              <svg
                className="h-6 w-6 sm:h-8 sm:w-8 text-indigo-400 mb-4 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="black"
              >
                <path
                  fillRule="evenodd"
                  d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                  clipRule="evenodd"
                />
              </svg>
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                Sales
              </h3>
              <p className="mt-4 text-sm sm:text-base text-white">
                Discover our range of NFC card solutions designed to fit the
                needs of healthcare providers, hospitals, and individuals
                looking for secure and reliable access to health data.
              </p>
            </div>
          </div>
        </div>

        {/* Card for Technical Support */}
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-gradient-to-tr from-[#2563eb] to-[cyan] p-6 sm:p-8 transition-transform duration-300 hover:transform hover:translate-y-4 z-20">
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div className="flex-1">
              <img
                data-v-a6dc4e15=""
                className="app-modal-icon__icon-image mx-auto mb-4"
                srcset="https://img.icons8.com/?size=100&amp;id=103134&amp;format=png 1x, https://img.icons8.com/?size=200&amp;id=103134&amp;format=png 2x"
                alt="Technical Support"
                width="50"
                height="50"
              />
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                Technical Support
              </h3>
              <p className="mt-4 text-sm sm:text-base text-white">
                Our dedicated team is here to assist you with any technical
                issues or questions about our NFC technology and health
                information systems.
              </p>
            </div>
          </div>
        </div>

        {/* Card for Media Inquiries */}
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-gradient-to-tr from-[#2563eb] to-[cyan] p-6 sm:p-8 transition-transform duration-300 hover:transform hover:translate-y-4 z-20">
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div className="flex-1 ">
              <img
                data-v-a6dc4e15=""
                className="app-modal-icon__icon-image mx-auto mb-4"
                srcset="https://img.icons8.com/?size=64&amp;id=IQhN1RRv9Eyq&amp;format=png 1x, https://img.icons8.com/?size=128&amp;id=IQhN1RRv9Eyq&amp;format=png 2x"
                alt="Media"
                width="50"
                height="50"
              />
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                Media Inquiries
              </h3>
              <p className="mt-4 text-sm sm:text-base text-white ">
                For media inquiries and press coverage, please reach out to us
                for more information about Hridhaya’s innovative healthcare
                solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
