import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import LoginPage from "../components/LoginPage";
export default function BasicDetailsForm() {
  const [loading, setLoading] = useState(true); // State to manage loading

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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    bloodGroup: "",
    emergencyContact: "",
    primaryDoctor: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API or save it in state
    console.log(formData);
  };

  return (
    <>
      {loading ? ( // Show loader while loading
        <Loader />
      ) : (
        <>
          <div className="flex flex-col min-h-screen">
            <div className="flex-grow bg-white relative">
              <div className="relative isolate px-6 pt-24 lg:px-8">
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
              <div className="max-w-md mx-auto p-4 shadow-lg bg-white rounded-md">
                <h2 className="text-2xl font-semibold mb-4">
                  Enter Basic Details
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="age" className="block text-sm font-medium">
                      Age
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="bloodGroup"
                      className="block text-sm font-medium"
                    >
                      Blood Group
                    </label>
                    <input
                      type="text"
                      name="bloodGroup"
                      value={formData.bloodGroup}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="emergencyContact"
                      className="block text-sm font-medium"
                    >
                      Emergency Contact (Relative)
                    </label>
                    <input
                      type="tel"
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="primaryDoctor"
                      className="block text-sm font-medium"
                    >
                      Primary Doctor Name
                    </label>
                    <input
                      type="text"
                      name="primaryDoctor"
                      value={formData.primaryDoctor}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
                  >
                    Submit
                  </button>
                </form>
              </div>

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
      )}
    </>
  );
}
