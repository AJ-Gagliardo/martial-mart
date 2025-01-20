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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  useEffect(() => {
    const interval = setInterval(carouselInfiniteScroll, 4000);

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <div className="carousel-container">
      <div
        className="carousel-track"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // Shift the entire track
        }}
      >
        {data.map((item) => (
          <img
            className="carousel-items"
            key={item.id}
            src={item.imgsrc}
            alt={`Carousel item ${item.id}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
