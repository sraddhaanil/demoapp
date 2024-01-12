// import React from "react";
// import CardComponent from "./CardComponent";

// const Category = () => {
//   const images = [
//     "https://img101.urbanic.com/v1/9ad83812aa6b438faf30c5027b556a36.webp",
//     "https://img101.urbanic.com/v1/e5f10e5a8e24498f851ba5e9d6ed4ad8.webp",
//     "https://img101.urbanic.com/v1/429f1b4ef6ec4e26b31d4ec4133cabb9.webp",
//   ];

//   return (
//     <div>
//       <CardComponent images={images} />
//     </div>
//   );
// };

// export default Category;

// App.js

import React from "react";
import CardComponent from "./CardComponent";
import "./CardComponent.css";

const Category = () => {
  return (
    <div className="app-container">
      <div className="card-slider">
        <CardComponent />
      </div>
    </div>
  );
};

export default Category;
