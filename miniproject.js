
//  let button = document.getElementById('button')
 let btn = document.getElementById('btn')
 let q1 = document.querySelectorAll('input[name="question1"]');
 let q2 = document.querySelectorAll('input[name="question2"]');
 let q3 = document.querySelectorAll('input[name="question3"]');
 let q4 = document.querySelectorAll('input[name="question4"]');
 let userAnswer = document.querySelectorAll('option');
 let questions = document.querySelectorAll('label[for*="question"]') //document.querySelectorAll('all-question');
 let nextBtn = document.getElementById('next-btn');
 let currentQuestion = 0;
 var score = 0;
 var checkedStatus = false;
 let output = document.getElementById('get')
 //setQuestion(currentQuestion);
 
 let correctAnswer = {
     q1: '1c',
     q2: '2c',
     q3: '3c',
     q4: '4c',
 }
 
 var marks = 0;
 btn.addEventListener('click', (e) => {
    //  e.preventDefault()
  //console.log('clicked')
     q1.forEach(q1 => {
         if (q1.checked){
             console.log(q1.value)
             localStorage.setItem('q1', q1.value)
             if(correctAnswer.q1 === q1.value) marks++; //Add mark if the selected answer is correct
         } 
     });
     q2.forEach(q2 => {
         if ( q2.checked) {
             console.log(q2.value)
             localStorage.setItem('q2', q2.value)
             if(correctAnswer.q2 === q2.value) marks++; //Add mark if the selected answer is correct
         }
     } );
     q3.forEach(q3 => {
         if ( q3.checked) {
             console.log(q3.value)
             localStorage.setItem('q3', q3.value)
             if(correctAnswer.q3 === q3.value) marks++; //Add mark if the selected answer is correct
         }
     } );
     q4.forEach(q4 => {
         if ( q4.checked) {
             console.log(q4.value)
             localStorage.setItem('q4', q4.value)
             if(correctAnswer.q4 === q4.value) marks++; //Add mark if the selected answer is correct
         }
     } )
   
     
     marks = localStorage.setItem('marks', marks) //Save total mark to localstorage
     console.log(marks); // Print total mark to console
    });
     if (userAnswer === q1[currentQuestion].correctAnswer ) {
         console.log('increase mark + 1');
     } else {
         console.log ('do not increase mark')
     }
     if (userAnswer === q2[currentQuestion].correctAnswer ) {
         console.log('increase mark + 1');
     } else {
         console.log ('do not increase mark')
     }
     if (userAnswer === q3[currentQuestion].correctAnswer ) {
         console.log('increase mark + 1');
     } else {
         console.log ('do not increase mark')
     }
     if (userAnswer === q4[currentQuestion].correctAnswer ) {
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
    