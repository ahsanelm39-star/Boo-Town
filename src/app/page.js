import AboutCompony from "./home commponent/AboutCompony";
import Blogs from "./home commponent/Blogs";
import Feature from "./home commponent/Feature";
import Hero from "./home commponent/Hero";
import Offer from "./home commponent/Offer";
import Testimonials from "./home commponent/Testimonials";
import TopDestination from "./home commponent/TopDestination";
import Tour from "./home commponent/Tour";
import TravelDestnation from "./home commponent/TravelDestnation";
import Footer from "./home commponent/Footer";

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
