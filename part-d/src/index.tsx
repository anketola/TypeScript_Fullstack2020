import React from "react";
import ReactDOM from "react-dom";

interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CoursePartWithDesc extends CoursePartBase{
  description: string;
}

interface CoursePartOne extends CoursePartWithDesc {
  name: "Fundamentals";
}

interface CoursePartTwo extends CoursePartBase {
  name: "Using props to pass data";
  groupProjectCount: number;
}

interface CoursePartThree extends CoursePartWithDesc {
  name: "Deeper type usage";
  exerciseSubmissionLink: string;
}

interface CoursePartFour extends CoursePartWithDesc {
  name: "Yeet";
  teacher: string;
}

type CoursePart = CoursePartOne | CoursePartTwo | CoursePartThree | CoursePartFour;

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
    return <h2>{name}</h2>;
};

const Content: React.FC<{courseParts: CoursePart[]}> = ({ courseParts })=> {
  return(
    <div>
        {courseParts.map((part, i) => <Part part={part} key={i} />)}
   </div>
  );
};

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const Part: React.FC<{part: CoursePart}> = ({ part }) => {
  switch (part.name) {
    case "Fundamentals":
      return(
        <div>
          <p>
            <strong>Name: {part.name}</strong>
          </p>
          <p>
            Exercises: {part.exerciseCount} 
          </p>
          <p>
            Description: {part.description}
          </p>
        </div>
      );
    case "Using props to pass data":
      return(
        <div>
          <p>
            <strong>Name: {part.name}</strong>
          </p>
          <p>
            Exercises: {part.exerciseCount} 
          </p>
          <p>
            Group projects: {part.groupProjectCount}
          </p>
        </div>
      );
    case "Deeper type usage":
        return(
          <div>
            <p>
              <strong>Name: {part.name}</strong>
            </p>
            <p>
              Exercises: {part.exerciseCount} 
            </p>
            <p>
              Description: {part.description}
            </p>
            <p>
              Submission link: {part.exerciseSubmissionLink}
            </p>
          </div>
      );
    case "Yeet":
          return(
            <div>
            <p>
              <strong>Name: {part.name}</strong>
            </p>
            <p>
              Exercises: {part.exerciseCount} 
            </p>
            <p>
              Description: {part.description}
            </p>
            <p>
              Teacher: {part.teacher}
            </p>
          </div>
          );

    default:
      return assertNever(part);
      
   }
}

const Total: React.FC<{ courseParts: CoursePart[] }> = ({ courseParts }) => {
  return (
    <p>
      <strong>
      Total number of exercises{" "}
      {courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
      </strong>
    </p>
  );
}

const App: React.FC = () => {
  const courseName = "Half Stack application development";
  
  const courseParts: CoursePart[] = [
  {
    name: "Fundamentals",
    exerciseCount: 10,
    description: "This is an awesome course part"
  },
  {
    name: "Using props to pass data",
    exerciseCount: 7,
    groupProjectCount: 3
  },
  {
    name: "Deeper type usage",
    exerciseCount: 14,
    description: "Confusing description",
    exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev"
  },
  {
    name: "Yeet",
    exerciseCount: 9000,
    description: "Wut",
    teacher: "Teachy"
  }
];

  return (
    <div>
      <Header name = {courseName} />
      <Content courseParts = {courseParts} /> 
      <Total courseParts = {courseParts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));