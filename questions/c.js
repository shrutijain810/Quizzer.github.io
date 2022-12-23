const quizdb=[
    {
        question:"Q1.Which of the followings is/are automatically added to every class, if we do not write our own.",
        a:"Copy Constructor",
        b:"Assignment Operator",
        c:"A constructor without any parameter",
        d:"All of the above",
        ans:"ans4"
    },
    {
        question:"Q2.Which of the following is true?",
        a:"All objects of a class share all data members of class",
        b:"Objects of a class do not share non-static members. Every object has its own copy.",
        c:"Objects of a class do not share codes of non-static methods, they have their own copy",
        d:"None of the above",
        ans:"ans2"
    },
    {
        question:"Q3.Which of the following is not correct for virtual function in C++ ?",
        a:"Virtual function can be static.",
        b:"Must be declared in public section of class.",
        c:"Virtual function should be accessed using pointers.",
        d:"Virtual function is defined in base class.",
        ans:"ans1"
    },
    {
        question:"Q4.Inline functions are useful when",
        a:"Function is large with many nested loop",
        b:"Function has many static variables",
        c:"Function is small and we want to avoid function call overhead.",
        d:"None of the above",
        ans:"ans3"
    },
    {
        question:"Q5.How can we restrict dynamic allocation of objects of a class using new?",
        a:"By overloading new operator",
        b:"By making an empty private new and new[] operators",
        c:"By overloading new operator and new[] operators",
        d:"By making an empty private new operator.",
        ans:"ans2"
    },
     {
        question:"Q6.How does C++ compiler differs between overloaded postfix and prefix operators?",
        a:"A postfix ++ has a dummy parameter",
        b:"A prefix ++ has a dummy parameter",
        c:"By making prefix ++ as a global function and postfix as a member function.",
        d:"C++ doesn't allow both operators to be overloaded in a class",
        ans:"ans1"
    },
    {
        question:"Q7.Which of the following is true about this pointer?",
        a:"It is passed as a hidden argument to all non-static function calls",
        b:"It is passed as a hidden argument to all static functions",
        c:"It is passed as a hidden argument to all function calls",
        d:"None of the above",
        ans:"ans2"
    },
    {
        question:"Q8.Which of the following in Object Oriented Programming is supported by Function overloading and default arguments features of C++.",
        a:"Inheritance",
        b:"Encapsulation",
        c:"Polymorphism",
        d:"None of the above",
        ans:"ans3"
    },
    {
        question:"Q9.Which of the following is true?",
        a:"Static methods cannot be overloaded.",
        b:"Static data members can only be accessed by static methods.",
        c:"Non-static data members can be accessed by static methods.",
        d:"Static methods can only access static members (data and methods)",
        ans:"ans4"
    },
    {
        question:"Q10.If a function is friend of a class, which one of the following is wrong?",
        a:"A function can only be declared a friend by a class itself.",
        b:"Friend functions are not members of a class, they are associated with it.",
        c:"Friend functions are members of a class.",
        d:"It can have access to all members of the class, even private ones.",
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