import './Button.sass';
import { Link } from 'react-router-dom';

function Button({ link, pdfLink, text, className }) {
  if (pdfLink) {
    return (
      <div>
        <button
          href={pdfLink}
          target="_blank"
          rel="noreferrer"
          className={`button ${className}`}
          cursor="pointer"
        >
          {text}
        </button>
      </div>
    );
  }

  if (link) {
    return (
      <div>
        <Link to={link} target="_blank" className={`button ${className}`}>
          {text}
        </Link>
      </div>
    );
  }
  return null;
}
export default Button;
