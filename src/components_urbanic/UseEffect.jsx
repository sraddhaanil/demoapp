import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const UseEffect = () => {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const reponse = await axios.get("https://dummyjson.com/carts");
    const data = await reponse.data.products;
    setProducts(data.slice(0, 20));
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <h1 className="text-center">Sasta Meesho</h1>
      <div className="row row-cols-4 gap-2 justify-content-center">
        {products.map((product) => {
          return <Card product={product} />;
        })}
      </div>
    </div>
  );
};

export default UseEffect;
