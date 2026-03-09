const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const btn = document.getElementById("calcBtn");
const result = document.getElementById("result");
const category = document.getElementById("resultCategory");

btn.addEventListener("click", () => {

    const height = heightInput.value/100;
    const weight = weightInput.value;

    const bmi = weight / (height * height);

    result.textContent = "BMI:" + " " + bmi.toFixed(1);

    if(bmi.toFixed(1) < 18.5) {
        category.textContent = "Underweight❗";
    } else if(bmi.toFixed(1) >= 18.5 && bmi.toFixed(1) <= 24.9) {
        category.textContent = "Normal ✅";
    } else if(bmi.toFixed(1) >= 25 && bmi.toFixed(1) <= 29.9) {
        category.textContent = "Overweight ⚠️";
    } else if(bmi.toFixed(1) >= 30 && bmi.toFixed(1) <= 34.9) {
        category.textContent = "Obese (Class I) 🚨";
    } else if(bmi.toFixed(1) >= 35 && bmi.toFixed(1) <= 39.9) {
        category.textContent = "Obese (Class II) 🚨🚨";
    } else {
        category.textContent = "Severe Obesity ❌";
    }
})