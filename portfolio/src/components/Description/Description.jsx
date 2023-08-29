import './Description.sass';

function Description({ title, content }) {
  return (
    <div className="description">
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
}

export default Description;
