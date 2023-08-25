import './Carousel.sass';

function Carousel({ pictures, alt }) {
  return (
    <div className="carousel">
      {pictures.map((picture, index) => (
        <img src={picture} alt={alt} key={index} />
      ))}
    </div>
  );
}

export default Carousel;
