window.onload = () => {
    console.log('The window has loaded!');

    // Dynamic creation of HTML elements needed for the page
    let quizDiv = document.createElement('div');
    let resultsDiv = document.createElement('div');
    let buttonDiv = document.createElement('div');
    let submitBtn = document.createElement('button');

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
    document.body.prepend(resultsDiv);
    document.body.prepend(buttonDiv);
    document.body.prepend(quizDiv);

    // Add event listeners for validating and grading the quiz
    buttonDiv.addEventListener('mouseover', isQuizValid);
    submitBtn.addEventListener('click', gradeQuiz);

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
            ${letter}: ${currentQuestion.answers[letter]}
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


}


function isQuizValid() { 
    for(let i = 0; i < quizQuestions.length; i++){
        document.querySelector(`name = "qustion-${i}`);
        return true;
    }
    return false;
}
//for each queston, make sure it is clicked.
//if so return true
//if not return false

function gradeQuiz() {

}

let quizQuestions = [
    {
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

