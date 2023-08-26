import './Button.sass';
import { Link } from 'react-router-dom';

function Button({ link, text, className }) {
  return (
    <div>
      <Link to={link} className={`button ${className}`}>
        {text}
      </Link>
    </div>
  );
}
export default Button;
