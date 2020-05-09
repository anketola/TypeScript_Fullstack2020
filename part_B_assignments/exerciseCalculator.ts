interface exerciseValues {
    target: number;
    hours: Array<number>;
}

interface ExerciseResults {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}

const parseExerciseArguments = (args: Array<String>): exerciseValues => {
    if (args.length < 4) throw new Error("Not enough arguments");
    let target;
    if ( isNaN(Number(args[2])) ) {
        throw new Error("Target argument has to be given as a number");
    } else {
        target = Number(args[2]);
    }
    const givenHours = args.slice(3);
    if ( givenHours.filter(hour => isNaN(Number(hour))).length > 0) {
        throw new Error("Exercise hours has to be given as numbers")
    }
    
    return {
        target: target,
        hours: givenHours.map((hour) => Number(hour))
    };

}

const calculateExercises = (doneExercises: Array<number>, target: number): ExerciseResults => {

    const periodLength = doneExercises.length;
    const trainingDays = doneExercises.filter(amount => amount > 0).length;
    const average = doneExercises.reduce((a, c) => a + c) / periodLength;
    let success;
    if (average >= target) {
        success = true;
    } else {
        success = false;
    }

    let rating;
    let ratingDescription;
    if (success) {
        rating = 3;
        ratingDescription = "Congratulations! You reached your target, keep up the good work!";
    } else if (!success && (average / target >= 0.75)) {
        rating = 2;
        ratingDescription = "You worked hard and nearly reached your goal! Keep working to improve!";
    } else {
        rating = 1;
        ratingDescription = "Do not give up! Hard work will eventually pay off!";
    } 

    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average
    };

}

try {
    const { target, hours } = parseExerciseArguments(process.argv);
    console.log(calculateExercises(hours, target));
} catch (e) {
    console.log("Whoopsie! An error occured, message: ", e.message);
    console.log("Please give as arguments first the target hours followed by done daily exercise hours")
}
