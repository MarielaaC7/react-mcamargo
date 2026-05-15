import { useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useEffect } from "react";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    setLoading(true);

    fetch("/data/products.json")
    .then((res)=> res.json())
    .then((data) => setProducts(data))
    .catch(err => console.log(err))
    .finally(() =>{
      setLoading(false)
    });
  }, []);


if (loading) return <p>Cargando...</p>

  return (
    <section>
      <h1>Macetas hechas con amor 💚</h1>
      <p></p>



      <ItemList products={products} />
    </section>
  );
}; 