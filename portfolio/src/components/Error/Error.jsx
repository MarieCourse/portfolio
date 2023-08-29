import { Link } from 'react-router-dom';
import './Error.sass';

function Error() {
  return (
    <div className="main">
      <div className="errorMessage">
        <h2>404</h2>
        <h3>Oups! La page que vous demandez n'existe pas.</h3>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </div>
    </div>
  );
}

export default Error;
