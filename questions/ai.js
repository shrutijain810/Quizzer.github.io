const quizdb=[
    {
        question:"Q1. What is the goal of Artificial Intelligence?",
        a:"To solve artificial problems",
        b:"To extract scientific causes",
        c:"To explain various sorts of intelligence",
        d:"To solve real-world problems",
        ans:"ans3"
    },
    {
        question:"Q2.Based on which of the following parameter Artificial Intelligence is categorized?",
        a:"Based on functionality only",
        b:"Based on capabilities only",
        c:"Based on capabilities and functionality",
        d:"It is not categorised",
        ans:"ans3"
    },
    {
        question:"Q3.What is the function of an Artificial Intelligence \"Agent\"?",
        a:" Mapping of goal sequence to an action",
        b:"Work without the direct interference of the people",
        c:"Mapping of environment sequence to an action",
        d:"Mapping of precept sequence to an action",
        ans:"ans4"
    },
    {
        question:"Q4.Which of the following is not a type of Artificial Intelligence agent?",
        a:"Unity-based AI agent",
        b:"Simple reflex AI agent",
        c:"Goal-based AI agent",
        d:"Learning AI agent",
        ans:"ans1"
    },
    {
        question:"Q5. What is the name of the Artificial Intelligence system developed by Daniel Bobrow?",
        a:"program known as BACON",
        b:"system known as STUDENT",
        c:"program known as SHRDLU",
        d:"system known as SIMD",
        ans:"ans2"
    },
     {
        question:"Q6.Which of the following is not an application of artificial intelligence?",
        a:"Face recognition system",
        b:"Chatbots",
        c:"LIDAR",
        d:"DBMS",
        ans:"ans4"
    },
    {
        question:"Q7.The total number of proposition symbols in AI are ________",
        a:"3 proposition symbols",
        b:"1 proposition symbols",
        c:"2 proposition symbols",
        d:"No proposition symbols",
        ans:"ans3"
    },
    {
        question:"Q8.Face Recognition system is based on which type of approach?",
        a:"Weak AI approach",
        b:"Applied AI approach",
        c:"Cognitive AI approach",
        d:"Strong AI approach",
        ans:"ans2"
    },
    {
        question:"Q9.Which of the following is/are the composition for AI agents?",
        a:"Program only",
        b:"Architecture only",
        c:"Both Program and Architecture",
        d:"None of the Above",
        ans:"ans3"
    },
    {
        question:"Q10.What is the total number of quantification available in artificial intelligence?",
        a:"3",
        b:"1",
        c:"2",
        d:"4",
        ans:"ans3"
    }
];

const question= document.querySelector('.question');
const option1= document.querySelector('#option1');
const option2= document.querySelector('#option2');
const option3= document.querySelector('#option3');
const option4= document.querySelector('#option4');
const submit =document.querySelector('#submit');
const answers= document.querySelectorAll('.answer');
const showScore= document.querySelector('#showScore');

let questionCount=0;
let score=0;
const loadQuestion= () => {
    const questionList= quizdb[questionCount];
    question.innerHTML=  questionList.question;
    option1.innerHTML=  questionList.a;
    option2.innerHTML=  questionList.b;
    option3.innerHTML=  questionList.c;
    option4.innerHTML=  questionList.d;
}
const inner= document.getElementsByClassName("inner-div");



loadQuestion();

const getcheckanswer= () =>{
    let answer;
    answers.forEach( (curanselem) => {
        if (curanselem.checked){
            answer = curanselem.id;
        }
       })
       return answer;
};
const deselectall=() => {
    answers.forEach((curanselem)=> curanselem.checked= false);
}
submit.addEventListener('click',() =>{
    const checkedanswer= getcheckanswer();
    console.log(checkedanswer);
    if(checkedanswer==quizdb[questionCount].ans){
        score++;
    };
    questionCount++;
    deselectall();
    if(questionCount < quizdb.length){
        loadQuestion();
    } else{
        showScore.innerHTML=` 
        <h3> You Scored ${score}/${quizdb.length} </h3>
        <button class="btn" onclick="location.reload()" > Try Again</button>
        `;

        showScore.classList.remove('showArea');
    }

});