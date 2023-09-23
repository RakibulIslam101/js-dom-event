
console.log("This is separate JS file");
// option:1
// <button onclick="console.log('90')">Submit</button>
// option 2: add onclick function on the html element
// Important we will use this 
/* <button onclick="makeRed()">Make red</button>  */
function makeRed() {
    document.body.style.backgroundColor = 'red';
}
// Option: 3
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
// option :3 another
const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = function makepurple() {
    document.body.style.backgroundColor = 'purple'
}

// option:4
const pinkButton = document.getElementById('make-pink')
pinkButton.addEventListener('click', makePink);
function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// another way
const makePinkButton = document.getElementById('make-green');
       makePinkButton.addEventListener('click',makeGreen);
       function makeGreen(){
        document.body.style.backgroundColor = 'green';
       }


    // Important we will use this
    // or another way
    document.getElementById('make-tomato').addEventListener('click',
       function makeTomato(){
        document.body.style.backgroundColor ='tomato';
       }
       );
