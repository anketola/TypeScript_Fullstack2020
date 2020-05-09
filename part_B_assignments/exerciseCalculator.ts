interface ExerciseResults {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
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

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));