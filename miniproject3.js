
let btn3 = document.getElementById('btn3')
let q9 = document.querySelectorAll('input[name="question9"]');
 let q10 = document.querySelectorAll('input[name="question10"]');
 let q11 = document.querySelectorAll('input[name="question11"]');
 let q12 = document.querySelectorAll('input[name="question12"]');

 let userAnswer = document.querySelectorAll('option');
 let questions = document.querySelectorAll('label[for*="question"]') //document.querySelectorAll('all-question');
 let nextBtn = document.getElementById('next-btn');
 let currentQuestion = 0;
 var score = 0;
 var checkedStatus = false;
 let output = document.getElementById('get')
 let marks = localStorage.getItem('marks')

 let correctAnswer = {
    q9: '9c',
    q10: '10a',
    q11: '11d',
    q12: '12b',
}
btn3.addEventListener('click', (e) => {
    //  e.preventDefault()

q9.forEach(q9 => {
    if ( q9.checked) {
        console.log(q9.value)
        localStorage.setItem('q9', q9.value)
        if(correctAnswer.q9 === q9.value) marks++; //Add mark if the selected answer is correct
    }
} );
q10.forEach(q10 => {
    if ( q10.checked) {
        console.log(q10.value)
        localStorage.setItem('q10', q10.value)
        if(correctAnswer.q10 === q10.value) marks++; //Add mark if the selected answer is correct
    }
} );
q11.forEach(q11 => {
    if ( q11.checked) {
        console.log(q11.value)
        localStorage.setItem('q11', q11.value)
        if(correctAnswer.q11 === q11.value) marks++; //Add mark if the selected answer is correct
    }
} );
q12.forEach(q12 => {
    if ( q12.checked) {
        console.log(q12.value)
        localStorage.setItem('q12', q12.value)
        if(correctAnswer.q12 === q12.value) marks++; //Add mark if the selected answer is correct
    }
} )

 marks = localStorage.setItem('marks', marks) //Save total mark to localstorage
     console.log(marks); // Print total mark to console
    });
     if (userAnswer === q9[currentQuestion].correctAnswer ) {
        console.log('increase mark + 1');
    } else {
        console.log ('do not increase mark')
    }
    if (userAnswer === q10[currentQuestion].correctAnswer ) {
        console.log('increase mark + 1');
    } else {
        console.log ('do not increase mark')
    }
    if (userAnswer === q11[currentQuestion].correctAnswer ) {
        console.log('increase mark + 1');
    } else {
        console.log ('do not increase mark')
    }
    if (userAnswer === q12[currentQuestion].correctAnswer ) {
        console.log('increase mark + 1');
    } else {
        console.log ('do not increase mark')
    }
      if (currentQuestion < questions.length - 1) {
         currentQuestion++;
    if (currentQuestion === questions.length - 1) {
        output.innerText = (localStorage.getItem('get'))
        }
    }
   