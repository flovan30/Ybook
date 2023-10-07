import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const ListItem = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/api/item/type/${props.item}`, {
      method: "GET",
      headers: {
        Accept: "Application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setItems(res.items);
        setIsLoading(false);
      });
  }, [props.item]);

  // Fonction pour gérer la sélection d'un casque
  const handleSelectItem = (item) => {
    setSelectedItem(item);
    props.onSelectItem(item); // Appel de la fonction onSelectItem du parent
  };

  return (
    <section className="my-5">
      <h2 className="outline-none  bg-transparent text-white font text-xs text-center font-bold">
        
      </h2>
      <div>
        <div className="justify-items-center w-5/6 p-11 overflow-hidden text-black">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              <select
                className="text-center outline-none appearance-none w-fit text-white font-bold text-xs overflow-x-hidden    bg-transparent" 
                onChange={(e) =>
                  handleSelectItem(
                    items.find((item) => item.name === e.target.value)
                  )
                }
              >
                {items.map((item) => (
                  <option
                    key={item._id}
                    className="bg-noir"
                    value={item.id}
                  >
                    {item.name}
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

ListItem.propTypes = {
  item: PropTypes.string.isRequired,
  onSelectItem: PropTypes.func.isRequired,
};

export default ListItem;