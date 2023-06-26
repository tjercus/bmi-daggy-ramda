import React from "react";

const View = ({ bmiCategory }) => (
  <article className="App">
    {bmiCategory.cata({
      Underweight: () => "You're underweight",
      Normal: () => "You're normal",
      Overweight: () => "You're overweight",
      Obese: () => "You're obese",
    })}
  </article>
);

export default View;
