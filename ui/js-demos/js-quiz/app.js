
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

    document.getElementById('submit').addEventListener('click', isQuizValid);
}

// TODO: Implement me
// Function that checks if a quiz is valid before putting it in
function isQuizValid() {
    console.log("Validating Quiz!");
    // Default our validation to false
    let isValid = true;

    try {
        quizQuestions.forEach((currentQuestion, index) => {
            var currRadio = document.querySelector(`input[name=question-${index}]:checked`).value;
            if (currRadio === null){
                isValid = false;
            }
        })
    }
    catch {
        isValid = false;
    }
    
    if (!isValid) alert('Please answer every question!');
}

// TODO: Implement me
// Function that can grade a given quiz
function gradeQuiz() {

    // Select the results container
    let resultContainer = document.getElementById('results');

    // Create an array which can hold the HTML that we will eventually render on the page
    const output = [];
    var corCount = 0;

    // Loop through the array of questions and build some HTML for each one
    quizQuestions.forEach((currentQuestion, index) => {

        // Create an array for storing this question's answer HTML
        const answers = [];

        // Check their answer
        var givenAnswer = document.querySelector(`input[name=question-${index}]:checked`).value;
        var isCorrect = givenAnswer == currentQuestion.correctAnswer;
        if (isCorrect) corCount = corCount + 1;

        

        // For each answer in this question create a radio button
        for (let letter in currentQuestion.answers) {
            // Regardless of if they got it right, the correct answer will be given in green
            if (letter == currentQuestion.correctAnswer) { // Correct answers are green
                answers.push(`
                <p class = "text-white bg-success"> ${letter}: ${currentQuestion.answers[letter]} </p>
                `);
            }
            else if (letter == givenAnswer && !isCorrect){ // Incorrect given answers are turned red
                answers.push(`
                <p class = "text-white bg-danger">${letter}: ${currentQuestion.answers[letter]} </p>
                `);
            }
            else { // Other answers get a neutral print.
                answers.push(`
                <p class = "text-black"> ${letter}: ${currentQuestion.answers[letter]} </p>
                `);
            }
            
        }

        // Build HTML for the question itself
        output.push(`
        <br/>
        <br/>
        <div>${currentQuestion.question}</div>
        <div>${answers.join('')}</div>
        `);
    });

    // Output the results in the end
    output.push(`
    <div><p classs = "h3"> You got ${corCount} / ${quizQuestions.length} correct! </p>`);

    // Combine our output array's contents into a single string of HTML and put it on the page
    resultContainer.innerHTML = output.join('');
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


