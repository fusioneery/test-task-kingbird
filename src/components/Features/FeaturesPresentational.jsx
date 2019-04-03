import React from "react";
import "./style.sass";
import Feature from "../Feature/FeaturePresentational";

const FeaturesPresentational = () => {
  return (
    <div className="features">
      <Feature name="Million km of earth" value="55" />
      <Feature
        name="Temperature on the planet"
        leftSideValue="−"
        value="153"
        accentValue="°C"
      />
      <Feature name="Оf the mass of the Earth" value="10,7" accentValue="%" />
    </div>
  );
};

export default FeaturesPresentational;
