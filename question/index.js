//  Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
//     - The same groups apply to both men and women.
//     - Underweight: BMI is less than 18.5
//     - Normal weight: BMI is 18.5 to 24.9
//     - Overweight: BMI is 25 to 29.9
//     - Obese: BMI is 30 or more

const calculateBMI = function (weight, height) {
    return weight / (height * height);
  };
  let ans = calculateBMI(10, 20);
  
  if (ans < 18.5) {
    console.log("Underweight");
  } else if (ans >= 18.5 && ans <= 24.9) {
    console.log("Normal weight");
  } else if (ans >= 25 && ans <= 29.9) {
    console.log("Over weight");
  } else {
    console.log("Obese");
  }
  