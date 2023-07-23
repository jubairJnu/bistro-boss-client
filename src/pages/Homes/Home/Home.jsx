import Banner from "../../Banner/Banner";
import Category from "../../Category/Category";
import PopularMenu from "../../Popular/PopularMenu";
import Features from "../../features/Features";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Features></Features>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;