const quiz = [
    {
        question: "Game market,which of the following game consoles sold the most?",
        answers: [
    "superfamicon",
    "plastation2",
    "gameboy",
    "Nintendo DS"
        ],
        correct: "Nintendo DS"
}, {
    question: "What gemes sell best on Nintendo?",
    answers: [
"Mother2",
"mario",
"donkey",
"carvy"
    ],
    correct: "Mother2"
},{
question:"What is the name of the main character in Final Fantasy4?",
answers:[
    "furioneel",
    "cloud",
    "teeda",
    "sesil"
],
 correct: "sesil"
}
];

const $window = window;
const $doc = document;
const $question = $doc.getElementById("js-question");
const $buttons = $doc.querySelectorAll(".btn");

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
    $question.textContent = quiz[quizCount].question;

    const buttonLen = $buttons.length;
    let btnIndex = 0;

while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
}
};

    const goToNext = () => {
        quizCount++;
        if(quizCount < quizLen){
            init(quizCount);
        }else{
            showEnd();
        }
    };

    const judge = (elm) => {
        if(elm.textContent === quiz[quizCount].correct){
            $window.alert("correct");
            score++;
        }else{
            $window.alert("incorrect");
        }
        goToNext();
    };

    const showEnd = () => {
        $question.textContent ="end!your correct answer is" + score + "/" + quizLen + "is";

        const $items = $doc.getElementById("js-items");
        $items.style.visibility = "hidden";
    };

    init();

    let answersIndex = 0 ;
    let answersLen = quiz[quizCount].answers.length;

    while(answersIndex < answersLen){
        $buttons[answersIndex].addEventListener("click",(e) =>{
            judge(e.target);
        });
        answersIndex++;
    }
