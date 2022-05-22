const root = $("#root");

// generate start page -----------------------------------------------------------------------------------
function genStartPage (){
    reset();
    const title = $('<h1>')
        .text("Coding Quiz Game")
        .addClass('title');

    const description = $('<p>')
        .text("In this quiz, you will be answering a series of 10 multiple choice questions. Answer as many as possible in the one minute time limit.")
        .addClass('description');

    const startButton = $('<button>')
        .text("Start")
        .addClass('startButton btn btn-success m-3');

    const scoresButton = $('<button>')
        .text("High Scores")
        .addClass('scoresButton btn btn-info m-3');

    root.append(title);
    root.append(description);
    root.append(startButton);
    root.append(scoresButton);
}

// initialize + generate 1 min counter -------------------------------------------------------------------
let count = 60;

function resetCount(){
    count = 60;
}

function countdown(){
    // gen timer
    resetCount();
    const timer = $('<div>');
    
    // countdown init
    let interval = setInterval(function(){
        if(count >= 0){
            timer
                .addClass('badge text-bg-dark')
                .text(count + " seconds remaining");
            root.append(timer);
            count--;
        }else{
            reset();
            genEndgamePage();
            clearInterval(interval);
            return;
        }
    }, 1000);
}



// generate quiz question page ---------------------------------------------------------------------------
// array of objects with quiz questions
const questions = [
    {
        question: "1. What does HTML stand for?",
        answerA: "Hippie Train Migration League",
        answerB: "Hyper-Text Markup Language",
        answerC: "Hemi-Tech Main Language",
        answerD: "Hot Teal Meal Last",
        correct: "b"
    },
    {
        question: "2. What does CSS stand for?",
        answerA: "Cascading Style Sheets",
        answerB: "Cumalative Standard Style",
        answerC: "Cool Stacked Sheets",
        answerD: "Cash Stone Steel",
        correct: "a"
    },
    {
        question: "3. What is NOT a correct format for a function (x) in JavaScript?",
        answerA: "function x(){}",
        answerB: "const x = function(){}",
        answerC: "x() funct={}",
        answerD: "let x()=>{}",
        correct: "c"
    },
    {
        question: "4. Which technology is NOT used on the frontend?",
        answerA: "A: jquery",
        answerB: "B: vanilla javascript",
        answerC: "C: css",
        answerD: "D: noSQL",
        correct: "d"
    },
    {
        question: "5. What are the FAANG companies?",
        answerA: "FaceBook, Apple, Amazon, Netflix, and Google",
        answerB: "Fandago, AppleBees, AmericanExpress, Nautica, and Gatorade",
        answerC: "Those companies that illegally sell poached tiger fangs?",
        answerD: "Freemasons, Alaskan Airlines, NewEnglandPatriots, GermanAuto",
        correct: "a"
    },
    {
        question: "6. What is the name of the founder of Twitter?",
        answerA: "Jason Dunn",
        answerB: "Elon Musk",
        answerC: "Mark Zuccerberg",
        answerD: "Jack Dorsey",
        correct: "d"
    },
    {
        question: "7. Are Java and JavaScript the same language?",
        answerA: "Yes",
        answerB: "No",
        answerC: "Maybe",
        answerD: "IDK",
        correct: "b"
    },
    {
        question: "8. Why do programmers use darkmode?",
        answerA: "It's easier on the eyes",
        answerB: "Lightmode is too bright",
        answerC: "Because bugs are attracted to light",
        answerD: "It looks better",
        correct: "c"
    },
    {
        question: "9. What is the name of the largest programming expo hosted in Oakland during the month of February?",
        answerA: "Dev Week",
        answerB: "Hackola",
        answerC: "Veecon",
        answerD: "Code Expo",
        correct: "a"
    },
    {
        question: "10. Who programmed this quiz game?",
        answerA: "Jack Youkstetter",
        answerB: "Me",
        answerC: "Elon Musk",
        answerD: "The Queen of England",
        correct: "a"
    },
];


// question page generator
let questionCount = 0;

function genQuestionPage(){
    reset();
    if(questionCount === questions.length){
        count = -1;
        genEndgamePage();
    }else{
        let q = $('<h2>')
            .text(questions[questionCount].question);
        let aA = $('<button>')
            .addClass('answerButton btn btn-outline-primary m-2')
            .attr('value', 'a')
            .text(questions[questionCount].answerA);
        let aB = $('<button>')
            .addClass('answerButton btn btn-outline-primary m-2')
            .attr('value', 'b')
            .text(questions[questionCount].answerB);
        let aC = $('<button>')
            .addClass('answerButton btn btn-outline-primary m-2')
            .attr('value', 'c')
            .text(questions[questionCount].answerC);
        let aD = $('<button>')
            .addClass('answerButton btn btn-outline-primary m-2')
            .attr('value', 'd')
            .text(questions[questionCount].answerD);

        root.append(q);
        root.append(aA);
        root.append(aB);
        root.append(aC);
        root.append(aD);
    }
}

// generate high scores page -----------------------------------------------------------------------------------
let score = 0;
let savedScores = [];
let isScoreSaved = false;

// saves score to array
function save(){
    let nameInput = prompt('Enter the name you would like the score to saved under');
    savedScores.push({
        name: nameInput,
        scoreSaved: score
    });
    isScoreSaved = true;
    // localStorage.content() = savedScores;
}

function genScoresPage(){
    reset();
    const scoresPageHeader = $('<h2>')
        .text('High Scores');
    const scoresContainer = $('<ul>')
        .addClass('list-group')
    const againBtn = $('<button>')
        .addClass('againButton btn btn-secondary m-3')
        .text('Play Again');
    
    if(isScoreSaved){
        for(i = 0; i < savedScores.length; i++){
            let scoreLi = $('<li>')
                .addClass('list-group-item')
                .text(`${savedScores[i].name} answered ${savedScores[i].scoreSaved} questions correctly.`);
            scoresContainer.append(scoreLi);
        }
    }else{
        let scoreLi = $('<li>')
                .addClass('list-group-item')
                .text('There are no saved scores.');
        scoresContainer.append(scoreLi);
    }
    
    root.append(scoresPageHeader);
    root.append(scoresContainer);
    root.append(againBtn);
}



// generate endgame page ---------------------------------------------------------------------------------
function genEndgamePage(){
    reset();
    const scoreHeader = $('<h1>')
        .text(`You Answered ${score} Questions Correctly!`);
    const saveScoreBtn = $('<button>')
        .text('Save Score')
        .addClass('saveBtn btn btn-primary m-2');
    const playAgainBtn = $('<button>')
        .text('Play Again')
        .addClass('againButton btn btn-secondary m-2');
    const scoresButton = $('<button>')
        .text("High Scores")
        .addClass('scoresButton btn btn-info m-2');

    root.append(scoreHeader);
    root.append(saveScoreBtn);
    root.append(playAgainBtn);
    root.append(scoresButton);
}




// page reset --------------------------------------------------------------------------------------------
function reset(){
    root.empty();
}

function resetQuestionCount(){
    questionCount = 0;
}

function resetScore(){
    score = 0;
}



// event listeners ---------------------------------------------------------------------------------------

// if start button is clicked: start the countdown and generate the first question page
$(root).on('click', '.startButton', function(){
    reset();
    resetCount();
    resetScore();
    resetQuestionCount();
    countdown();
    genQuestionPage();
});

// when a answer button is clicked and there are still questions left: respond with correct/not correct, increase score, and generate new question page
$(root).on('click', '.answerButton', function(event){
    if($(event.target).attr('value') === questions[questionCount].correct){
        let notifyCorrect = $('<p>')
            .addClass("alert alert-success")
            .text("correct!");
        root.append(notifyCorrect);
        questionCount++;
        score++;
        setTimeout(genQuestionPage, 700);
    }else if($(event.target).attr('value') !== questions[questionCount].correct){
        let notifyIncorrect = $('<p>')
            .addClass("alert alert-danger")
            .text("incorrect!");
        root.append(notifyIncorrect);
        questionCount++;
        setTimeout(genQuestionPage, 700);
    }else{
        return;
    }
});

// when a save score button is clicked: save score
$(root).on('click', '.saveBtn', save);

// when a high scores button is clicked: generate high score page
$(root).on('click', '.scoresButton', genScoresPage);

// when a play again button is clicked: go back to start screen
$(root).on('click', '.againButton', genStartPage);


// run app -----------------------------------------------------------------------------------------------
// generates the home screen/ start page
genStartPage();