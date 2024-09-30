import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

export default function BuyNfcCard() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    photo: null,
    address: "",
    age: "",
    bloodGroup: "",
    existingConditions: "",
    allergies: "",
    medications: "",
    emergencyContact: "",
  });

  // State to hold multiple diseases
  const [diseases, setDiseases] = useState([]);
  const [newDisease, setNewDisease] = useState({
    name: "",
    description: "",
    document: null,
  });

  const handleAddDisease = (e) => {
    e.preventDefault();
    if (newDisease.name) {
      // Add check to avoid empty disease names
      setDiseases((prevDiseases) => [
        ...prevDiseases,
        {
          name: newDisease.name,
          description: newDisease.description,
          document: newDisease.document,
        },
      ]);
      setNewDisease({ name: "", description: "", document: null }); // Reset newDisease
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDisease((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length) {
      setNewDisease((prev) => ({ ...prev, [name]: files[0] }));
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (send data to backend or handle it accordingly)
    console.log("Form Submitted", formData);
    console.log("Diseases", diseases);
  };

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

  return (
    <>
      {loading ? ( // Show loader while loading
        <Loader />
      ) : (
        <>
          <div className="flex flex-col min-h-screen">
            <div className="flex-grow bg-white relative z-10">
              {/* Main Content */}
              <div className="relative isolate px-6 pt-14 lg:px-8">
                {/* Top Blur Effect */}
                <div
                  className="absolute inset-x-0 top-0 z-0 transform-gpu overflow-hidden blur-3xl sm:-top-20"
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

              <div className="max-w-4xl mx-auto py-16 z-30 relative">
                <h1 className="text-3xl font-bold text-center mb-8">
                  Purchase NFC Health Card
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6 z-30">
                  {/* Basic Information */}
                  <div className="flex flex-col z-30">
                    <label
                      htmlFor="name"
                      className="font-semibold z-30 backdrop-blur bg-inherit"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 p-2 border rounded w-full backdrop-blur bg-inherit border-cyan-600"
                    />
                  </div>

                  <div className="flex flex-col z-30">
                    <label htmlFor="email" className="font-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 p-2 border rounded w-full backdrop-blur bg-inherit border-cyan-600"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="phone" className="font-semibold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-1 p-2 border rounded w-full backdrop-blur bg-inherit border-cyan-600"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="address" className="font-semibold">
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="mt-1 p-2 border rounded w-full backdrop-blur bg-inherit border-cyan-600"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="age" className="font-semibold">
                      Age
                    </label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      required
                      className="mt-1 p-2 border rounded w-full backdrop-blur bg-inherit border-cyan-600"
                    />
                  </div>

                  {/* Medical Information */}
                  <h2 className="text-xl font-semibold">Medical Information</h2>

                  <div className="flex flex-col">
                    <label htmlFor="bloodGroup" className="font-semibold">
                      Blood Group
                    </label>
                    <input
                      type="text"
                      id="bloodGroup"
                      name="bloodGroup"
                      value={formData.bloodGroup}
                      onChange={handleChange}
                      required
                      className="mt-1 p-2 border rounded w-full backdrop-blur bg-inherit border-cyan-600"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="existingConditions"
                      className="font-semibold"
                    >
                      Existing Medical Conditions
                    </label>
                    <textarea
                      id="existingConditions"
                      name="existingConditions"
                      value={formData.existingConditions}
                      onChange={handleChange}
                      required
                      className="mt-1 p-2 border rounded w-full backdrop-blur bg-inherit border-cyan-600"
                      placeholder="E.g., Diabetes, Hypertension"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="allergies" className="font-semibold">
                      Known Allergies
                    </label>
                    <textarea
                      id="allergies"
                      name="allergies"
                      value={formData.allergies}
                      onChange={handleChange}
                      className="mt-1 p-2 border rounded w-full backdrop-blur bg-inherit border-cyan-600"
                      placeholder="E.g., Penicillin, Pollen"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="medications" className="font-semibold">
                      Medications
                    </label>
                    <textarea
                      id="medications"
                      name="medications"
                      value={formData.medications}
                      onChange={handleChange}
                      className="mt-1 p-2 border rounded w-full backdrop-blur bg-inherit border-cyan-600"
                      placeholder="List any medications you are currently taking"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="emergencyContact" className="font-semibold">
                      Emergency Contact
                    </label>
                    <input
                      type="tel"
                      id="emergencyContact"
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleChange}
                      required
                      className="mt-1 p-2 border rounded w-full backdrop-blur bg-inherit border-cyan-600"
                      placeholder="Emergency contact phone number"
                    />
                  </div>

                  {/* Upload Photo */}
                  <div className="flex flex-col">
                    <label htmlFor="photo" className="font-semibold">
                      Upload Photo
                    </label>
                    <input
                      type="file"
                      id="photo"
                      name="photo"
                      onChange={handleChange}
                      className="mt-1 p-2 border rounded w-full backdrop-blur bg-inherit border-cyan-600"
                      accept="image/*"
                      required
                    />
                  </div>

                  {/* Diseases Section */}
                  <div>
                    <h2 className="text-xl font-semibold">Diseases</h2>
                    <form
                      onSubmit={handleAddDisease}
                      className="space-y-2 mt-4"
                    >
                      <input
                        type="text"
                        name="name"
                        value={newDisease.name}
                        onChange={handleInputChange}
                        placeholder="Disease Name"
                        className="p-2 border rounded w-full backdrop-blur bg-inherit border-cyan-600"
                        required
                      />
                      <textarea
                        name="description"
                        value={newDisease.description}
                        onChange={handleInputChange}
                        placeholder="Disease Description"
                        className="p-2 border rounded w-full backdrop-blur bg-inherit border-cyan-600"
                        required
                      />
                      <input
                        type="file"
                        name="document"
                        onChange={handleFileChange}
                        className="mt-1 p-2 border rounded w-full backdrop-blur bg-inherit border-cyan-600"
                        accept="application/pdf"
                      />
                      <button
                        type="submit"
                        className="bg-blue-500 text-white rounded py-2 px-4"
                      >
                        Add Disease
                      </button>
                    </form>
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold">Added Diseases</h3>
                      <ul className="list-disc pl-5">
                        {diseases.map((disease, index) => (
                          <li key={index}>
                            {disease.name} - {disease.description}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="bg-green-500 text-white rounded py-2 px-4"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <div
                className="absolute inset-x-0 bottom-[calc(50%-50rem)] transform-gpu overflow-hidden blur-3xl z-0"
                aria-hidden="true"
              >
                <div
                  className="relative left-1/2 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[blue] to-[cyan] opacity-30 sm:w-[72.1875rem]"
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
