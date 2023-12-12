import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const UseEffect = () => {
  const [Assets, setAssets] = useState([]);

  async function getAssets() {
    const reponse = await axios.get("../Assets");
    const data = await reponse.data.Assets;
    console.log(data);
    setAssets(data.slice(0, 20));
  }
  useEffect(() => {
    getAssets();
  }, []);
  return (
    <div>
      <div className="row row-cols-4 gap-2 justify-content-center">
        {Assets.map((Asset) => {
          return <Card Asset={Asset} />;
        })}
      </div>
    </div>
  );
};

export default UseEffect;
