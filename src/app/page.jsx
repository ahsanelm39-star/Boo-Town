import AboutCompony from "./components/home commponent/AboutCompony";
import Blogs from "./components/home commponent/Blogs";
import Feature from "./components/home commponent/Feature";
import Hero from "./components/home commponent/Hero";
import Offer from "./components/home commponent/Offer";
import Testimonials from "./components/home commponent/Testimonials";
import TopDestination from "./components/home commponent/TopDestination";
import Tour from "./components/home commponent/Tour";
import TravelDestnation from "./components/home commponent/TravelDestnation";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero/>
      <TopDestination/>
      <AboutCompony/>
      <TravelDestnation/>
      <Feature/>
      <Offer/>
      <Testimonials/>
      <Tour/>
      <Blogs/>
      <Footer/>
    </>
  );
}
