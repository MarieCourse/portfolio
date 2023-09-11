import './Responsive.sass';

// Mockup de projets affichés sur differents supports
function Responsive({ pictures, alt }) {
  return (
    <div className="responsive">
      <img src={pictures} alt={alt} />
    </div>
  );
}

export default Responsive;
