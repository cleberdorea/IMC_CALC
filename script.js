function calculate() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("result").innerHTML = "Por favor, insira valores válidos para peso e altura.";
        return;
    }

    const bmi = calculateBMI(weight, height);
    const waterIntake = calculateWaterIntake(weight);

    const resultMessage = `Seu IMC é ${bmi.toFixed(2)}. Recomendação de ingestão diária de água: ${waterIntake.toFixed(2)} ml.`;

    document.getElementById("result").innerHTML = resultMessage;
}

function calculateBMI(weight, height) {
    return weight / Math.pow(height, 2);
}

function calculateWaterIntake(weight) {
    return weight * 35;
}
