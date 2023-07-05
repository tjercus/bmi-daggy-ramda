import React from "react";
import { BMI } from "./model.js";

// Note that I chose switch/case because I wanted to
//  demonstrate the subtle differences with if/else and pattern matching.
const renderCategory = (bmiCategory) => {
  let category = bmiCategory;
  switch (bmiCategory) {
    case BMI.Underweight:
      category = BMI.Underweight;
      break;
    case BMI.Normal:
      category = BMI.Normal;
      break;
    case BMI.Overweight:
      category = BMI.Overweight;
      break;
    case BMI.Obese:
      category = BMI.Obese;
      break;
  }
  return category;
};

const View = ({ bmiCategory }) => (
  <article className="App">{renderCategory(bmiCategory)}</article>
);

export default View;
