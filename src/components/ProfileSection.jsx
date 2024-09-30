import React, { useState } from "react";
import Footer from "../components/Footer";

export default function ProfilePage() {
  const [diseases, setDiseases] = useState([]);
  const [newDisease, setNewDisease] = useState({
    name: "",
    description: "",
    document: null,
  });

  // State for profile information
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profile, setProfile] = useState({
    fullName: "Johnatan Smith",
    email: "example@example.com",
    phone: "(097) 234-5678",
    mobile: "(098) 765-4321",
    address: "Bay Area, San Francisco, CA",
    bloodGroup: "O+",
    allergies: "Peanuts, Penicillin",
    chronicConditions: "Hypertension",
    emergencyContact: "Jane Smith (Mother) - (123) 456-7890",
    familyDoctor: "Dr. Sarah Johnson",
    hospitalPreference: "Stanford Medical Center",
  });

  // State for health data editing
  const [isEditingHealthData, setIsEditingHealthData] = useState(false);

  const handleAddDisease = (e) => {
    e.preventDefault();
    setDiseases([...diseases, newDisease]);
    setNewDisease({ name: "", description: "", document: null });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDisease({ ...newDisease, [name]: value });
  };

  const handleFileChange = (e) => {
    setNewDisease({ ...newDisease, document: e.target.files[0] });
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleHealthDataChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSaveProfile = () => {
    // Save profile changes here (e.g., API call)
    setIsEditingProfile(false);
  };

  const handleSaveHealthData = () => {
    // Save health data changes here (e.g., API call)
    setIsEditingHealthData(false);
  };

  return (
    <>
      <div className="relative isolate px-4 py-8 lg:px-12 lg:py-24 overflow-hidden z-10">
        {/* Top Blur Effect */}
        <div
          className="absolute inset-x-0 -top-60 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-15rem)] aspect-[1155/678] w-[50rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500 to-cyan-500 opacity-30 sm:left-[calc(50%-35rem)] sm:w-[80rem] z-0"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto text-center lg:py-16 px-4 lg:px-6 relative z-10 pt-24">
          <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-6">
            Profile Information
          </h1>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col lg:flex-row items-start gap-6 px-4 lg:px-8 relative z-10">
          {/* Left Column */}
          <div className="lg:w-1/3 w-full">
            {/* Profile Card */}
            <div className="rounded-lg shadow-md p-4 lg:p-6 text-center lg:flex-shrink-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                alt="avatar"
                className="rounded-full mx-auto w-32 lg:w-64 mb-4"
              />
              <h2 className="text-lg lg:text-xl font-semibold">
                {profile.fullName}
              </h2>
              <p className="text-gray-600 mb-1">{profile.address}</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-2/3 w-full">
            {/* Basic Information */}
            <div className="rounded-lg shadow-md p-4 lg:p-6 mb-6 flex">
              <div className="flex-grow">
                <h3 className="font-semibold text-blue-600 mb-4">Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {isEditingProfile ? (
                    <>
                      <div>
                        <label className="font-semibold">Full Name</label>
                        <input
                          type="text"
                          name="fullName"
                          value={profile.fullName}
                          onChange={handleProfileChange}
                          className="mt-1 p-2 border rounded w-full"
                          required
                        />
                      </div>
                      <div>
                        <label className="font-semibold">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={profile.email}
                          onChange={handleProfileChange}
                          className="mt-1 p-2 border rounded w-full"
                          required
                        />
                      </div>
                      <div>
                        <label className="font-semibold">Phone</label>
                        <input
                          type="text"
                          name="phone"
                          value={profile.phone}
                          onChange={handleProfileChange}
                          className="mt-1 p-2 border rounded w-full"
                          required
                        />
                      </div>
                      <div>
                        <label className="font-semibold">Mobile</label>
                        <input
                          type="text"
                          name="mobile"
                          value={profile.mobile}
                          onChange={handleProfileChange}
                          className="mt-1 p-2 border rounded w-full"
                          required
                        />
                      </div>
                      <div>
                        <label className="font-semibold">Address</label>
                        <input
                          type="text"
                          name="address"
                          value={profile.address}
                          onChange={handleProfileChange}
                          className="mt-1 p-2 border rounded w-full"
                          required
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <h4 className="font-semibold">Full Name</h4>
                        <p className="text-gray-600">{profile.fullName}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Email</h4>
                        <p className="text-gray-600">{profile.email}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Phone</h4>
                        <p className="text-gray-600">{profile.phone}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Mobile</h4>
                        <p className="text-gray-600">{profile.mobile}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Address</h4>
                        <p className="text-gray-600">{profile.address}</p>
                      </div>
                    </>
                  )}
                </div>
                <button
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
                  onClick={() => setIsEditingProfile(!isEditingProfile)}
                >
                  {isEditingProfile ? "Cancel" : "Edit Profile"}
                </button>
                {isEditingProfile && (
                  <button
                    className="mt-4 ml-2 bg-green-600 text-white px-4 py-2 rounded"
                    onClick={handleSaveProfile}
                  >
                    Save
                  </button>
                )}
              </div>
            </div>

            {/* Health Data Section */}
            <div className="rounded-lg shadow-md p-4 lg:p-6 mb-6">
              <h3 className="font-semibold text-blue-600 mb-4">Health Data</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {isEditingHealthData ? (
                  <>
                    <div>
                      <label className="font-semibold">Blood Group</label>
                      <input
                        type="text"
                        name="bloodGroup"
                        value={profile.bloodGroup}
                        onChange={handleHealthDataChange}
                        className="mt-1 p-2 border rounded w-full"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-semibold">Allergies</label>
                      <input
                        type="text"
                        name="allergies"
                        value={profile.allergies}
                        onChange={handleHealthDataChange}
                        className="mt-1 p-2 border rounded w-full"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-semibold">
                        Chronic Conditions
                      </label>
                      <input
                        type="text"
                        name="chronicConditions"
                        value={profile.chronicConditions}
                        onChange={handleHealthDataChange}
                        className="mt-1 p-2 border rounded w-full"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-semibold">Emergency Contact</label>
                      <input
                        type="text"
                        name="emergencyContact"
                        value={profile.emergencyContact}
                        onChange={handleHealthDataChange}
                        className="mt-1 p-2 border rounded w-full"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-semibold">Primary Doctor</label>
                      <input
                        type="text"
                        name="familyDoctor"
                        value={profile.familyDoctor}
                        onChange={handleHealthDataChange}
                        className="mt-1 p-2 border rounded w-full"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-semibold">
                        Hospital Preference
                      </label>
                      <input
                        type="text"
                        name="hospitalPreference"
                        value={profile.hospitalPreference}
                        onChange={handleHealthDataChange}
                        className="mt-1 p-2 border rounded w-full"
                        required
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h4 className="font-semibold">Blood Group</h4>
                      <p className="text-gray-600">{profile.bloodGroup}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Allergies</h4>
                      <p className="text-gray-600">{profile.allergies}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Chronic Conditions</h4>
                      <p className="text-gray-600">
                        {profile.chronicConditions}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Emergency Contact</h4>
                      <p className="text-gray-600">
                        {profile.emergencyContact}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Primary Doctor</h4>
                      <p className="text-gray-600">{profile.familyDoctor}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Hospital Preference</h4>
                      <p className="text-gray-600">
                        {profile.hospitalPreference}
                      </p>
                    </div>
                  </>
                )}
              </div>
              <button
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
                onClick={() => setIsEditingHealthData(!isEditingHealthData)}
              >
                {isEditingHealthData ? "Cancel" : "Edit Health Data"}
              </button>
              {isEditingHealthData && (
                <button
                  className="mt-4 ml-2 bg-green-600 text-white px-4 py-2 rounded"
                  onClick={handleSaveHealthData}
                >
                  Save
                </button>
              )}
            </div>

            {/* Diseases Section */}
            <div className="rounded-lg shadow-md p-4 lg:p-6 mb-6">
              <h3 className="font-semibold text-blue-600 mb-4">
                Health Problems
              </h3>
              <form
                onSubmit={handleAddDisease}
                className="flex flex-col sm:flex-row sm:items-end gap-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Health Problem"
                  value={newDisease.name}
                  onChange={handleInputChange}
                  className="flex-grow p-2 border rounded"
                  required
                />
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  value={newDisease.description}
                  onChange={handleInputChange}
                  className="flex-grow p-2 border rounded"
                  required
                />
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="flex-grow border rounded"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded w-full sm:w-auto"
                >
                  Add Health Problem
                </button>
              </form>
              <ul className="list-disc pl-5 mt-4">
                {diseases.map((disease, index) => (
                  <li key={index} className="mb-2">
                    <strong>{disease.name}</strong>: {disease.description}
                    {disease.document && (
                      <span> (Document: {disease.document.name})</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
