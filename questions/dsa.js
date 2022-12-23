const quizdb=[
    {
        question:"Q1.Which one of the following is an application of Stack Data Structure?",
        a:"Managing function calls",
        b:"The stock span problem",
        c:"Arithmetic expression evaluation",
        d:"All of the Above",
        ans:"ans4"
    },
    {
        question:"Q2.Which one of the following is an application of Queue Data Structure?",
        a:"When a resource is shared among multiple consumers",
        b:"When data is transferred asynchronously (data not necessarily received at same rate as sent) between two processes",
        c:"Load Balancing",
        d:"All of the Above",
        ans:"ans4"
    },
    {
        question:"Q3.Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?",
        a:"Insertion Sort",
        b:"Merge Sort",
        c:"Quick Sort",
        d:"Heap Sort",
        ans:"ans2"
    },
    {
        question:"Q4.In the worst case, the number of comparisons needed to search a singly linked list of length n for a given element is",
        a:"log 2 n",
        b:"log 2 n - 1",
        c:"n",
        d:"n/2",
        ans:"ans3"
    },
    {
        question:"Q5.What is the worst case possible height of AVL tree?",
        a:"2Logn \n Assume base of log is 2",
        b:"1.44log n \n Assume base of log is 2",
        c:"Depends upon implementation",
        d:"Theta(n)",
        ans:"ans2"
    },
     {
        question:"Q6.Given a hash table T with 25 slots that stores 2000 elements, the load factor α for T is",
        a:"80",
        b:"0.0125",
        c:"8000",
        d:"1.25",
        ans:"ans1"
    },
    {
        question:"Q7. B+ Trees are considered BALANCED because",
        a:"the number of records in any two leaf nodes differ by at most 1.",
        b:"the number of children of any two non-leaf sibling nodes differ by at most 1.",
        c:"the lengths of the paths from the root to all leaf nodes differ from each other by at most 1.",
        d:"the lengths of the paths from the root to all leaf nodes are all equal.",
        ans:"ans4"
    },
    {
        question:"Q8.A full binary tree with n leaves contains:",
        a:"n nodes",
        b:"log2 n nodes",
        c:"2n-1",
        d:"2<sup>n",
        ans:"ans3"
    },
    {
        question:"Q9.An advantage of chained hash table (external hashing) over the open addressing scheme is",
        a:"Worst case complexity of search operations is less",
        b:"Space used is less",
        c:"Deletion is easier",
        d:"None of the Above",
        ans:"ans3"
    },
    {
        question:"Q10.The minimum number of stacks needed to implement a queue is",
        a:"2",
        b:"3",
        c:"1",
        d:"4",
        ans:"ans1"
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