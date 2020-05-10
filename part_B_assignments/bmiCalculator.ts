interface BmiValues {
    height: number;
    weight: number;
}

const parseBmiArguments = (args: Array<string>): BmiValues => {
    if (args.length < 4) throw new Error("Not enough arguments");
    if (args.length > 4) throw new Error("Too many arguments");
    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            height: Number(args[2]),
            weight: Number(args[3])
        };
    } else {
        throw new Error("Please enter numbers as arguments");
    }
};

export const calculateBmi = (height: number, weight: number): string => {
    const BMI = weight / (Math.pow(height/100, 2));
    
    if (BMI < 15) return "Very severely underweight";
    if (BMI >= 15 && BMI < 16) return "Severely underweight";
    if (BMI >= 16 && BMI < 18.5) return "Underweight";
    if (BMI >= 18.5 && BMI < 25) return "Normal (healthy weight)";
    if (BMI >= 25 && BMI < 30) return "Overweight";
    if (BMI >= 30 && BMI < 35) return "Obese Class I (Moderately obese)";
    if (BMI >= 35 && BMI < 40) return "Obese Class II (Severely obese)";
    if (BMI >= 40) return "Obese Class III (Very severely obese)";

    return "undefined";
};

try {
    const { height, weight } = parseBmiArguments(process.argv);
    console.log(calculateBmi(height, weight));
} catch (e) {
    console.log("Whoops! Something went wrong, message: ", e.message);
    console.log("To use the BMI calculator, please enter as arguments height and weight.");
}

