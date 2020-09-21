// De vragen
const quizData = [
    {
        question: 'This is a European flag, which flag?',
        a: 'Netherlands',
        b: 'Belgium',
        c: 'France',
        d: 'Slovakia',
        correct: 'a',
    },
    {
        question: 'This is a European flag, which flag?',
        a: 'Slovakia',
        b: 'Greece',
        c: 'Spain',
        d: 'Croatia',
        correct: 'c',
    },
    {
        question: 'This is a European flag, which flag?',
        a: 'Albania',
        b: 'Malta',
        c: 'Italy',
        d: 'Luxembourg',
        correct: 'a',
    },
    {
        question: 'This is a European flag, which flag?',
        a: 'Austria',
        b: 'Armania',
        c: 'Croatia',
        d: 'Belgium',
        correct: 'b',
    },
    {
        question: 'This is a European flag, which flag?',
        a: 'Austria',
        b: 'Ireland',
        c: 'Hungary',
        d: 'Kosovo',
        correct: 'a',
    },
    {
        question: 'This is a European flag, which flag?',
        a: 'Georgia',
        b: 'Azerbaijan',
        c: 'Romania',
        d: 'Serbia',
        correct: 'b',
    },
    {
        question: 'This is a European flag, which flag?',
        a: 'Poland',
        b: 'Ireland',
        c: 'Finland',
        d: 'Belarus',
        correct: 'd',
    },
    {
        question: 'This is a European flag, which flag?',
        a: 'Iceland',
        b: 'Germany',
        c: 'Belgium',
        d: 'Greece',
        correct: 'c',
    },
];

// Constanten voor function loadQuiz
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const image_flag = document.getElementById('image');
const submitBtn = document.getElementById('submit');
const quiz = document.getElementById('quiz');

let storeRandomNumbersArray = []

function randomNumber(min,max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

while (storeRandomNumbersArray.length < 8) {
    var r = randomNumber(0,8);
    if(storeRandomNumbersArray.indexOf(r) === -1) {
        storeRandomNumbersArray.push(r);
    }
}

let score = 0;

// Vraag en antwoorden functie
loadQuiz();

function loadQuiz() {

    const currentQuizData = quizData[storeRandomNumbersArray[0]];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    loadImages();
}

// controleren of er het juiste antwoord is gekozen.
function check_answer() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}


// uncheck answer na het gaan naar de volgende pagina
function uncheck() {
    document.getElementById("a").checked = false;
    document.getElementById("b").checked = false;
    document.getElementById("c").checked = false;
    document.getElementById("d").checked = false;
}

// click button functie
submitBtn.addEventListener("click", () => {
    const answer = check_answer();

    if (answer == quizData[storeRandomNumbersArray[0]].correct) {
        score++;
    }

// controleren of er EEN antwoord is gekozen..
    if (document.getElementById("a").checked || document.getElementById("b").checked || document.getElementById("c").checked || document.getElementById("d").checked) {
    
    storeRandomNumbersArray.shift();
    if (storeRandomNumbersArray.length > 0) {
        loadQuiz();
        uncheck();
    } else {
        quiz.innerHTML = `
            <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            
            <div class="button-bottom"><button onclick="location.reload()">Reload</button></div>
        `;
    }
}

})

// zoekt juiste plaatje bij vraag 
// SWITCH??
function loadImages() {
    if (storeRandomNumbersArray[0] === 0) {
        image_flag.src = "Europese vlaggen\\netherlands-flag-medium.png";
    } else if (storeRandomNumbersArray[0] === 1) {
        image_flag.src = "Europese vlaggen\\spain-flag-medium.png";
    } else if (storeRandomNumbersArray[0] === 2) {
        image_flag.src = "Europese vlaggen\\albania-flag-medium.png"; 
    } else if (storeRandomNumbersArray[0] === 3) {
        image_flag.src = "Europese vlaggen\\armenia-flag-medium.png"; 
    } else if (storeRandomNumbersArray[0] === 4) {
        image_flag.src = "Europese vlaggen\\austria-flag-medium.png"; 
    } else if (storeRandomNumbersArray[0] === 5) {
        image_flag.src = "Europese vlaggen\\azerbaijan-flag-medium.png"; 
    } else if (storeRandomNumbersArray[0] === 6) {
        image_flag.src = "Europese vlaggen\\belarus-flag-medium.png"; 
    } else if (storeRandomNumbersArray[0] === 7) {
        image_flag.src = "Europese vlaggen\\belgium-flag-medium.png"; 
    }
    
}
