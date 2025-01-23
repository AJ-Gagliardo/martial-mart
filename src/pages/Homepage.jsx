import Carousel from "../components/Carousel";
import HomePageUI from "../components/HomePageUI";
import ProductsContainer from "../components/ProductsContainer";

function Homepage() {
  return (
    <>
      {/* commented carousel out for now, ill change the images later, trying to work on other components */}
      <Carousel />
      {/* <ProductsContainer /> */}
      <HomePageUI />
    </>
  );
}

export default Homepage;
