const quizdb=[
    {
        question:"Q1. Which of these method of class String is used to obtain length of String object ?",
        a:"length()",
        b:"lengthof()",
        c:"get()",
        d:"sizeof()",
        ans:"ans1"
    },
    {
        question:"Q2.What is the range of the data type long in Java ?",
        a:" -128 to 127",
        b:"-9223372036854775808 to 9223372036854775807",
        c:"-2147483648 to 2147483647",
        d:"-32768 to 32767 ",
        ans:"ans2"
    },
    {
        question:"Q3.Which of these method of class String is used to extract more than one character at a time a String object ?",
        a:"getChars()",
        b:"Getchars()",
        c:"GetChars()",
        d:"getchars()",
        ans:"ans1"
    },
    {
        question:"Q4.Which function is used to perform some action when the object is to be destroyed ?",
        a:" main()",
        b:"finalize()",
        c:" delete()",
        d:"None of the above",
        ans:"ans2"
    },
    {
        question:"Q5.Which of the following blocks execute compulsorily whether exception is caught or not.",
        a:"throw",
        b:"throws",
        c:"catch",
        d:"finally",
        ans:"ans4"
    },
     {
        question:"Q6.In Java, a thread can be created by",
        a:" Implementing Runnable interface.",
        b:" Extending the thread class.",
        c:"All of the above",
        d:"None of the above",
        ans:"ans3"
    },
    {
        question:"Q7.Which of the following class definitions defines a legal abstract class",
        a:" public class abstract A { abstract void unfinished(); }",
        b:"abstract class A { abstract void unfinished(); }",
        c:"class A { abstract void unfinished(); }",
        d:"class A { abstract void unfinished() { } }",
        ans:"ans2"
    },
    {
        question:"Q8.Which of these is a method of ListIterator used to obtain index of previous element ?",
        a:"goBack()",
        b:"back()",
        c:" previousIndex()",
        d:" previous()",
        ans:"ans3"
    },
    {
        question:"Q9.Which of these methods loads the specified dynamic library ?",
        a:" loadlibrary()",
        b:" loadlib()",
        c:" load()",
        d:" library()",
        ans:"ans3"
    },
    {
        question:"Q10.Which of the following is incorrect statement about packages ?",
        a:"Interfaces are specified public if they are to be accessed by any code in the program.",
        b:"Interfaces specifies what class must do but not how it does.",
        c:"All variables in interface are implicitly final and static.",
        d:"All variables are static and methods are public if interface is defined pubic.",
        ans:"ans4"
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