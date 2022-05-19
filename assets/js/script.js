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

// question page generator
function genQuestionPage(){
    const qaForm = $('<form>');

    for(let i = 0; i < questions.length; i++){
        let q = $('<h2>')
            .text(questions[i].question)
            .addClass('question' + i);
        
        let rad1 = $('<input type="radio" id="A">')
        let aa = $('<label for="A">')
            .text(questions[i].answerA);

        let rad2 = $('<input type="radio" id="B">')
        let ab = $('<label for="B">')
            .text(questions[i].answerB);

        let rad3 = $('<input type="radio" id="C">')
        let ac = $('<label for="C">')
            .text(questions[i].answerC);

        let rad4 = $('<input type="radio" id="D">')
        let ad = $('<label for="D">')
            .text(questions[i].answerD);

        qaForm.append(q);
        qaForm.append(rad1);
        qaForm.append(aa);
        qaForm.append(rad2);
        qaForm.append(ab);
        qaForm.append(rad3);
        qaForm.append(ac);
        qaForm.append(rad4);
        qaForm.append(ad);
        root.append(qaForm);
    }
}


// generate endgame page ---------------------------------------------------------------------------------
function genEndgamePage(){

}

// generate score page -----------------------------------------------------------------------------------


// page reset --------------------------------------------------------------------------------------------
function reset(){
    root.empty();
}



// run app -----------------------------------------------------------------------------------------------
genStartPage();
$('.startButton').on('click', function(){
    reset();
    countdown();
    genQuestionPage();
});