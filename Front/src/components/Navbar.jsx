import { Link } from "react-router-dom";

import LoginButton from "./LoginButton";

function Navbar() {
  return (
    <div>
      <ol className="bg-gris flex items-center justify-between">
        <li>
          <Link to="/">
            <img
              src="/Ybook_Logo.png"
              alt="logo"
              className="w-20 h-auto m-2 transition duration-300 ease-in-out hover:scale-110"
            ></img>
          </Link>
        </li>
        <li>
          <Link
            to="/new-set"
            className="font-mono relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            Nouveau Stuff
          </Link>
        </li>
        <li>
          <Link
            to="EditionPage"
            className="font-mono relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            Mes stuffs
          </Link>
        </li>
        <li>
          <Link
            to="encyclopedie"
            className="font-mono relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            Tous les équipements
          </Link>
        </li>
        <li>
          <LoginButton />
        </li>
      </ol>
    </div>
  );
}

export default Navbar;
