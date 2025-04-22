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
      
    <h1>This website is temporarily closed because of unpaid dues..</h1>
    </>
  );
}
