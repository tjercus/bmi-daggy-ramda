import daggy from "daggy";
import { __, cond, lte } from "ramda";

// @see http://learnyouahaskell.com/syntax-in-functions

// Define the BMI type
export const BMI = daggy.taggedSum("BMI", {
  Underweight: [],
  Normal: [],
  Overweight: [],
  Obese: [],
});

// Pattern match with Ramda.cond to determine which BMI category is applicable
export const makeBmi = cond([
  [lte(__, 18.5), () => BMI.Underweight],
  [lte(__, 25), () => BMI.Normal],
  [lte(__, 30), () => BMI.Overweight],
  [() => true, () => BMI.Obese],
]);
