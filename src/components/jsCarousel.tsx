import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import carouselData from "../data/carousel.json";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    focusOnSelect: true,
    autoplay: true,
  };
  return (
    <Slider {...settings} className="bg-blue">
      {carouselData?.map(({ src, alt }, idx) => (
        <div key={idx} className="carousel-item">
          <img src={src} alt={alt} height={400} />
        </div>
      ))}
    </Slider>
  );
}
