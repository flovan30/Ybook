import { useAuth0 } from "@auth0/auth0-react";
import { UserCircleIcon, PowerIcon } from "@heroicons/react/24/outline";

const LoginButton = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      {isAuthenticated ? (
        <div
          className="bg-green-600 p-1 cursor-pointer"
          onClick={() => logout()}
        >
          <PowerIcon className="w-8 stroke-slate-200 h-8 m-4 transition duration-300 ease-in-out hover:scale-125 "></PowerIcon>
        </div>
      ) : (
        <div
          className="bg-red-600 p-1 cursor-pointer"
          onClick={() => loginWithRedirect()}
        >
          <UserCircleIcon className="w-8 stroke-slate-200 h-8 m-4 transition duration-300 ease-in-out hover:scale-125 "></UserCircleIcon>
        </div>
      )}
    </>
  );
};

export default LoginButton;
