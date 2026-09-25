import './Error.sass';

function Error() {
  return (
    <div className="main error">
      <h2>404</h2>
      <h3>Oups! La page que vous demandez n'existe pas.</h3>
      <a href="/">Retourner sur la page d’accueil</a>
    </div>
  );
}

export default Error;
