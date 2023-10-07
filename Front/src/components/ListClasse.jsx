import { useEffect, useState } from "react";

const ListClasse = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [classes, setClasses] = useState([]);

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

    const handleSelectItem = (item) => {
        console.log(item);
    };

    return (
        <section className="my-5">
               <h2 className="outline-none  bg-transparent text-white font text-xs text-center font-bold">
        Classe
        </h2>
            <div>
                <div className="justify-items-center w-5/6 p-4 overflow-hidden text-black">
                    {isLoading ? (
                        <div>Loading...</div>
                    ) : (
                        <>
                            <select
                                className="text-center outline-none appearance-none w-fit text-white font-bold text-xs overflow-x-hidden	bg-transparent"
                                 onChange={(e) =>
                                    handleSelectItem(
                                        classes.find((classe) => classe.name === e.target.value)
                                    )
                                }
                            >
                                {classes.map((classe) => (
                                    <option
                                        key={classe._id}
                                        className="flex flex-col select-none w-52 h-auto m-5 bg-noir border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                                    >
                                        <div className="">
                                            <h5 className="select-text cursor-default m-2 text-lg text-center font-bold text-gray-900 dark:text-white">
                                                {classe.name}
                                            </h5>
                                        </div>
                                    </option>
                                ))}
                            </select>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ListClasse;
