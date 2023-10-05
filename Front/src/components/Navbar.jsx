import { UserCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ol className="bg-gris flex items-center justify-between">
        <li>
          <Link to="HomePage" className="font-bold text-2xl">
            YBook
          </Link>
        </li>
        <li>
          <Link to="EditionPage">Mes stuffs</Link>
        </li>
        <li>
          <Link to="ListPage">List</Link>
        </li>
        <li>
          <Link to="encyclopedie">Tous les équipements</Link>
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
