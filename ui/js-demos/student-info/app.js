function* idGenerator() {
    let idCounter = 1;
    while(true) {
        yield idCounter++;
    }
}

let idGen = idGenerator();

function addStudentDataToTable() {

    // Allocate common element references
    let studentNameField = document.getElementById('student-name');
    let studentMajorField = document.getElementById('student-major');
    
    // Get values from input fields
    let studentName = studentNameField.value;
    let studentMajor = studentMajorField.value;

    // Validate the provided values (ensure that they are not empty strings)
    if (studentName && studentMajor) {

        // Create a TR object and TD objects for the student table
        let row = document.createElement('tr');
        let studentIdCell = document.createElement('td');
        let studentNameCell = document.createElement('td');
        let studentMajorCell = document.createElement('td');

        // Append cells to the row
        row.appendChild(studentIdCell);
        row.appendChild(studentNameCell);
        row.appendChild(studentMajorCell);

        // Append the row to the pre-existing table
        document.getElementById('student-table-body').appendChild(row);

        // Add student info to the newly appended row
        studentIdCell.innerText = idGen.next().value;
        studentNameCell.innerText = studentName;
        studentMajorCell.innerText = studentMajor;

        // Clear the input fields
        studentNameField.value = '';
        studentMajorField.value = '';

    } else {
        alert('You need to provide both a name and major!');
    }
}

document.getElementById('add-student').addEventListener('click', addStudentDataToTable);