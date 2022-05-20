const root = $("#root");

// generate start page -----------------------------------------------------------------------------------
function genStartPage (){
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

    root.append(title);
    root.append(description);
    root.append(startButton);
    root.append(scoresButton);
}

// initialize + generate 1 min counter -------------------------------------------------------------------
function countdown(){
    // gen timer
    const timer = $('<div>');

    // countdown init
    let count = 60;
    setInterval(function(){
        if(count >= 0){
            timer.text(count + " seconds remaining");
            root.append(timer);
            count--;
        }else{
            reset();
            genEndPage();
            return;
        }
    }, 1000);
}




// generate quiz question page ---------------------------------------------------------------------------
// array of objects with quiz questions
const questions = [
    {
        question: "cnwoncouen",
        answerA: "cwwc",
        answerB: "cewewc",
        answerC: "ecwew",
        answerD: "wwe",
        correct: "b"
    },
    {
        question: "Q",
        answerA: "A",
        answerB: "A",
        answerC: "A",
        answerD: "A",
        correct: "a"
    },
    {
        question: "Q",
        answerA: "A",
        answerB: "A",
        answerC: "A",
        answerD: "A",
        correct: "a"
    },
    {
        question: "Which technology is NOT used on the frontend?",
        answerA: "A: jquery",
        answerB: "B: vanilla javascript",
        answerC: "C: css",
        answerD: "D: solidity",
        correct: "d"
    },
    {
        question: "Q",
        answerA: "A",
        answerB: "A",
        answerC: "A",
        answerD: "A",
        correct: "a"
    },
    {
        question: "Q",
        answerA: "A",
        answerB: "A",
        answerC: "A",
        answerD: "A",
        correct: "a"
    },
    {
        question: "Q",
        answerA: "A",
        answerB: "A",
        answerC: "A",
        answerD: "A",
        correct: "a"
    },
    {
        question: "Q",
        answerA: "A",
        answerB: "A",
        answerC: "A",
        answerD: "A",
        correct: "a"
    },
    {
        question: "Q",
        answerA: "A",
        answerB: "A",
        answerC: "A",
        answerD: "A",
        correct: "a"
    },
    {
        question: "Q",
        answerA: "A",
        answerB: "A",
        answerC: "A",
        answerD: "A",
        correct: "a"
    },
];


// question page generator
let questionCount = 0;

function genQuestionPage(){
    reset();
    console.log(questionCount);
    let q = $('<h2>')
        .text(questions[questionCount].question);
    let aA = $('<button>')
        .addClass('answerButton')
        .attr('value', 'a')
        .text(questions[questionCount].answerA);
    let aB = $('<button>')
        .addClass('answerButton')
        .attr('value', 'b')
        .text(questions[questionCount].answerB);
    let aC = $('<button>')
        .addClass('answerButton')
        .attr('value', 'c')
        .text(questions[questionCount].answerC);
    let aD = $('<button>')
        .addClass('answerButton')
        .attr('value', 'd')
        .text(questions[questionCount].answerD);

    root.append(q);
    root.append(aA);
    root.append(aB);
    root.append(aC);
    root.append(aD);
}



// generate endgame page ---------------------------------------------------------------------------------
function genEndgamePage(){

}

// generate score page -----------------------------------------------------------------------------------
let score = 0;


// page reset --------------------------------------------------------------------------------------------
function reset(){
    root.empty();
}



// run app -----------------------------------------------------------------------------------------------
genStartPage();
$(root).on('click', '.startButton', function(){
    reset();
    countdown();
    genQuestionPage();
});

$(root).on('click', '.answerButton', function(event){
    if($(event.target).attr('value') === questions[questionCount].correct){
        let notifyCorrect = $('<p>').text("correct!");
        root.append(notifyCorrect);
        questionCount++;
        score++;
        setTimeout(genQuestionPage, 1500);
    }else{
        let notifyIncorrect = $('<p>').text("incorrect!");
        root.append(notifyIncorrect);
        questionCount++;
        setTimeout(genQuestionPage, 1500);
    }
});