import './Carousel.sass';

function Carousel({ pictures, alt }) {
  return (
    <div className="carousel">
      <img src={pictures} alt={alt} />
    </div>
  );
}

export default Carousel;
