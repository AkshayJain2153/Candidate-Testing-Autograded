const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];

let correctAnswers = ['Sally Ride', 'true', '40', 'Trajectory', '3'];

let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Candidate Name: ")
  console.log(candidateAnswer);

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  // console.log(question);
  // candidateAnswer = input.question("Your answer: ")

  // candidateAnswer = input.question(question)

  for (let index = 0; index < questions.length; index++) {
    let quesNumber = index + 1;
    candidateAnswer = input.question(`The question ${quesNumber} is : ${questions[index]}`);
    candidateAnswers.push(candidateAnswer)

  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  // if (candidateAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
  //   console.log(` Hey ${candidateName}, You have answered correctly`);
  // } else {
  //   console.log(`Hey ${candidateName} your answers are incorrect`);
  // }

  let grade = 0;  //TODO 3.2 use this variable to calculate the candidates score.

  let count = 0;

  for (let j = 0; j < candidateAnswers.length; j++) {
    if (candidateAnswers[j].toString().toLowerCase() === correctAnswers[j].toString().toLowerCase()) {
      count++;
    }
  }

  grade = (count / questions.length) * 100;


  let line = "********-------------------------*********";
  console.log(line);
  console.log();
  console.log(`\nCandidate Name : ${candidateName}`);
  console.log();
  console.log(line);

  for (let c = 0; c < questions.length; c++) {

    let quesNum = c + 1;
    console.log(`\nThe question number ${quesNum} is:\n${questions[c]}`);
    console.log(`\nYour answer : ${candidateAnswers[c]}`);
    console.log(`\nCorrect answer : ${correctAnswers[c]}`);

  }

  console.log(`\n\n>>> Overall Grade: ${grade}% (${count} of ${questions.length} responses correct) <<<`);
  console.log(line);
  console.log();
  if (grade >= 80) {
    console.log(`\nYour exam status >>> Status: PASSED <<<`);
  } else {
    console.log(`\nSorry you exam >>> Status: FAILED <<<`);
  }
  console.log();
  console.log(line);

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log(`Hello, ${candidateName} welcome here\n`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};