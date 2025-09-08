// let startBtn = document.getElementById("startBtn");
// let startScreen = document.getElementById("startScreen");
// let prevBtn = document.getElementById("prevBtn");
// let nextBtn = document.getElementById("nextBtn");
// let submitBtn = document.getElementById("submitBtn");
// let quesPage = document.getElementById("quesPage");
// let resultPage = document.getElementById("resultPage");
// let currQues = document.getElementById("currQues");
// let totalQues = document.getElementById("totalQues");
// let quesNum = document.getElementById("quesNum");
// let ques = document.getElementById("ques");
// let progressBar = document.getElementById("progressBar");
// let totalQuestions = questionsArr.length;
// let userAnswer = Array(totalQuestions).fill(null);
// let optionList = document.getElementById("optionList");
// let scoreElm = document.getElementById("score");
// let quesList = document.getElementById("quesList");
// let tryAgain = document.getElementById("tryAgain");
// let currentQuestionIdx = 0;
// let order = ["A","B","C","D"];
// let start = () => {
//  startScreen.classList.add("hidden");
//  quesPage.classList.remove("hidden");
//  totalQues.innerHTML = totalQuestions;
//  loadQues();
// }

// let selectAns = (index) =>{
// userAnswer[currentQuestionIdx] = index;
// const selectedLi = optionList.children[index];
// for(let li of optionList.children){
//     if(li.classList.contains("border-blue-600")){
//         li.classList.remove("border-blue-600")
//     };
// }
// selectedLi.classList.add("border-blue-600")
// }

// let loadQues = () => {
//     let per = ((currentQuestionIdx + 1) / totalQuestions )* 100 + "%";
//     progressBar.style.width = per;
//         const currQuestion = questionsArr[currentQuestionIdx];
//     ques.innerHTML = currQuestion.question;
//     currQues.innerHTML = currentQuestionIdx + 1;
//     quesNum.innerHTML = currentQuestionIdx + 1;
//     optionList.innerHTML = "";
//     currQuestion.options.forEach((opt, idx) => {
//         optionList.innerHTML += `
//      <li class="flex items-center p-3 border rounded-xl cursor-pointer bg-gray-50" onclick="selectAns(${idx})">
//     <span class="mr-3 flex items-center justify-center w-6 h-6 border rounded-full text-xs font-semibold">${order[idx]}</span>
//     <span class="text-gray-500 text-sm">${opt}</span>
//   </li>
//     `
//     })
// }

// const nextQuestion = () => {
//     if (currentQuestionIdx < totalQuestions - 1) {
//         currentQuestionIdx++;
//         loadQues();
//     }
//     if (currentQuestionIdx == totalQuestions - 1) {
//         nextBtn.classList.add("hidden");
//         submitBtn.classList.remove("hidden");
//     }
// }

// const prevQuestion = () => {
//     if (currentQuestionIdx > 0) {
//         currentQuestionIdx--;
//         loadQues();
//     }
//     if(nextBtn.classList.contains("hidden")){
//         nextBtn.classList.remove("hidden");
//         submitBtn.classList.add("hidden");
//     }

// }

// let submitQuiz = ()=>{
// let score = 0;
// quesList.innerHTML =  " ";
//     quesPage.classList.add("hidden");
//     resultPage.classList.remove("hidden");
//  questionsArr.forEach((q,idx)=>{

//     if(q.correctAns == userAnswer[idx]){
//     score++;
// };
// scoreElm.innerHTML = `${score}/${totalQuestions}`
// quesList.innerHTML += `<div class="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6 mb-4 border border-gray-200">
//   <p class="text-lg font-semibold text-gray-800 mb-2">
//     Q. ${ idx + 1 } ${ q.question }
//   </p>

//   <p class="text-gray-700">
//     <span class="font-medium text-blue-600">Your Answer:</span> 
//     ${ q.options[userAnswer[idx]] ?? "Not Answered"}
//   </p>

//   <p class="text-gray-700 mt-1">
//     <span class="font-medium text-green-600">Correct Answer:</span> 
//     ${ q.options[q.correctAns] }
//   </p>
// </div>
// `
// })
// }

// let tryBtnFunc = ()=>{
// resultPage.classList.add("hidden");
// startScreen.classList.remove("hidden");
// currentQuestionIdx = 0;
// userAnswer = Array(totalQuestions).fill(null);
//  nextBtn.classList.remove("hidden");
//  submitBtn.classList.add("hidden");
// }

// tryAgain.addEventListener("click",tryBtnFunc)
// submitBtn.addEventListener("click", submitQuiz)
// startBtn.addEventListener("click", start)
// prevBtn.addEventListener("click", prevQuestion)
// nextBtn.addEventListener("click", nextQuestion)

