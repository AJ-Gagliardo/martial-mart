import { useEffect, useState } from "react";
import "./Carousel.css";

function Carousel() {
  // this was just a test to make the real carousel later
  const data = ["1", "2", "3", "4"];

  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselInfiniteScroll = () => {
    if (currentIndex === data.length - 1) {
      return setCurrentIndex(0);
      // console.log(currentIndex);
    }
    // console.log(currentIndex);
    return setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll();
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    // <div className="carousel-container">
    //   <div className="carousel-item">
    //     <h1>Item 1</h1>
    //   </div>
    //   <div className="carousel-item">
    //     <h1>Item 2</h1>
    //   </div>
    //   <div className="carousel-item">
    //     <h1>Item 3</h1>
    //   </div>
    // </div>
    <div className="carousel-container">
      {data.map((item, index) => {
        return (
          <h1
            className="carousel-item"
            style={{ transform: `translate(-${currentIndex * 100}%)` }}
            key={index}
          >
            {item}
          </h1>
        );
      })}
    </div>
  );
}

export default Carousel;
