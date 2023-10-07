import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const RequestNameClasse = ({ idClasse }) => {
  const [name, setName] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/api/classe/id/${idClasse}`, {
      method: "GET",
      headers: {
        Accept: "Application/json",
      },
    })
      .then(res => res.json())
      .then(res => {
        setName(res.classe);
        console.log(res.classe);
      });
  }, [idClasse]);

  return (
    <>
      {name.map(set => (
        <div className="flex justify-center w-full h-full m-auto" key={set._id}>
          <h1>Classe : {set.name_classe}</h1>
        </div>
      ))}
    </>
  );
};

RequestNameClasse.propTypes = {
  idClasse: PropTypes.string.isRequired,
};

export default RequestNameClasse;
