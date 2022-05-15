
let button = document.getElementById('button')
let output = document.getElementById('get')
let userName = document.getElementById('text')
// userName = localStorage.getItem("userEnter")
// let text = document.getElementById ('uname').value;
// output.innerText = (localStorage.getItem('uname'))
const userEnter = document.querySelector('input');

button.addEventListener('click', (e)=>{
    // e.preventDefault()
    console.log(userEnter.value)
    localStorage.setItem('userEnter', userEnter.value)
})


