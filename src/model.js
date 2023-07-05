// @see http://learnyouahaskell.com/syntax-in-functions

// Define the BMI type
export const BMI = {
  Underweight: "Underweight",
  Normal: "Normal",
  Overweight: "Overweight",
  Obese: "Obese",
};

// Note that a switch does not support ranges, so I needed to use if/else
export const makeBmi = (bmi) => {
  let bmiCategory = "";
  if (bmi <= 18.5) {
    bmiCategory = BMI.Underweight;
  } else if (bmi <= 25) {
    bmiCategory = BMI.Normal;
  } else if (bmi <= 30) {
    bmiCategory = BMI.Overweight;
  } else {
    bmiCategory = BMI.Obese;
  }
  return bmiCategory;
};
