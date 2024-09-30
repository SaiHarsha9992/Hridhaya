export default function ServicesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
      <h2 className="text-3xl font-bold tracking-tight text-black text-center mb-12">
        Our Services
      </h2>

      <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start">
        {/* Lottie Animation - Left Side */}
        <div className="flex justify-center lg:w-1/2">
          <iframe
            src="https://lottie.host/embed/e847fa39-7b51-44e3-b8de-05631da2b8e3/SyAr3Pja44.json"
            className="rounded-lg lg:w-[800px] lg:h-[500px] max-w-full"
            title="NFC Card Animation"
          ></iframe>
        </div>

        {/* Service Cards - Right Side */}
        <div className="flex flex-col lg:w-1/2 gap-6">
          {/* NFC Cards Service */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              NFC Cards
            </h3>
            <p className="text-gray-700 text-sm">
              Our NFC cards provide secure access to health information, making
              emergency responses and medical visits easier and faster.
            </p>
            <div className="mt-4">
              <a
                href="#"
                className="text-indigo-600 font-semibold hover:underline"
              >
                Learn More →
              </a>
            </div>
          </div>

          {/* Case Study */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Case Study
            </h3>
            <p className="text-gray-700 text-sm">
              See how our NFC technology has helped hospitals and medical
              practitioners improve efficiency and patient care.
            </p>
            <div className="mt-4">
              <a
                href="#"
                className="text-indigo-600 font-semibold hover:underline"
              >
                Learn More →
              </a>
            </div>
          </div>

          {/* Why Us */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Why Choose Us?
            </h3>
            <p className="text-gray-700 text-sm">
              We are dedicated to providing secure and reliable NFC solutions
              that simplify access to critical health information.
            </p>
            <div className="mt-4">
              <a
                href="#"
                className="text-indigo-600 font-semibold hover:underline"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
