const quizdb=[
    {
        question:"Q1.What is a correct syntax to output \"Hello World\" in Python?",
        a:"print(\"Hello World\")",
        b:"echo \"Hello World\"",
        c:"echo(\"Hello World\");",
        d:"p(\"Hello World\")",
        ans:"ans1"
    },
    {
        question:"Q2.Which one is NOT a legal variable name?",
        a:"myvar",
        b:"my-var",
        c:"my_var",
        d:"_myvar",
        ans:"ans2"
    },
    {
        question:"Q3.How do you create a variable with the numeric value 5?",
        a:"x=5",
        b:"x=int(5)",
        c:"None of these",
        d:"Both of these are Correct answer",
        ans:"ans4"
    },
    {
        question:"Q4.What is the correct file extension for Python files?",
        a:".pyth",
        b:".py",
        c:".pt",
        d:".pyt",
        ans:"ans2"
    },
    {
        question:"Q5.What is the correct way to create a function in Python?",
        a:"create myfunction():",
        b:"def myfunction():",
        c:"function myfunction():",
        d:"int myfunction():",
        ans:"ans2"
    },
     {
        question:"Q6.What is a correct syntax to return the first character in a string?",
        a:"x=\"Hello\".sub(0,1)",
        b:"x=sub(\"Hello\",0,1)",
        c:"x=\"Hello\"[0]",
        d:"x=\"Hello\".[0]",
        ans:"ans3"
    },
    {
        question:"Q7.Which method can be used to return a string in upper case letters?",
        a:"toUpperCase()",
        b:"UpperCase()",
        c:"uppercase()",
        d:"upper()",
        ans:"ans4"
    },
    {
        question:"Q8.Which of these collections defines a LIST?",
        a:"(\"Apple\",\"Banana\",\"Cherry\")",
        b:"{\"Apple\",\"Banana\",\"Cherry\"}",
        c:"{\"Name\":\"Apple\",\"Color\":\"Green\"}",
        d:"[\"Apple\",\"Banana\",\"Cherry\"]",
        ans:"ans4"
    },
    {
        question:"Q9.How do you start writing a while loop in Python?",
        a:"x>y while{}",
        b:"while x>y{}",
        c:"while x>y:",
        d:"while (x>y)",
        ans:"ans3"
    },
    {
        question:"Q10.Which statement is used to stop a loop?",
        a:"exit",
        b:"return",
        c:"break",
        d:"stop",
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