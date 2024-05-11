let quizContainer = document.querySelector('.quiz-container');
let loginContainer = document.querySelector('.login-container');
let resultsContainer = document.querySelector('.results-container');
let questions = [
    {
        question: "Каких животных использовала 28-я резервная советская армия, сформированная в Астрахани во время боев под Сталинградом, для маскировки транспортных орудий?",
        options: ["Лошадей", "Верблюдов", "Мулов", "Ослов"],
        correctAnswer: "Лошадей"
    },
    {
        question: "К коренному перелому в Великой Отечественной войне относится битва за:",
        options: ["Прибалтику", "Сталинград", "Москву", "Берлин"],
        correctAnswer: "Сталинград"
    },
    {
        question: "Сколько дней продолжалась блокада Ленинграда?",
        options: ["854", "653", "796", "872"],
        correctAnswer: "872"
    },
    {
        question: "Назовите крепость, героическая оборона которой стала одной из самых ярких страниц в истории Великой Отечественной войны и одним из первых ее сражений.",
        correctAnswer: ["брестская крепость", "брестская"]
    },
    {
        question: "Какой советский разведчик работал под агентурными псевдонимами Рамзай и Инсон?",
        options: ["Анатолий Гуревич", "Шандор Радо", "Ян Черняк", "Рихард Зорге"],
        correctAnswer: "Рихард Зорге"
    }
]

let currentQuestion = 0; //Текущий вопрос
let correctAnswers = 0; // Количество правильных ответов

// Функция для отображения текущего вопроса и вариантов ответа


glasses = 0



function displayLogin() {
    loginContainer.style.display = "flex";
    quizContainer.style.display = "none";
    resultsContainer.style.display = "none";


    let begin = document.querySelector(".begin");

    begin.addEventListener('click', (e) => {
        for (let i = 0; i < questions.length; i++) {
            if (glasses = 1) {
                displayQuestion();

            }
            glasses = 0;
        }
    })

}

let input = document.querySelector(".input__name");

function displayQuestion() {
    console.log("------QUESTION-------");
    loginContainer.style.display = "none";
    quizContainer.style.display = "flex";
    resultsContainer.style.display = "none";
    let result = document.getElementById("result");
    //result.textContent = correctAnswers
    let questionElement = document.querySelector(".question"); // получить блок для размещения вопроса
    // размещаем вопрос на странице
    
    /*console.log(correctAnswers);*/
    console.log("currentQuestion:", currentQuestion);
    /*
    for (let i=0; i < questions.length; i++) {
        displayQuestion();
    }
    */
    questionElement.textContent = `${currentQuestion + 1}. ${questions[currentQuestion].question}`; // интерполяция - sth like f string
    let wrongAnswers = document.querySelector(".result__wrong-answers");

    // Создать кнопки с вариантами ответов и привязать к ним функциб перехода к следующему вопросу

    if (questions[currentQuestion].hasOwnProperty('options')) {
        console.log('options in question');




        let optionsElement = document.querySelector(".options"); // Получить блок для размещения кнопки
        optionsElement.innerHTML = ""; // Очищаем содержимое блока optionsElement

        // Получить массив ответов
        let optionsArray = questions[currentQuestion].options;
        console.log(optionsArray);
        optionsArray.forEach((option) => {
            let button = document.createElement('button');
            button.classList.add('btn');
            button.textContent = option;
            optionsElement.append(button);
        });
        optionsElement.addEventListener('click', (e) => {
            e.preventDefault();
            /*
            if (currentQuestion >= questions.length - 1) {
                displayResults();
            }
            */
           
            if (currentQuestion <= questions.length - 1) {
                displayResults();
            }

            glasses = 1;


            let targetOption = e.target;

            console.log("button pressed: ", targetOption);

            console.log("question: ", currentQuestion + 1);
            console.log("correct answers:", correctAnswers);
            if (targetOption.textContent = questions[currentQuestion].correctAnswer) {
                correctAnswers += 1;
            } else {
                let wronganswer = document.createElement("p");
                wronganswer.classList.add("wronganswer");
                wronganswer.textContent = questions[currentQuestion].correctAnswer;
                wrongAnswers.append(wronganswer);
                console.log(wrongAnswers);
                console.log(wronganswer);

            }
            console.log(targetOption.textContent);
            console.log(questions[currentQuestion].correctAnswer);

            currentQuestion += 1; // получить блок для размещения вопроса
            console.log(questions[currentQuestion].question)
            questionElement.textContent = `${currentQuestion + 1}. ${questions[currentQuestion].question}`; // интерполяция - sth like f string
            optionsElement.innerHTML = "";


            let optionsArray = questions[currentQuestion].options;
            console.log("RAW ARRAY OF OPTIONS:", questions[currentQuestion].options)
            console.log("ARRAY OF OPTIONS:", optionsArray)

            // Создать кнопки с вариантами ответов и привязать к ним функциб перехода к следующему вопросу
            console.log("forEach starting");

            optionsArray.forEach((option) => {
                let button = document.createElement('button');
                button.classList.add('btn');
                button.textContent = option;
                optionsElement.append(button);
                //result.textContent = `${correctAnswers}/${questions.length}`
                optionsElement.addEventListener('click', (e) => {
                    e.preventDefault();
                    if (currentQuestion >= questions.length - 1) {
                        displayResults();
                    }
                    let targetOption = e.target;
                    console.log("pressed button: ", targetOption);
                    console.log("current quesstion:", currentQuestion);
                    console.log("score (correct answers):", correctAnswers);
                    console.log("correct answer is:", questions[currentQuestion].correctAnswer);
                    if (targetOption.textContent == questions[currentQuestion].correctAnswer) {
                        correctAnswers += 1;
                    } else {
                        let wronganswer = document.createElement("p");
                        wronganswer.classList.add("wronganswer");
                        wronganswer.textContent = questions[currentQuestion].question;
                        wrongAnswers.append(wronganswer);
                        console.log("wrong answers:", wrongAnswers);
                        console.log("wrong answer:", wronganswer);

                    }
                    console.log("text of the button:", targetOption.textContent);
                    console.log("correct answer:"< questions[currentQuestion].correctAnswer);

                    currentQuestion += 1; // получить блок для размещения вопроса
                    console.log("the question:", questions[currentQuestion].question);
                    questionElement.textContent = `${currentQuestion + 1}. ${questions[currentQuestion].question}`; // интерполяция - sth like f string
                    optionsElement.innerHTML = "";


                    let optionsArray = questions[currentQuestion].options;
                    console.log("array of options:", optionsArray);

                    // Создать кнопки с вариантами ответов и привязать к ним функциб перехода к следующему вопросу

                    optionsArray.forEach((option) => {
                        let button = document.createElement('button');
                        button.classList.add('btn');
                        button.textContent = option;
                        optionsElement.append(button);
                        //result.textContent = `${correctAnswers}/${questions.length}`
                    });
                });
            });
        });

    } else {
        console.log("question:", currentQuestion + 1);
        console.log('no options in question');
        let inputq = document.createElement('input');
        let btnq = document.createElement('button');
        btnq.classList.add('btn');
        btnq.classList.add('btnq');
        inputq.classList.add('inputq');
        btnq.addEventListener('click', () => {
            glasses = 1;
            if (inputq.value.toLowerCase() == questions[currentQuestion].correctAnswer.toLowerCase()) {
                correctAnswers += 1;
            } else {
                let wronganswer = document.createElement("p");
                wronganswer.classList.add("wronganswer");
                wronganswer.textContent = questions[currentQuestion].question;
                wrongAnswers.append(wronganswer);
                console.log("wrong answers:", wrongAnswers);
                console.log("wrong answer:", wronganswer);
            }
        })
    }



}

console.log(questions.length);

for (let i = 0; i < questions.length; i++) {
    console.log("starting to dispayQuesstion()");
    document.querySelector("button").onclick = () => {
        displayQuestion();

    }

}

/*
parent.addEventListener('click', (e) => {
    console.log(e);
    console.log('click');
    e.preventDefault();
 
 
    let targetBtn = e.target;
 
    console.log('button defined');
 
    if (targetBtn.getAttribute('class') == "key") {
        if (targetBtn.textContent == "Space") {
            input.textContent += " ";
        } else if (targetBtn.textContent == "Backspace") {
            console.log(input.textContent[input.textContent.length - 1]);
            input.textContent = input.textContent.replace(input.textContent[input.textContent.length - 1], '')
        } else {
            input.textContent += targetBtn.textContent;
    
        }
        console.log(targetBtn.textContent);
        console.log(input.textContent);
 
    }
 
})
*/






function displayResults() {
    let name = input.value;
    console.log("name: ", name);
    loginContainer.style.display = "none";
    quizContainer.style.display = "none";
    resultsContainer.style.display = "flex";
    let percentage = Math.round(correctAnswers / questions.length * 100);
    console.log("fghfghfg");
    console.log(percentage);
    let mark = 0
    if (percentage > 80) {
        mark = 5;
    } else if (percentage < 81 && percentage > 62) {
        mark = 4;
    } else if (percentage < 63 && percentage > 49) {
        mark = 3;
    } else {
        mark = 2;
    }
    let results__mark = document.querySelector(".results__mark");
    let results__percentage = document.querySelector(".results__percentage");
    results__mark.textContent = `${name}, ваша оценка ${mark}`;
    results__percentage.textContent = `Правильных ответов ${correctAnswers} из ${questions.length} (${percentage}%)`;







    /*
    
    
    5	91-100%
    5-	81-90 %
    4	71-80 %
    4-	63-70 %
    3	56-62 %
    3-	50-55 %
    2	25-49 %
    2-	0-24 %
    
    
    */




    /*
 
    
Иван, ваша оценка 3 
правильных ответов 3 из 6 (50%)
Вы ответили неверно на следующие вопросы:
Какой язык программирования вы изучаете?
Что такое CSS?
 
    */






}

displayLogin();
/*
displayQuestion();
*/

