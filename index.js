const questions = [
    {
        question: "which is larget animal in the world?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false}
        ]
    },
    {
        question: "which is smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false},
            { text: "Australia", correct: true},
            { text: "Arctic", correct: false},
            { text: "Africa", correct: false}
        ]
    },
    {
        question: "which is the largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: false},
            { text: "Gobi", correct: false},
            { text: "Sahara", correct: false},
            { text: "Antarctica", correct: true}
        ]
    },
    {
        question: "which is the smallest country in the world?",
        answers: [
            { text: "Vatican City", correct: true},
            { text: "BHutan", correct: false},
            { text: "Nepal", correct: false},
            { text: "Shri Lanka", correct: false}
        ]
    }
];



const questionElement = document.getElementById("question");
const answersbuttons = document.getElementById("answer-button");
const nextbutton = document.getElementById("next");

function startQuiz(){
    questionbuttonindex = 0;
    score = 0;
    nextbutton.innerHTML = "next"
    Showquestion()
}
function Showquestion(){
    resetstate()
    let currentquestion = questions[questionbuttonindex]
    let questionNO = questionbuttonindex + 1
    questionElement.innerHTML = questionNO + " " + currentquestion.question

    currentquestion.answers.forEach(answers => {
        let button = document.createElement("button");
        button.innerHTML = answers.text
        button.classList.add("btn")
        answersbuttons.appendChild(button)

        if(answers.correct){
            button.dataset.correct = answers.correct;
        }

        button.addEventListener("click" , selectAnswer);
    });
}

function resetstate(){
    nextbutton.style.display = "none"
    while(answersbuttons.firstChild){
        answersbuttons.removeChild(answersbuttons.firstChild);
    }
}

function selectAnswer(e){
    let selectbtn = e.target;
    let iscorrect = selectbtn.dataset.correct == 'true';
    if(iscorrect){
        selectbtn.classList.add("correct")
        score++
    }else{
        selectbtn.classList.add("incorrect")
    }

    Array.from(answersbuttons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }  
        button.disabled = true;
    });
    nextbutton.style.display = "block";
}

function ShowScore(){
    resetstate()
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`
    nextbutton.innerHTML = "Try Again";
    nextbutton.style.display = "block";
}

function handlenextbutton(){
    questionbuttonindex++;
    if(questionbuttonindex < questions.length){
        Showquestion()
    }else{
        ShowScore()
    }
}

nextbutton.addEventListener("click" , (e)=>{
    if(questionbuttonindex < questions.length){
        handlenextbutton()
    }else{
        startQuiz()
    }
})

startQuiz()



    
