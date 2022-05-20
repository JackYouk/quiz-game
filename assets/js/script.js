const root = $("#root");

// generate start page -----------------------------------------------------------------------------------
function genStartPage (){
    reset();
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
            timer.text(count + " seconds remaining");
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
        question: "cnwoncouen",
        answerA: "cwwc",
        answerB: "cewewc",
        answerC: "ecwew",
        answerD: "wwe",
        correct: "b"
    },
    {
        question: "Q2",
        answerA: "A",
        answerB: "A",
        answerC: "A",
        answerD: "A",
        correct: "a"
    },
    {
        question: "Q3",
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
        question: "Q5",
        answerA: "A",
        answerB: "A",
        answerC: "A",
        answerD: "A",
        correct: "a"
    },
    {
        question: "Q6",
        answerA: "A",
        answerB: "A",
        answerC: "A",
        answerD: "A",
        correct: "a"
    },
    {
        question: "Q7",
        answerA: "A",
        answerB: "A",
        answerC: "A",
        answerD: "A",
        correct: "a"
    },
    {
        question: "Q8",
        answerA: "A",
        answerB: "A",
        answerC: "A",
        answerD: "A",
        correct: "a"
    },
    {
        question: "Q9",
        answerA: "A",
        answerB: "A",
        answerC: "A",
        answerD: "A",
        correct: "a"
    },
    {
        question: "Q10",
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
    if(questionCount === questions.length){
        count = -1;
        genEndgamePage();
    }else{
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
        .addClass('againButton')
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
        .addClass('saveBtn');
    const playAgainBtn = $('<button>')
        .text('Play Again')
        .addClass('againButton');
    const scoresButton = $('<button>')
        .text("High Scores")
        .addClass('scoresButton');

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
        let notifyCorrect = $('<p>').text("correct!");
        root.append(notifyCorrect);
        questionCount++;
        score++;
        setTimeout(genQuestionPage, 700);
    }else if($(event.target).attr('value') !== questions[questionCount].correct){
        let notifyIncorrect = $('<p>').text("incorrect!");
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