document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.getElementById('calculate');
    calculateButton.addEventListener('click', calculateBMI);
});

function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (!isNaN(weight) && !isNaN(height)) {
        const bmi = weight / (height * height);
        const result = document.getElementById('result');
        result.textContent = `Your BMI is: ${bmi.toFixed(2)}`;
    } else {
        alert('Please enter valid weight and height.');
    }
}
