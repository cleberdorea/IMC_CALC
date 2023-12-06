function calculate() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("result").innerHTML = "Por favor, insira valores válidos para peso e altura.";
        return;
    }

    const bmi = calculateBMI(weight, height);
    const interpretation = interpretBMI(bmi);
    const waterIntake = calculateWaterIntake(weight);

    const resultMessage = `Seu IMC é ${bmi.toFixed(2)}. Classificação: ${interpretation}. Recomendação de ingestão diária de água: ${waterIntake.toFixed(2)} ml.`;

    document.getElementById("result").innerHTML = resultMessage;
}

function calculateBMI(weight, height) {
    return weight / Math.pow(height, 2);
}

function interpretBMI(bmi) {
    if (bmi < 18.5) {
        return "Magreza (Obesidade Grau 0)";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Normal (Obesidade Grau 0)";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        return "Sobrepeso (Obesidade Grau I)";
    } else if (bmi >= 30.0 && bmi <= 39.9) {
        return "Obesidade (Obesidade Grau II)";
    } else {
        return "Obesidade Grave (Obesidade Grau III)";
    }
}

function calculateWaterIntake(weight) {
    return weight * 35;
}
