import { UserCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-gris">
      <ol>
        <li>
          <Link to="HomePage">Accueil</Link>
        </li>
        <li>
          <Link to="EditionPage">edition</Link>
        </li>
        <li>
          <Link to="ListPage">List</Link>
        </li>
        <li>
          <Link to="ConnexionPage">connexion</Link>
        </li>
        <li>
          <Link to="InscriptionPage">inscription</Link>
        </li>
        <li>
          <Link to="AdminPage">
            <UserCircleIcon className="w-6 h-6"></UserCircleIcon>
          </Link>{" "}
        </li>
      </ol>
    </div>
  );
}
export default Navbar;
