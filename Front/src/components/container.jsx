import { useState, useEffect } from "react";

export default function Container() {
  const [APIState, setAPIState] = useState({
    loading: false,
    error: false,
    data: undefined,
  });

  const [data, setData] = useState(false)

  setData(true)

  useEffect(() => {
    setAPIState({ ...APIState, loading: true });
    fetch("")
      .then((res) => {
        console.log(res);
        if (!res.ok) throw new Error();
        return res.json;
      })
      .then((data) => {
        console.log(data);
        setAPIState({ loading: false, error: false, data: data });
      })
      .catch(() => {
        setAPIState({ loading: false, error: true, data: undefined });
      });
  }, []);
  let content;
  if (APIState.loading) content = "test";
  else if (APIState.error) content = <p>une erreur est survenue...</p>;
  else if (APIState.data?.length > 0) {
    content = (
      <ul>
        {APIState.data.map((item) => (
          <li key={item.id}>
            <span> {item.name}</span>
            <span> {item.level}</span>
            <span> {item.class}</span>
            <span> {item.stat}</span>
          </li>
        ))}
      </ul>
    );
  } else if (APISTate.data?.length === 0) {
    content = <p> Votre requête ne correspond à aucune donner.</p>;
  }
  return (
    <div>
      <h1> Appeler une API</h1>
      {content}
    </div>
  );
}
