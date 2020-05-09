const calculateBmi = (height: number, weight: number): string => {
    const BMI = weight / (Math.pow(height/100, 2));
    
    if (BMI < 15) return "Very severely underweight";
    if (BMI >= 15 && BMI < 16) return "Severely underweight";
    if (BMI >= 16 && BMI < 18.5) return "Underweight";
    if (BMI >= 18.5 && BMI < 25) return "Normal (healthy weight)";
    if (BMI >= 25 && BMI < 30) return "Overweight";
    if (BMI >= 30 && BMI < 35) return "Obese Class I (Moderately obese)";
    if (BMI >= 35 && BMI < 40) return "Obese Class II (Severely obese)";
    if (BMI >= 40) return "Obese Class III (Very severely obese)";

}

console.log(calculateBmi(180, 74));