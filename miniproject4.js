
let btn4 = document.getElementById('btn4')
let q13 = document.querySelectorAll('input[name="question13"]');
 let q14 = document.querySelectorAll('input[name="question14"]');
 let q15 = document.querySelectorAll('input[name="question15"]');
 let q16 = document.querySelectorAll('input[name="question16"]');

 let userAnswer = document.querySelectorAll('option');
 let questions = document.querySelectorAll('label[for*="question"]') //document.querySelectorAll('all-question');
 let nextBtn = document.getElementById('next-btn');
 let currentQuestion = 12;
 var score = 0;
 var checkedStatus = false;
 let output = document.getElementById('get')
 let marks = localStorage.getItem('marks')
 
 let correctAnswer = {
    q13: '13a',
    q14: '14a',
    q15: '15c',
    q16: '16b',
}

btn4.addEventListener('click', (e) => {
    //  e.preventDefault()

q13.forEach(q13 => {
    if ( q13.checked) {
        console.log(q13.value)
        localStorage.setItem('q13', q13.value)
        if(correctAnswer.q13 === q13.value) marks++; //Add mark if the selected answer is correct
    }
} );
q14.forEach(q14 => {
    if ( q14.checked) {
        console.log(q14.value)
        localStorage.setItem('q14', q14.value)
        if(correctAnswer.q14 === q14.value) marks++; //Add mark if the selected answer is correct
    }
} );
q15.forEach(q15 => {
    if ( q15.checked) {
        console.log(q15.value)
        localStorage.setItem('q15', q15.value)
        if(correctAnswer.q15 === q15.value) marks++; //Add mark if the selected answer is correct
    }
} );
q16.forEach(q16 => {
    if ( q16.checked) {
        console.log(q16.value)
        localStorage.setItem('q16', q16.value)
        if(correctAnswer.q16 === q16.value) marks++; //Add mark if the selected answer is correct
    }
} );
 marks = localStorage.setItem('marks', marks) //Save total mark to localstorage
     console.log(marks); // Print total mark to console
    });
     if (userAnswer === q13[currentQuestion].correctAnswer ) {
        console.log('increase mark + 1');
    } else {
        console.log ('do not increase mark')
    }
    if (userAnswer === q14[currentQuestion].correctAnswer ) {
        console.log('increase mark + 1');
    } else {
        console.log ('do not increase mark')
    }
    if (userAnswer === q15[currentQuestion].correctAnswer ) {
        console.log('increase mark + 1');
    } else {
        console.log ('do not increase mark')
    }
    if (userAnswer === q16[currentQuestion].correctAnswer ) {
        console.log('increase mark + 1');
    } else {
        console.log ('do not increase mark')
    }
     //  if (currentQuestion < questions.length - 1) {
    //      currentQuestion++;
    if (currentQuestion === questions.length - 1) {
        output.innerText = (localStorage.getItem('get'))
        }
   //  }
   