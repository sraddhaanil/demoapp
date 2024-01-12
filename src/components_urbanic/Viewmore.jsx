import React from "react";
import View from "../components_urbanic/View";
import "./Viewmore.css";

const Viewmore = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <View
            title="Color Block Knit Pullover"
            description="MRP
        ₹1,390"
            imageUrl="https://img101.urbanic.com/v1/goods-pic/cd406f512e144a93a01ef0c9f5f2681fUR_w1440_q90.webp"
          />
          
        </div>

        <div className="col-md-4">
          <View
            title="Knotted Knit Top"
            description="MRP
        ₹990"
            imageUrl="https://img101.urbanic.com/v1/goods-pic/d73902e65f464ff9830cc3538e221b28UR_w1440_q90.webp"
          />
        </div>

        <div className="col-md-4">
          <View
            title="Plaid Jacket With Detxchable Hood"
            description="MRP
      ₹1,890"
            imageUrl="https://img101.urbanic.com/v1/goods-pic/985dba8d83f54e3284401cffea20d098UR_w1440_q90.webp"
          />
        </div>

        <div className="col-md-4">
          <View
            title="Buttoned Knit Cardigan"
            description="MRP
    ₹1,990"
            imageUrl="https://img101.urbanic.com/v1/goods-pic/6848884168fb42469e1fc2e0ba85c42eUR_w1440_q90.webp"
          />
        </div>

        <div className="col-md-4">
          <View
            title="Gathered Bodycon Dress"
            description="MRP
  ₹2,390"
            imageUrl="https://img101.urbanic.com/v1/goods-pic/b497aa1af8f147679a433c5bee3bb795UR_w750_q90.webp"
          />
        </div>

        <div className="col-md-4">
          <View
            title="Gathered Bodycon Dress"
            description="MRP
  ₹2,390"
            imageUrl="https://img101.urbanic.com/v1/goods-pic/861cf112415645ccbe71040e36a586eeUR_w1440_q90.webp"
          />
        </div>
      </div>
    </div>
  );
};

export default Viewmore;
