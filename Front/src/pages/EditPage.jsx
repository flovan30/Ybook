import { Link } from "react-router-dom";

// Remove this line: import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const EditPage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return isAuthenticated ? (
    <div>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  ) : (
    <div className="text-center my-40">
      <h2 className="font-bold text-2xl">Vous n&apos;êtes pas connecté</h2>
      <div className="my-10">
        <Link
          to={"/"}
          className="text-gray-500 font-mono text-xl bg-gray-200 p-3 rounded-md hover:shadow-md"
        >
          Revenir à l&apos;accueil
        </Link>
      </div>
    </div>
  );
};

export default EditPage;
