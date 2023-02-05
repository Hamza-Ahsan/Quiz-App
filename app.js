window.onload = function () {
    showQuestion(0)
}


function submitForm(e) {
    e.preventDefault();

    // Getting Name //
    var name = document.getElementById("name")
    var userName = name.value;
    name.value = ""

    // Store player name //
    sessionStorage.setItem("Name", userName)
    
    // Condition To Enter Name
    if(userName){
        // Quiz Web //
        location.href = "quiz.html"
    }
    else {
        alert('Enter Your Name Please to Proceed')
    }
}



//============Questions / Answers=============//
var questions = [
    {
        id: 1,
        question: "What are variables used for in JavaScript Programs?",
        answer: "Storing numbers, dates, or other values",
        options: [
            "Storing numbers, dates, or other values",
            "Varying randomly",
            "Causing high-school algebra flashbacks",
            "None of the above"        ]
    },
    {
        id: 2,
        question: "What is the full form of E-mail?",
        answer: "Electronic Mail",
        options: [
            "Electric Mail",
            "Electronic Mail",
            "Electric Mactine",
            "None of these"
        ]
    },
    {
        id: 3,
        question: "What is the full form of CPU?",
        answer: "Central Processing Unit",
        options: [
            "Central Program Unit",
            "Central Processing Unit",
            "Central Preload Unit",
            "None of these"
        ]
    },
    {
        id: 4,
        question: "Which of the following are capabilities of functions in JavaScript?",
        answer: "Accept parameters",
        options: [
            "Return a value",
            "Accept parameters and Return a value",
            "Accept parameters",
            "None of the above"
        ]
    },
    {
        id: 5,
        question: "What is the correct JavaScript syntax to write (Hello World)?",
        answer: "document.write(Hello World)",
        options: [
            "System.out.println(Hello World)",
            "println (Hello World)",
            "document.write(Hello World)",
            "response.write(Hello World)"
        ]
    }
]


//====Question Count====//
let question_count = 0;
let point = 0;


//======Next Button======//
function nextQuestion() {
    let user_answer = document.querySelector("li.option.active").innerHTML
    
    //==Check the user Answers==//
    if (user_answer == questions[question_count].answer) {
        point += 10
        sessionStorage.setItem("Points", point)
    }
    if (question_count == questions.length - 1){
        sessionStorage.setItem("Time", `${min} minutes and ${sec} seconds`)
        clearInterval(myTime)
        location.href = ("end.html")
        return
    }
    question_count++
    showQuestion(question_count)
}






function showQuestion(count) {
    let question = document.getElementById("questions")
    // question.innerHTML = "<h2>" + questions[count].question + "</h2>"
    question.innerHTML = `<h2>Q${question_count+1}. ${questions[count].question}</h2>
    <ul class="option_list">
                <li class="option">${questions[count].options[0]}</li>
                <li class="option">${questions[count].options[1]}</li>
                <li class="option">${questions[count].options[2]}</li>
                <li class="option">${questions[count].options[3]}</li>
            </ul> `;
    toggleActive()
}


function toggleActive() {
    let option = document.querySelectorAll("li.option");

    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}


//========= Time =========//
var min = 0;
var sec = 0;

var myTime = setInterval(function(){
    if (sec < 60){
        sec++
    }else {
        min++
        sec = 0;
    }
    let set_sec = sec < 10 ? `0${sec}` : `${sec}`
    let set_min = sec < 10 ?  `0${min}` : `0${min}`
    document.querySelector(".time").innerHTML = `${set_min} : ${set_sec}`;
},1000)




//====End.html JS====//
let name = sessionStorage.getItem("Name");
let points = sessionStorage.getItem("Points");
let user_time = sessionStorage.getItem("Time");


document.querySelector(".name").innerHTML = name;
document.querySelector(".points").innerHTML = points;
document.querySelector(".usertime").innerHTML = user_time;



