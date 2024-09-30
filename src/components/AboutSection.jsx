export default function AboutSection() {
  return (
    <>
      <div className="max-w-7xl mx-auto text-center z-20 lg:py-16 lg:px-6 px-4">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
          About Hridhaya
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
          At Hridhaya, our mission is to revolutionize healthcare with NFC card
          technology that offers secure and instant access to vital health
          information.
        </p>
      </div>

      {/* Vision, Mission, Values & Iframe Section */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-6 px-4 lg:px-8">
        {/* Iframe - Top in mobile view, Right side in larger screens */}
        <div className="flex justify-center lg:justify-end lg:w-1/2 max-w-full lg:max-w-6xl mx-auto">
          <iframe
            src="https://lottie.host/embed/10aa4e86-3754-47b9-b076-202bede8d614/Z4hpE8jOIn.json"
            width="100%"
            height="auto"
            className="rounded-lg lg:w-full lg:h-[600px]" // Adjust width and height for large screens
            title="Hridhaya Animation"
          ></iframe>
        </div>

        {/* Cards - Below iframe in mobile view, Left side in larger screens */}
        <div className="flex flex-col gap-6 lg:w-1/2">
          <div className="bg-gradient-to-tr from-[#2563eb] to-[cyan] shadow-md p-8 rounded-lg transition-transform duration-300 hover:transform hover:translate-y-4 z-20">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To create a future where secure access to healthcare information
              is effortless and saves lives.
            </p>
          </div>
          <div className="bg-gradient-to-tr from-[#2563eb] to-[cyan] shadow-md p-8 rounded-lg transition-transform duration-300 hover:transform hover:translate-y-4 z-20">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To provide secure and innovative NFC technology that ensures
              instant access to health information in times of need.
            </p>
          </div>
          <div className="bg-gradient-to-tr from-[#2563eb] to-[cyan] shadow-md p-8 rounded-lg transition-transform duration-300 hover:transform hover:translate-y-4 z-20">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Our Values
            </h3>
            <p className="text-gray-600">
              Security, innovation, and a commitment to improving healthcare for
              everyone.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
