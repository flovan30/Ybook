/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  useEffect(() => {
    document.title = "Petillance | 404";
  }, []);

  return (
    <>
      <div className="bg-gray-100 h-screen justify-center select-none">
        <center className="flex h-screen">
          <div className="m-auto align-middle">
            <Player
              className="w-96 my-36"
              loop
              autoplay
              src={
                "https://lottie.host/2d3a6427-4ab8-4d6e-b705-83dcc16b9a3c/IrvPdeMLtp.json"
              }
            />
            <span className="text-gray-500 text-xl">
              Désolé, nous n'avons pas trouvé ce que vous cherchez !
            </span>
            <div className="my-10">
              <Link
                to={"/"}
                className="text-gray-500 font-mono text-xl bg-gray-200 p-3 rounded-md hover:shadow-md"
              >
                Revenir à l'accueil
              </Link>
            </div>
          </div>
        </center>
      </div>
    </>
  );
};
export default ErrorPage;
