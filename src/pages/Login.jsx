import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import LoginPage from "../components/LoginPage";
export default function Login() {
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
        <LoginPage />
      )}
    </>
  );
}
