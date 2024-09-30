import { useEffect, useRef, useState } from "react";
import ContactPage from "../components/Contact Page";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

export default function Contact() {
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
      {loading ? ( // Show loader while loading
        <Loader />
      ) : (
        <>
          <div className="lg:p-24">
            <ContactPage />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
