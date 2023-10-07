import { useEffect, useState } from "react";

const ListClasse = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [classes, setClasses] = useState([]); // Initialisez classes avec un tableau vide

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/api/classe`, {
      method: "GET",
      headers: {
        Accept: "Application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setClasses(res.classe);
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="my-5">
      <div>
        <div className="m-auto grid grid-cols-2 lg:grid-cols-4 justify-items-center w-5/6 h-auto max-h-96 p-7 bg-[#EAEAEA] overflow-y-auto">
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
                  {/* ... (votre code SVG) */}
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <>
              {classes.map((classe) => (
                <div
                  key={classe._id}
                  className="flex flex-col select-none w-52 h-auto m-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                  <div className="">
                    <h5 className="select-text cursor-default m-2 text-lg text-center font-bold text-gray-900 dark:text-white">
                      {classe.name}
                      
                    </h5>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ListClasse;
