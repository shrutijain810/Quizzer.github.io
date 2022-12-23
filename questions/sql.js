const quizdb=[
    {
        question:"Q1.Which SQL statement is used to extract data from a database?",
        a:"Extract",
        b:"Open",
        c:"Get",
        d:"Select",
        ans:"ans4"
    },
    {
        question:"Q2.Which SQL statement is used to update data in a database?",
        a:"Update",
        b:"Modify",
        c:"Save As",
        d:"Save",
        ans:"ans1"
    },
    {
        question:"Q3.Which SQL statement is used to insert new data in a database?",
        a:"Insert New",
        b:"Add New",
        c:"Insert Into",
        d:"Add Record",
        ans:"ans3"
    },
    {
        question:"Q4.How can you change \"Hansen\" into \"Nilsen\" in the \"LastName\" column in the Persons table?",
        a:"MODIFY Persons SET LastName='Hansen' INTO LastName='Nilsen'",
        b:"MODIFY Persons SET LastName='Nilsen' WHERE LastName='Hansen'",
        c:"UPDATE Persons SET LastName='Hansen' INTO LastName='Nilsen'",
        d:"UPDATE Persons SET LastName='Nilsen' WHERE LastName='Hansen'",
        ans:"ans4"
    },
    {
        question:"Q5.With SQL, how do you select all the columns from a table named \"Persons\"?",
        a:"SELECT *.Persons",
        b:"SELECT Persons",
        c:"SELECT [all] FROM Persons",
        d:"SELECT * FROM Persons",
        ans:"ans4"
    },
     {
        question:"Q6.With SQL, how do you select all the records from a table named \"Persons\" where the value of the column \"FirstName\" starts with an \"a\"?",
        a:"SELECT * FROM Persons WHERE FirstName LIKE '%a%'",
        b:"SELECT * FROM Persons WHERE FirstName LIKE 'a%'",
        c:"SELECT * FROM Persons WHERE FirstName = 'a'",
        d:"SELECT * FROM Persons WHERE FirstName LIKE '%a'",
        ans:"ans2"
    },
    {
        question:"Q7.With SQL, how can you insert a new record into the \"Persons\" table?",
        a:"INSERT VALUES ('Jimmy', 'Jackson') INTO Persons",
        b:"INSERT ('Jimmy', 'Jackson') INTO Persons",
        c:"INSERT INTO Persons ('Jimmy', 'Jackson') ",
        d:"INSERT INTO Persons VALUES ('Jimmy', 'Jackson')",
        ans:"ans4"
    },
    {
        question:"Q8.With SQL, how can you return all the records from a table named \"Persons\" sorted descending by \"FirstName\"?",
        a:"SELECT * FROM Persons ORDER BY FirstName DESC",
        b:"SELECT * FROM Persons SORT BY 'FirstName' DESC",
        c:"SELECT * FROM Persons SORT 'FirstName' DESC",
        d:"SELECT * FROM Persons ORDER FirstName DESC",
        ans:"ans1"
    },
    {
        question:"Q9.What is the most common type of join?",
        a:"CROSS JOIN",
        b:"OUTER JOIN",
        c:"NATURAL JOIN",
        d:"INNER JOIN",
        ans:"ans4"
    },
    {
        question:"Q10.Which SQL statement is used to create a database table called 'Customers'?",
        a:"CREATE DB Customers",
        b:"CREATE DATABASE TAB Customers",
        c:"CREATE TABLE Customers",
        d:"CREATE DATABASE TABLE Customers",
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