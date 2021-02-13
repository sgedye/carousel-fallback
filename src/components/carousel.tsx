import carouselData from "../data/carousel.json";

export const Carousel = () => {
  return (
    <>
      <div className="carousel-container">
        <div className="carousel">
          {carouselData?.map(({ src, alt }, idx) => (
            <div key={idx} className="carousel-item">
              <img src={src} alt={alt} height={400} />
            </div>
          ))}
        </div>
      </div>

      <p className="attribution">
        Images are from{" "}
        <a
          href="https://unsplash.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          upsplash
        </a>
      </p>
    </>
  );
};

// export default Carousel;
