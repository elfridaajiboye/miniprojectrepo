

 //  let button = document.getElementById('button')
let btn = document.getElementById('btn')
let userAnswer = document.querySelectorAll('option');
let questions = document.querySelectorAll('label[for*="question"]') //document.querySelectorAll('all-question');
let nextBtn = document.getElementById('next-btn');
// const table = document.querySelector("table")
let table = document.querySelector('input[name="questions"]');
//var score = 0;
var checkedStatus = false;
let output = document.getElementById('get')
var totalQuestions = '16';
var score = localStorage.getItem("marks") //GetScore();
var userEnter = localStorage.getItem("userEnter")
// var userMark = document.getElementById("totalScore");
//MarkIncorrectQuestions();
$( document ).ready(function() {
    console.log( "ready!" );
    // document.getElementById("score").innerHTML = 'Congratulations ' + userEnter + ', you got ' + score + ' out of ' + totalQuestions + ' questions correct'
    document.getElementById("man").innerHTML = userEnter
    document.getElementById("woman").innerHTML = score
});
    

 
