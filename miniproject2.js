
let btn2 = document.getElementById('btn2')
let q5 = document.querySelectorAll('input[name="question5"]');
 let q6 = document.querySelectorAll('input[name="question6"]');
 let q7 = document.querySelectorAll('input[name="question7"]');
 let q8 = document.querySelectorAll('input[name="question8"]');

 let userAnswer = document.querySelectorAll('option');
 let questions = document.querySelectorAll('label[for*="question"]') //document.querySelectorAll('all-question');
 let nextBtn = document.getElementById('next-btn');
 let currentQuestion = 0;
 var score = 0;
 var checkedStatus = false;
 let output = document.getElementById('get')
 let marks = localStorage.getItem('marks')
 
 

 let correctAnswer = {
    q5: '5a',
    q6: '6b',
    q7: '7c',
    q8: '8b',
}

btn2.addEventListener('click', (e) => {
    // e.preventDefault()
//    console.log('clicked btn2')
console.log(marks)
q5.forEach(q5 => {
   if ( q5.checked) {
       console.log(q5.value)
       localStorage.setItem('q5', q5.value)
       if(correctAnswer.q5 === q5.value) marks++; //Add mark if the selected answer is correct
   }
} );
q6.forEach(q6 => {
   if ( q6.checked) {
       console.log(q6.value)
       localStorage.setItem('q6', q6.value)
       if(correctAnswer.q6 === q6.value) marks++; //Add mark if the selected answer is correct
   }
} );
q7.forEach(q7 => {
   if ( q7.checked) {
       console.log(q7.value)
       localStorage.setItem('q7', q7.value)
       if(correctAnswer.q7 === q7.value) marks++; //Add mark if the selected answer is correct
   }
} );
q8.forEach(q8 => {
   if ( q8.checked) {
       console.log(q8.value)
       localStorage.setItem('q8', q8.value)
       if(correctAnswer.q8 === q8.value) marks++; //Add mark if the selected answer is correct
   }
} )
marks = localStorage.setItem('marks', marks) //Save total mark to localstorage
     console.log(marks); // Print total mark to console
    });

     if (userAnswer === q5[currentQuestion].correctAnswer ) {
        console.log('increase mark + 1')
    } else {
        console.log ('do not increase mark');
    }
    if (userAnswer === q6[currentQuestion].correctAnswer ) {
        console.log('increase mark + 1');
    } else {
        console.log ('do not increase mark')
    }
    if (userAnswer === q7[currentQuestion].correctAnswer ) {
        console.log('increase mark + 1');
    } else {
        console.log ('do not increase mark')
    }
    if (userAnswer === q8[currentQuestion].correctAnswer ) {
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
   