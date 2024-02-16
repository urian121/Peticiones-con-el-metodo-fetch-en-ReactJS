import { useState, useEffect } from "react";

const GetApi = () => {
  const [articulos, setArticulos] = useState([]);
  const [recuperado, setRecuperado] = useState(false);

  useEffect(() => {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=50")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArticulos(data);
        setRecuperado(true);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setRecuperado(true); // Assuming you still want to set recuperado to true even if there's an error
      });
  }, []);

  if (!recuperado) {
    return <div>Recuperando datos...</div>;
  }

  return (
    <>
      <h1>Peticiones con el método fetch en ReactJS</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {articulos.map((articulo, index) => (
          <div key={index} className="card">
            <div>{articulo.character}</div>
            <img src={articulo.image} alt={articulo.character} />
          </div>
        ))}
      </div>
    </>
  );
};

export default GetApi;
