import { useEffect, useState } from "react";
import "./Carousel.css";
import carouselImg1 from "../assets/img/carousel01.png";
import carouselImg2 from "../assets/img/carousel02.png";

function Carousel() {
  const data = [
    { id: 1, imgsrc: carouselImg1 },
    { id: 2, imgsrc: carouselImg2 },
  ];

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

  //w-12/12 sm:w-12/12 this was working, i am playing around with something else
  return (
    <div className="carousel-container w-2/2  sm:w-12/12 mx-auto flex">
      {data.map((item, index) => {
        return (
          <img
            className="carousel-items"
            style={{ transform: `translate(-${currentIndex * 100}%)` }}
            key={index}
            src={item.imgsrc}
          >
            {/* {item} */}
          </img>
        );
      })}
    </div>
  );
}

export default Carousel;
