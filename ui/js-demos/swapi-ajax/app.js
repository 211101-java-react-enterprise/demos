window.onload = function() {

    ID_FIELD.addEventListener('blur', fieldsValid);
    SELECT_FIELD.addEventListener('blur', fieldsValid);
    SUBMIT_BTN.setAttribute('disabled', true);
    SUBMIT_BTN.addEventListener('click', awaitInfo);

    // ALERT_MSG.style.display = 'none';
    ALERT_MSG.setAttribute('hidden', true);
}

function fieldsValid() {

    let id = ID_FIELD.value;
    let category = SELECT_FIELD.value;

    if (id && category) {
        ALERT_MSG.setAttribute('hidden', true);
        SUBMIT_BTN.removeAttribute('disabled');
    } else {
        ALERT_MSG.removeAttribute('hidden');
        SUBMIT_BTN.setAttribute('disabled', true);
    }

}

function getInfo() {
    
    /*
        Asynchronous JavaScript And XML

            - Works with more than just XML (name predates JSON)
            - AJAX != programming languages
            - AJAX != framework
            - AJAX == Web API provided by the browser's JS environment

            AJAX is used as a technique for allowing a web page to consume data exposed by web servers.
        
    */

    let id = ID_FIELD.value;
    let category = SELECT_FIELD.value;

    /*
        AJAX Workflow

            Making asynchronous calls to an external web server using AJAX:

                1) Create an XMLHttpRequest object (XHR)
                2) Open the request by defining the HTTP method/verb and the target server URL
                3) Send the request (which may optionally contain data in the request body)
                4) Define a callback function which will handle the response when received
    */
    let xhr = new XMLHttpRequest();

    xhr.open('GET', `https://swapi.dev/api/${category}/${id}`);

    xhr.send();

    xhr.onreadystatechange = function() {

        console.log('xhr ready state changed! new state: ' + xhr.readyState);
        /*
            The XMLHttpRequest.readyState property returns the state an XHR client
            is currently in. An XHR client exists in one of the following states:

                0 - UNSENT; the XHR object has been created, but .open() has not been called
                1 - OPENED; .open() has been called
                2 - HEADERS_RECEIVED; .send() has been called AND the response headers and status code are available
                3 - LOADING; beginning to receive the response body, xhr.responseText() holds partial data
                4 - DONE; the operation is complete, and the response is fully received
        */
       if (xhr.readyState === 4) {
           // TODO: dynamically create some HTML that will hold the retrieved data, and display it on the screen
           console.log(xhr.responseText);
           console.log(JSON.parse(xhr.responseText));
       }
    }

}

function fetchInfo() {
    
    console.log('fetchInfo invoked!');

    let id = ID_FIELD.value;
    let category = SELECT_FIELD.value;

    fetch(`https://swapi.dev/api/${category}/${id}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(err => console.error(err)); // handles any errors that occur within this Promise chain

    // NEVER WRITE PROMISE LOGIC LIKE THIS:
    // fetch(`https://swapi.dev/api/${category}/${id}`)
    // .then(resp => {
    //     resp.json().then(data => {
    //         console.log(data);
    //     })
    // })
    // .catch(err => console.error(err));

    console.log('test'); // prints before API response is output to console

}

async function awaitInfo() {

    console.log('awaitInfo invoked!');

    let id = ID_FIELD.value;
    let category = SELECT_FIELD.value;

    // the await keyword makes the following logic "blocking" (no code after will execute until the current line finishes)
    // it also "unpacks" the value wrapped in a Promise
    try {
        let resp = await fetch(`https://swapi.dev/api/${category}/${id}`);
        console.log('doesn\'t print if the fetch call fails');
        let data = await resp.json();
        sessionStorage.setItem('swapi-data', JSON.stringify(data));
        localStorage.setItem('swapi-data', JSON.stringify(data));
    } catch (err) {
        console.log('maybe?')
        console.error(err);
    }

    console.log('test');

}

const ID_FIELD = document.getElementById('sw-id');
const SELECT_FIELD = document.getElementById('sw-category');
const SUBMIT_BTN = document.getElementById('submit-btn');
const SW_FORM = document.getElementById('sw-form');
const RESULTS_CONTAINER = document.getElementById('results-container');
const ALERT_MSG = document.getElementById('alert-msg');