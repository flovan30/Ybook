import { useEffect, useState } from "react";

function SectionAccordions() {
  useEffect(() => {
    fetch(`http://127.0.0.1:3000/api/classe/${props.classe}`, {
      method: "GET",
      headers: {
        Accept: "Application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.classe);
        setClasse(res.classe);
        setIsLoading(false);
      });
  }, [props.classe]);

  return (
    <>
      {classe.map((classe) => (
        <div
          key={classe._id}
          className="flex flex-col select-none w-52 h-auto m-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="">
            <h5 className="select-text cursor-default m-2 text-lg text-center font-bold text-gray-900 dark:text-white">
              console.log({classe.name})
            </h5>
          </div>
        </div>
      ))}
    </>
  );
}
export default SectionAccordions;
