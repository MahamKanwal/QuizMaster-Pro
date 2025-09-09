// PRACTICE OF JS

// let computerGuess = Math.floor(Math.random() * 10);
// console.log(computerGuess);
// let userGuess = prompt("enter a number from 0 to 10");
// let tries = 1;

// while (userGuess != computerGuess){
//     userGuess = prompt("try again");
//     tries++;
// }
// console.log(`you are win computer guess is ${computerGuess} you win in ${tries} tries`);

// const num1 = (10;
// const num2 = 40;
// const num3 = 90;

// if(num1 > num2 && num1 > num3){
//     console.log("num1 is greatest",num1)
// }
// else if(num2 > num1 && num2 > num3){
//     console.log("num2 is greatest",num2)
// }
// else{
//     console.log("num3 is greatest",num3)
// }

// Comparison & Logical Operators
// Ek variable marks lo aur uski value prompt se input karao.
// Agar marks >= 90 hai to "Excellent" print karo,
// agar marks >= 50 && marks < 90 hai to "Pass",
// warna "Fail".

// let marks = Number(prompt("Enter your marks:"));
// if(marks >= 90){
//     console.log("Excellent");
// }
// else if(marks >= 50 && marks < 90){
// console.log("Pass");
// }
// else{
//     console.log("Fail");
// }

// const num1 = 10;
// const num2 = 40;
// const num3 = 90;
// if(num1 < num2 && num1 < num3){
//     console.log("num1 is smallest num2 and num 3")
// }
// else if(num2 < num1 && num2 < num3){
//      console.log("num2 is smallest num3 and num1")
// }
// else{
//     {
//      console.log("num3 is smallest num2 and num1")
// }
// }

// if (num1 > num2 && num1 > num3) {
//     console.log("num 1 is greatest");
//     if (num2 > num3) {
//         console.log("num3 is smallest");
//     } else {
//         console.log("num2 is smallest");
//     }
// }
// else if (num2 > num1 && num2 > num3) {
//     console.log("num2 is greatest");
//     if (num1 > num3) {
//         console.log("num3 is smallest")
//     } else {
//         console.log("num1 is smaillest")
//     }
// }
// else {
//     console.log("num 3 is greatest");
//     if (num1 > num2) {
//         console.log("num1 is smallest")
//     } else {
//         console.log("num2 is smallest")
//     }
// }

// const findGreatest = (numbers) => {
//     let greatest = numbers[0];
//     for (let num of numbers){
//         if (num > greatest) {
//             greatest = num;
//         }
// }
// }

// findGreatest([1, 3, 2, 5, 3, 5])
// const totalNum = (numbers) =>{
//      let total = 0;
// for (let num of numbers){
//     total+=num
// }
// console.log(total)
// }
// totalNum([1, 3, 2, 5, 3, 5])

// and ma sb conditions true
// or ma sirf 1 condition true

// Sum of First N Natural Numbers
// N input lo aur 1 se N tak numbers ka sum print karo.
// User se prompt lo k koi b number Daly user jse wo 10 Daly to
// Apko ASA program bana na he k user ne Jo b number dala ho AP 1 se lekr us number tk sum kroge

// let num = Number(prompt("enter any number"))
// sum = 0;
// for(i=1; i <= num; i++ ){
//     sum += i;
//     console.log(i)
// }
// console.log(`sum of first ${num} and natural number is ${sum}`)

// Count vowels 
// Ek string input lo aur count karo vowels (a, e, i, o, u) kitni hain.
// User se prompt lo k wo koi word type kre phr wo jo word type kren usme se count kro kitni vowels he

// let word = prompt("Enter any word");
// word = word.toLowerCase();
// let vowel= "aeiou";

// let count = 0;
// for (let i = 0; i < word.length; i++){
//     if(vowel.includes(word[i])){
// count++;
//     }
// }
// console.log(`The ${word} has ${count} vowels`);

// let myName = "Maham";
// let see = myName.includes("h");
// console.log(see);

// Remove Duplicates from Array Sawal: Ek array hai [1,2,2,3,4,4,5] → output asy ana chaiye [1,2,3,4,5].

// let numArr =  [1,2,2,3,4,4,5];
// let newArr2 = [];
// for(let n of numArr){
//     if(!newArr2.includes(n)){
//      newArr2.push(n)
//     }
// }
// console.log(newArr2);

// Count Words in String Sawal: Ek sentence input lo "I love JavaScript" → count karo kitne words hain

// let words = "I love JavaScript";
// let countWords = words.trim().split(" ").length;
// console.log(countWords);

// let count = 100;
// const fun = ( ) => {
// count--;
// console.log(count);
// if(count == 50){
//     clearInterval(num);
// }
// }
// let num = setInterval(fun,100);

// PRACTICE OF JS


const questionsArr = [
    {
        question: "what is html",
        options: ["scripting language", "server side language", "english language", "markup language"],
        correctAns: 3
    },
    {
        question: "what does CSS stand for?",
        options: ["Cascading Style Sheets", "Creative Style System", "Computer Style Syntax", "Colorful Style Sheets"],
        correctAns: 0
    },
    {
        question: "which is used to create a hyperlink in html?",
        options: ["anchor", "link", "hyper", "connect"],
        correctAns: 0
    },
    {
        question: "which property is used in CSS to change text color?",
        options: ["background color", "font color", "color", "text color"],
        correctAns: 2
    },
    // {
    //     question: "which symbol is used for single line comments in JavaScript?",
    //     options: ["double slash", "hash", "slash star", "percent"],
    //     correctAns: 0
    // },
    // {
    //     question: "which method is used to print something in the console in JavaScript?",
    //     options: ["print", "console log", "log console", "echo"],
    //     correctAns: 1
    // },
    // {
    //     question: "which is used to display an image in html?",
    //     options: ["img", "picture", "photo", "graphic"],
    //     correctAns: 0
    // },
    // {
    //     question: "in CSS, which property controls the size of text?",
    //     options: ["font style", "text size", "font size", "size"],
    //     correctAns: 2
    // },
    // {
    //     question: "which company developed JavaScript?",
    //     options: ["Microsoft", "Netscape", "Google", "Oracle"],
    //     correctAns: 1
    // },
    // {
    //     question: "which attribute in HTML is used to provide alternative text for an image?",
    //     options: ["title", "alt", "src", "name"],
    //     correctAns: 1
    // },
    // {
    //     question: "which of the following is NOT a programming language?",
    //     options: ["Python", "Java", "HTML", "C++"],
    //     correctAns: 2
    // }
];

let startBtn = document.getElementById("startBtn");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
let submitBtn = document.getElementById("submitBtn");
let startScreen = document.getElementById("startScreen");
let quesPage = document.getElementById("quesPage");
let resultPage = document.getElementById("resultPage");
let currQues = document.getElementById("currQues");
let totalQues = document.getElementById("totalQues");
let quesNum = document.getElementById("quesNum");
let ques = document.getElementById("ques");
let progressBar = document.getElementById("progressBar");
let totalQuestions = questionsArr.length;
let userAnswer = Array(totalQuestions).fill(null);
let optionList = document.getElementById("optionList");
let scoreElm = document.getElementById("score");
let quesList = document.getElementById("quesList");
let tryAgain = document.getElementById("tryAgain");
let timerElm = document.getElementById("timer");
let quesTimers = Array(totalQuestions).fill(60);
let expiredQues = Array(totalQuestions).fill(false);
let currentQuestionIdx = 0;
let timer ;
let timeLeft ;
let order = ["A", "B", "C", "D"];
let start = () => {
    startScreen.classList.add("hidden");
    quesPage.classList.remove("hidden");
    totalQues.innerHTML = totalQuestions;
    loadQues();
}

let selectAns = (index) =>{
userAnswer[currentQuestionIdx] = index;
const selectedLi = optionList.children[index];
for(let li of optionList.children){
    if(li.classList.contains("border-blue-600")){
        li.classList.remove("border-blue-600")
    };
}
selectedLi.classList.add("border-blue-600")
}

let loadQues = () => {
    let per = ((currentQuestionIdx + 1) / totalQuestions )* 100 + "%";
    progressBar.style.width = per;
        const currQuestion = questionsArr[currentQuestionIdx];
    ques.innerHTML = currQuestion.question;
    currQues.innerHTML = currentQuestionIdx + 1;
    quesNum.innerHTML = currentQuestionIdx + 1;
    optionList.innerHTML = "";
    currQuestion.options.forEach((opt, idx) => {
        optionList.innerHTML += `
     <li class="flex items-center p-3 border rounded-xl cursor-pointer bg-gray-50" onclick="selectAns(${idx})">
    <span class="mr-3 flex items-center justify-center w-6 h-6 border rounded-full text-xs font-semibold">${order[idx]}</span>
    <span class="text-gray-500 text-sm">${opt}</span>
  </li>
    `
    // timeLeft = quesTimers[currentQuestionIdx];
    if(!expiredQues[currentQuestionIdx]){
        startTime();
    }
    else{
        timerElm.innerHTML = "Time Over";
    }
    })
}

let startTime = () => {
 clearInterval(timer);
  if(expiredQues[currentQuestionIdx]){
 timerElm.innerHTML = "Time Over";
 return;
  }   
 timeLeft = quesTimers[currentQuestionIdx];
 timerElm.innerHTML = timeLeft;
timer = setInterval(() => {
  timeLeft--;
  quesTimers[currentQuestionIdx] = timeLeft;
  timerElm.innerHTML = timeLeft;
  if(timeLeft == 0){
clearInterval(timer);
expiredQues[currentQuestionIdx] = true;
timerElm.innerHTML = "Time Over";
  }
},1000)
}

// const startTimer = () => {
//   clearInterval(timer);
//   timeLeft = questionTimers[currentQuestionIndex];
//   timeElement.textContent = ${timeLeft}s;
//   timer = setInterval(timerInterval, 1000);
// };

// const timerInterval = () => {
//   timeLeft--;
//   questionTimers[currentQuestionIndex] = timeLeft;
//   timeElement.textContent = ${timeLeft}s;

//   if (timeLeft <= 0) {
//     clearInterval(timer);
//     expiredQuestions[currentQuestionIndex] = true;
//     timeElement.textContent = "⏳ Time Over";
//   }
// };

const nextQuestion = () => {
    if (currentQuestionIdx < totalQuestions - 1) {
        currentQuestionIdx++;
        loadQues();
    }
    if (currentQuestionIdx == totalQuestions - 1) {
        nextBtn.classList.add("hidden");
        submitBtn.classList.remove("hidden");
    }
}

const prevQuestion = () => {
    if (currentQuestionIdx > 0) {
        currentQuestionIdx--;
        loadQues();
    }
    if(nextBtn.classList.contains("hidden")){
        nextBtn.classList.remove("hidden");
        submitBtn.classList.add("hidden");
    }

}

let submitQuiz = ()=>{
let score = 0;
quesList.innerHTML =  " ";
    quesPage.classList.add("hidden");
    resultPage.classList.remove("hidden");
 questionsArr.forEach((q,idx)=>{

    if(q.correctAns == userAnswer[idx]){
    score++;
};
scoreElm.innerHTML = `${score}/${totalQuestions}`
quesList.innerHTML += `<div class="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6 mb-4 border border-gray-200">
  <p class="text-lg font-semibold text-gray-800 mb-2">
    Q. ${ idx + 1 } ${ q.question }
  </p>

  <p class="text-gray-700">
    <span class="font-medium text-blue-600">Your Answer:</span> 
    ${ q.options[userAnswer[idx]] ?? "Not Answered"}
  </p>

  <p class="text-gray-700 mt-1">
    <span class="font-medium text-green-600">Correct Answer:</span> 
    ${ q.options[q.correctAns] }
  </p>
</div>
`
})
}

let tryBtnFunc = ()=>{
resultPage.classList.add("hidden");
startScreen.classList.remove("hidden");
currentQuestionIdx = 0;
userAnswer = Array(totalQuestions).fill(null);
 nextBtn.classList.remove("hidden");
 submitBtn.classList.add("hidden");
}

tryAgain.addEventListener("click",tryBtnFunc);
submitBtn.addEventListener("click", submitQuiz);
startBtn.addEventListener("click", start);
prevBtn.addEventListener("click", prevQuestion);
nextBtn.addEventListener("click", nextQuestion);


