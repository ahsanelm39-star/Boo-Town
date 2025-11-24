import AboutCompony from "./commponent/AboutCompony";
import Blogs from "./commponent/Blogs";
import Feature from "./commponent/Feature";
import Hero from "./commponent/Hero";
import Offer from "./commponent/Offer";
import Testimonials from "./commponent/Testimonials";
import TopDestination from "./commponent/TopDestination";
import Tour from "./commponent/Tour";
import TravelDestnation from "./commponent/TravelDestnation";

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
    </>
  );
}
