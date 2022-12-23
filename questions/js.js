const quizdb=[
    {
        question:"Q1.Inside which HTML element do we put the JavaScript?",
        a:"scripting",
        b:"script",
        c:"javaScript",
        d:"js",
        ans:"ans2"
    },
    {
        question:"Q2.Where is the correct place to insert a JavaScript?",
        a:"The Body section",
        b:"The Head section",
        c:"Between Head and Body",
        d:"Both Head and Body ",
        ans:"ans4"
    },
    {
        question:"Q3.How do you write \"Hello World\" in an alert box?",
        a:"msg(\"Hello World\")",
        b:"msgbox(\"Hello World\")",
        c:"alertbox(\"Hello World\")",
        d:"alert(\"Hello World\")",
        ans:"ans4"
    },
    {
        question:"Q4.How do you create a function in JavaScript?",
        a:"function myfunction()",
        b:"function = myfunction()",
        c:"function myfunction():",
        d:"function:myfunction()",
        ans:"ans1"
    },
    {
        question:"Q5.How to write an IF statement in JavaScript?",
        a:"if i = 5",
        b:"if (i == 5)",
        c:"if i == 5 then",
        d:"if i = 5 then",
        ans:"ans2"
    },
     {
        question:"Q6.How does a FOR loop start?",
        a:"for (i = 0; i <= 5; i++)",
        b:"for (i = 0; i <= 5)",
        c:"for i = 1 to 5",
        d:"for (i <= 5; i++)",
        ans:"ans1"
    },
    {
        question:"Q7.Which event occurs when the user clicks on an HTML element?",
        a:"onmouseover",
        b:"onchange",
        c:"onclick",
        d:"onmouseclick",
        ans:"ans4"
    },
    {
        question:"Q8.What is the correct way to write a JavaScript array?",
        a:"var colors = [\"red\", \"green\", \"blue\"]",
        b:"var colors = 1 = (\"red\"), 2 = (\"green\"), 3 = (\"blue\")",
        c:"var colors = (1:\"red\", 2:\"green\", 3:\"blue\")",
        d:"var colors = \"red\", \"green\", \"blue\"",
        ans:"ans3"
    },
    {
        question:"Q9.How do you round the number 7.25, to the nearest integer?",
        a:"round(7.25)",
        b:"Math.round(7.25) ",
        c:"rnd(7.25)",
        d:"Math.rnd(7.25)",
        ans:"ans2"
    },
    {
        question:"Q10.How can you add a comment in a JavaScript?",
        a:"'This is a comment",
        b:"#This is a comment",
        c:"//This is a comment ",
        d:"!This is a comment",
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