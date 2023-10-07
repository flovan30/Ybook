import { useParams } from "react-router";
import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import DetailItem from "../components/DetailItem";
import RequestNameClasse from "../components/ReqestNameClasse";

const DetailSetPage = () => {
  const routeParams = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [sets, setSets] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/api/set/${routeParams.id}`, {
      method: "GET",
      headers: {
        Accept: "Application/json",
      },
    })
      .then(res => res.json())
      .then(res => {
        setSets(res.set);
        setIsLoading(false);
      });
  }, [routeParams]);

  return (
    <>
      <Navbar />
      {isLoading ? (
        <div className="text-center">
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-16 h-16 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-white"
              viewBox="0 0 100 101"
              fillRule="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fillRule="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fillRule="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          {sets.map(set => (
            <div
              className="flex justify-center w-full h-full m-auto"
              key={set._id}
            >
              <h1>
                Classe : <RequestNameClasse idClasse={set.id_classe} />
              </h1>
              <div className="mt-2 bg-gris w-80 h-fit justify-around flex flex-wrap border border-noir">
                <div className="w-72 h-24 p-2 font-bold text-xl m-1 flex justify-center left-0">
                  <h1 className="bg-gris flex text-center flex-col justify-center items-center outline-none">
                    {set.name_set}
                  </h1>
                </div>
                <DetailItem idItem={set.id_casque} />
                <div className="bg-[url('/armure.png')] bg-contain w-24 h-24 p-2 border border-noir m-1 flex justify-center">
                  <label htmlFor="armure"></label>
                  <select
                    className="outline-none appearance-none bg-transparent text-white"
                    id="armure"
                    name="armure"
                  >
                    <option className="bg-noir" value="armure1">
                      Armure 1
                    </option>
                    <option className="bg-noir" value="armure2">
                      Armure 2
                    </option>
                    <option className="bg-noir" value="armure3">
                      Armure 3
                    </option>
                  </select>
                </div>
                <div className="bg-[url('/bouclier.png')] bg-contain w-24 h-24 p-2 border border-noir m-1 flex justify-center left-0 justify-self-end">
                  <label htmlFor="bouclier"></label>
                  <select
                    className="outline-none appearance-none bg-transparent text-white"
                    id="bouclier"
                    name="bouclier"
                  >
                    <option className="bg-noir" value="bouclier1">
                      Bouclier 1
                    </option>
                    <option className="bg-noir" value="bouclier2">
                      Bouclier 2
                    </option>
                    <option className="bg-noir" value="bouclier3">
                      Bouclier 3
                    </option>
                  </select>
                </div>
                <div className="bg-[url('/pantalon.png')] bg-contain w-24 h-24 p-2 border border-noir m-1 flex justify-center left-0">
                  <label htmlFor="pantalon"></label>
                  <select
                    className="outline-none appearance-none bg-transparent text-white"
                    id="pantalon"
                    name="pantalon"
                  >
                    <option className="bg-noir" value="pantalon1">
                      Pantalon 1
                    </option>
                    <option className="bg-noir" value="pantalon2">
                      Pantalon 2
                    </option>
                    <option className="bg-noir" value="pantalon3">
                      Pantalon 3
                    </option>
                  </select>
                </div>
                <div className="w-24 h-48 p-2 border border-noir m-1 flex justify-center content-center left-0">
                  <p className="flex text-center justify-center items-center">
                    Preview du stuff
                  </p>
                </div>
                <div className="bg-[url('/gants.png')] bg-contain w-24 h-24 p-2 border border-noir m-1 flex justify-center">
                  <label htmlFor="gants"></label>
                  <select
                    className="outline-none appearance-none bg-transparent text-white"
                    id="gants"
                    name="gants"
                  >
                    <option className="bg-noir" value="gants1">
                      Gants 1
                    </option>
                    <option className="bg-noir" value="gants2">
                      Gants 2
                    </option>
                    <option className="bg-noir" value="gants3">
                      Gants 3
                    </option>
                  </select>
                </div>
                <div className="bg-[url('/bottes.png')] bg-contain w-24 h-24 p-2 border border-noir m-1 flex justify-center left-0">
                  <label htmlFor="bottes"></label>
                  <select
                    className="outline-none appearance-none bg-transparent text-white"
                    id="bottes"
                    name="bottes"
                  >
                    <option className="bg-noir" value="bottes1">
                      Bottes 1
                    </option>
                    <option className="bg-noir" value="bottes2">
                      Bottes 2
                    </option>
                    <option className="bg-noir" value="bottes3">
                      Bottes 3
                    </option>
                  </select>
                </div>
                <div className="w-24 h-24 p-2 border border-noir m-1 flex justify-center">
                  <input
                    className="bg-transparent flex text-center flex-col justify-center items-center outline-none"
                    placeholder="LVL (1-100)"
                    type="level"
                    id="niveau"
                    name="niveau"
                    autoComplete="off"
                    maxLength="3"
                    min="1"
                    max="100"
                    style={{ lineHeight: "2em" }}
                    required
                  ></input>
                </div>
                <div className="bg-[url('/arme.png')] bg-contain w-24 h-24 p-2 border border-noir m-1 flex justify-center left-0 bg-armes.png">
                  <label htmlFor="arme"></label>
                  <select
                    className="outline-none appearance-none bg-transparent text-white"
                    id="arme"
                    name="arme"
                  >
                    <option className="bg-noir" value="arme1">
                      Arme 1
                    </option>
                    <option className="bg-noir" value="arme2">
                      Arme 2
                    </option>
                    <option className="bg-noir" value="arme3">
                      Arme 3
                    </option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};
export default DetailSetPage;
