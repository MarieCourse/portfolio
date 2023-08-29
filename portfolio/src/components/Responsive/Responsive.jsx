import './Responsive.sass';

function Responsive({ pictures, alt }) {
  return (
    <div className="responsive">
      <img src={pictures} alt={alt} loading="lazy" />
    </div>
  );
}

export default Responsive;
