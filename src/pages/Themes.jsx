import { Link } from "react-router-dom";

function Themes() {
  return (
    <>
      <h1>Escolha o tema</h1>
      <Link to='/'>
        <button>
          Pagina Inicial
        </button>
      </Link>
    </>
  );
}

export default Themes;