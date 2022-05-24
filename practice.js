//declaration of variables
let userName= prompt("Please, enter your name: ");
let userEmail=prompt("Please, enter your email: ");
let monthlySalary=prompt("Please, enter your monthly salary: ");
let Date_of_birth=prompt("Please, enter your date of birth: ");
let Place_of_birth=prompt("Please, enter your place of birth: ");
let Gender=prompt("Please, enter your Gender: ");



//Calculate the yearly salary
let yearlySalary=monthlySalary*12;

// display on the html the information
document.write(`
    <div>
        <p>Name: ${userName} </p>
        <p>Email: ${userEmail} </p>
        <p>Salary: ${yearlySalary} </p>
        <p>Date of birth: ${Date_of_birth} </p>
        <p>Place of birth: ${Place_of_birth} </p>
        <p>Gender: ${Gender} </p>
    </div>
    `); 