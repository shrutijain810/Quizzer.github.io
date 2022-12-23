const quizdb=[
    {
        question:"Q1.A linked page using the anchor tag is normally displayed in the ___.",
        a:"Current window",
        b:"New Window",
        c:"New Tab",
        d:"Current Tab",
        ans:"ans1"
    },
    {
        question:"Q2.Who is making the Web standards?",
        a:"Google",
        b:"Mozilla",
        c:"The World Wide Web Consortium",
        d:"Microsoft",
        ans:"ans3"
    },
    {
        question:"Q3.Which HTML tag is used to link the URL ?",
        a:"style",
        b:"link",
        c:"hypelink",
        d:"a",
        ans:"ans4"
    },
    {
        question:"Q4.Choose the correct HTML element to define important text",
        a:"important",
        b:"i",
        c:"strong",
        d:"b",
        ans:"ans3"
    },
    {
        question:"Q5.Which attribute is used for favicon ?",
        a:"icon",
        b:"title",
        c:"head",
        d:"rel",
        ans:"ans4"
    },
     {
        question:"Q6.Default style and color of unvisited link in any browser is ___",
        a:"Normal and Blue",
        b:"Underlined and Blue",
        c:" Underline and Red",
        d:" Underline and Pink",
        ans:"ans2"
    },
    {
        question:"Q7.An iframe is used to display a web page within a web page.",
        a:"false",
        b:"There is no such thing as iframe",
        c:"True",
        d:"None of these",
        ans:"ans3"
    },
    {
        question:"Q8.The HTML canvas element is used to:",
        a:"manipulate data in MySQL",
        b:" draw graphics",
        c:"create draggable elements",
        d:"display database records",
        ans:"ans2"
    },
    {
        question:"Q9.Which input type defines a slider control?",
        a:"Search",
        b:"Controls",
        c:"Slider",
        d:"Range",
        ans:"ans4"
    },
    {
        question:"Q10.Which HTML element is used to specify a header for a document or section?",
        a:"section",
        b:"head",
        c:"header",
        d:"top",
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