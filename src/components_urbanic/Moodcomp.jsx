import React from "react";
import Shopnow from "./Mood";

const Moodcomp = () => {
  return (
    <div>
      <h1>You are every mood</h1>

      <Shopnow
        title="Knits to know"
        imageUrl="https://img101.urbanic.com/v1/4025a27ff1a240ee97282970aac7b9cb.webp"
      />
      <Shopnow
        title="Y2K fever"
        imageUrl="https://img101.urbanic.com/v1/8bcaa2a325bb44cea6ff05d427893f96.webp"
      />
      <Shopnow
        title="Loyers of love"
        imageUrl="https://img101.urbanic.com/v1/363d7493a0e24bb8a3f16dffd7f90f8f.webp"
      />
    </div>
  );
};

export default Moodcomp;
