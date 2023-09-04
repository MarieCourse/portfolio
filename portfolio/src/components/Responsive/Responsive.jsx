import './Responsive.sass';

function Responsive({ pictures, alt }) {
  return (
    <div className="responsive">
      <img src={pictures} alt={alt} />
    </div>
  );
}

export default Responsive;
