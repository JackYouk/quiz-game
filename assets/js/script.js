const root = $("#root");

// generate start page ----------------------------------------------------------------------------------
const title = $('<h1>')
    .text("Codiene Quiz Game")
    .addClass('title');

const description = $('<p>')
    .text("In this quiz, you will be answering a series of 10 multiple choice questions. Answer as many as possible in the one minute time limit.")
    .addClass('description');

const startButton = $('<button>')
    .text("Start")
    .addClass('startButton');

const scoresButton = $('<button>')
    .text("High Scores")
    .addClass('scoresButton');

// root.append(title);
// root.append(description);
// root.append(startButton);
// root.append(scoresButton);


// initialize + generate 1 min counter -------------------------------------------------------------------


// generate quiz question page ---------------------------------------------------------------------------
// array of objects with quiz questions
const questions = [
    {
        question: "bcwjbnewc",
        answerA: "cwwc",
        answerB: "cewewc",
        answerC: "ecwew",
        answerD: "wwe"
    },
    {
        question: "",
        answerA: "",
        answerB: "",
        answerC: "",
        answerD: ""
    },
    {
        question: "",
        answerA: "",
        answerB: "",
        answerC: "",
        answerD: ""
    },
    {
        question: "",
        answerA: "",
        answerB: "",
        answerC: "",
        answerD: ""
    },
    {
        question: "",
        answerA: "",
        answerB: "",
        answerC: "",
        answerD: ""
    },
    {
        question: "",
        answerA: "",
        answerB: "",
        answerC: "",
        answerD: ""
    },
    {
        question: "",
        answerA: "",
        answerB: "",
        answerC: "",
        answerD: ""
    },
    {
        question: "",
        answerA: "",
        answerB: "",
        answerC: "",
        answerD: ""
    },
    {
        question: "",
        answerA: "",
        answerB: "",
        answerC: "",
        answerD: ""
    },
    {
        question: "",
        answerA: "",
        answerB: "",
        answerC: "",
        answerD: ""
    },
];

for(let i = 0; i < questions.length; i++){
    $('<h2>')
        .text(questions[i].question)
        .addClass('question' + i);
    
    $('<radio>')
        .text(questions[i].answerA)
        .addClass('answer' + i);
    $('<radio>')
        .text(questions[i].answerB)
        .addClass('answer' + i);
    $('<radio>')
        .text(questions[i].answerC)
        .addClass('answer' + i);
    $('<radio>')
        .text(questions[i].answerD)
        .addClass('answer' + i);
}
root.append(root.children());


// generate endgame page ---------------------------------------------------------------------------------


// generate score page -----------------------------------------------------------------------------------
