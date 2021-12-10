let buttonDiv;
let submitTxt;
window.onload = () => {
    console.log('The window has loaded!');

    // Dynamic creation of HTML elements needed for the page
    let quizDiv = document.createElement('div');
    let resultsDiv = document.createElement('div');
    buttonDiv = document.createElement('div');
    let submitBtn = document.createElement('button');
    submitTxt = document.createElement('span');

    // Set attributes on the newly create elements
    quizDiv.setAttribute('id', 'quiz');
    resultsDiv.setAttribute('id', 'results');
    buttonDiv.setAttribute('id', 'button-container');
    buttonDiv.style.padding = '2px';
    buttonDiv.style.cssFloat = 'left';
    submitBtn.setAttribute('id', 'submit');
    submitBtn.setAttribute('class', 'btn btn-primary');

    // Add some text to display within the submit button
    submitBtn.innerText = 'Submit Quiz';

    // Add the configured elements to the body of the page
    buttonDiv.appendChild(submitBtn);
    buttonDiv.appendChild(submitTxt);
    document.body.prepend(resultsDiv);
    document.body.prepend(buttonDiv);
    document.body.prepend(quizDiv);

    // Add event listeners for validating and grading the quiz
    buttonDiv.addEventListener('mouseover', isQuizValid);
    submitBtn.addEventListener('click', gradeQuiz);

    buttonDiv.blur();
    buildQuiz();

}

function buildQuiz() {
    console.log('buildQuiz invoked!');

    // Convenience reference for the quiz div
    let quizContainer = document.getElementById('quiz');

    // Create an array which can hold the HTML that we will eventually render on the page
    const output = [];

    // Loop through the array of questions and build some HTML for each one
    quizQuestions.forEach((currentQuestion, index) => {

        // Create an array for storing this question's answer HTML
        const answers = [];

        // For each answer in this question create a radio button
        for (let letter in currentQuestion.answers) {
            answers.push(`
            <input type="radio" name="question-${index}" value="${letter}"/>
            <span>${letter}: ${currentQuestion.answers[letter]}</span>
            <br/>`);
        }

        // Build HTML for the question itself
        output.push(`
        <br/>
        <div>${currentQuestion.question}</div>
        <div>${answers.join('')}</div>
        `);
    });

    // Combine our output array's contents into a single string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');

    //let tf = isQuizValid();
    //console.log(tf);

}


function isQuizValid_check(index) {
    let els = document.querySelectorAll("input[type='radio'][name='question-" + index + "']");

    for (let idx = 0; idx < els.length; idx++) {
        if (els[idx].checked) {
            return true;
        }
    }
    return false;
}


function isQuizValid() {

    for (let index = 0; index < quizQuestions.length; index++) {
        let tf = isQuizValid_check(index);
        if (!tf) {
            console.log(false);
            return false;
        }
    };
    console.log(true);
    return true;
}

function gradeQuiz() {

    if (!isQuizValid())
        return;

    let ccc = 0;
    let x = 0;
    for (let index = 0; index < quizQuestions.length; index++) {
        let els = document.querySelectorAll("input[type='radio'][name='question-" + index + "']");
        for (let idx = 0; idx < els.length; idx++) {

            if (els[idx].checked) {
                let next = els[idx].nextElementSibling;
                if (els[idx].value == (quizQuestions[index].correctAnswer)) {
                    console.log("match");
                    next.style.color = 'green';
                    console.log(ccc);
                    ccc++;
                    console.log(ccc);
                } else {
                    console.log("not match");
                    next.style.color = 'red';
                    x++;
                }
                break;
            }
        }
        console.log(ccc);
        submitTxt.innerHTML = " " + ccc + "/" + quizQuestions.length + " : " + (ccc / quizQuestions.length * 100);
    };

}

let quizQuestions = [{
        question: 'Which of the following is NOT a falsy value',
        answers: {
            a: '{}',
            b: '0',
            c: '""',
            d: 'NaN'
        },
        correctAnswer: 'a'
    },
    {
        question: '7 + 7 + "7" = ?',
        answers: {
            a: 147,
            b: 21,
            c: "777",
            d: "147"
        },
        correctAnswer: 'd'
    },
    {
        question: 'NaN == NaN',
        answers: {
            a: 'true',
            b: 'false',
            c: 'undefined',
            d: 'SyntaxError'
        },
        correctAnswer: 'b'
    },
    {
        question: '!!{}',
        answers: {
            a: 'true',
            b: 'false',
            c: '{}',
            d: 'SyntaxError'
        },
        correctAnswer: 'a'
    },
    {
        question: 'Which of the following variable declarative keywords are subject to hoisting?',
        answers: {
            a: 'let',
            b: 'const',
            c: 'var',
            d: '(no keyword used)'
        },
        correctAnswer: 'c'
    }
];