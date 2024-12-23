/* Assignment 3 - SOEN 287 - Yuhong Yan - Summer II 2024
Submitted By: Afra Azreen (Student ID: 40234047)
Submitted On: 10/08/24
Question 4 - JS script */



document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('findpetform').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        //Get form fields
        const animalType = document.getElementById('animaltype').value;
        const breed = document.getElementById('breed').value;
        const age = document.getElementById('age').value;
        const gender = document.getElementById('gender').value;

        //Check if any field is blank
        if (!animalType || !breed || !age || !gender) {
            const errorMessage = document.getElementById('error-message');
            errorMessage.textContent = 'Please fill out all fields.';
            errorMessage.style.display = 'block';
            return; // Exit the function
        }

        //If all fields are filled, submit the form
        this.submit();
    });
});

// JS Code for handling account creation
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('accountform').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
    
        //Get form fields
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
    
        const usernameRegex = /^[a-zA-Z0-9]+$/;
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]{4,}$/;
        
        //Check if any field is blank
        if (!username || !password) {
            const errorMessage = document.getElementById('error-message');
            errorMessage.textContent = 'Please fill out all fields.';
            errorMessage.style.display = 'block';
            return;
        }
        else{
            const errorMessage = document.getElementById('error-message');
            errorMessage.style.color = 'green';
            errorMessage.textContent = 'All fields filled.';
            errorMessage.style.display = 'block';
        }
            
        //Username validation
        if(!(username.match(usernameRegex))){
            const errorMessage2 = document.getElementById('invalidUserName-message');
            errorMessage2.textContent = 'Invalid Username format!';
            errorMessage2.style.display = 'block';
            return;
        }
        else{
            const errorMessage2 = document.getElementById('invalidUserName-message');
            errorMessage2.style.color = 'green';
            errorMessage2.textContent = 'Valid Username format.';
            errorMessage2.style.display = 'block';
        }
        
        //Password validation
        if(!(password.match(passwordRegex))){
            const errorMessage3 = document.getElementById('invalidPassword-message');
            errorMessage3.textContent = "Invalid Password format: A username can contain letters (both upper and lower case) and digits only. A password must be at least 4 characters long (characters are to be letters and digits only), have at least one letter and at least one digit.";
            errorMessage3.style.display = 'block';
            return;
        }
        else{
            const errorMessage3 = document.getElementById('invalidPassword-message');
            errorMessage3.style.color = 'green';
            errorMessage3.textContent = "Valid Password format.";
            errorMessage3.style.display = 'block';
        }
        //If all fields are filled, submit the form
        this.submit();
    });
});

// This is for the form for have a pet to give away
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('givePetForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        //Get form fields
        const animaltype = document.getElementById('animaltype').value;
        const breed = document.getElementById('breed').value;
        const age = document.getElementById('age').value;
        const gender = document.getElementById('gender').value;

        const ownerName = document.getElementById("ownername").value;
        const ownerEmail = document.getElementById("owneremail").value;

        //Check if any field is blank
        if (!animaltype || !breed || !age || !gender || !ownerName || !ownerEmail) {
            const errorMessage = document.getElementById('error-message');
            errorMessage.textContent = 'Please fill out all fields.';
            errorMessage.style.display = 'block';
            return; // Exit the function
        }
        if(!(ownerEmail.match("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$"))){
            const errorMessage2 = document.getElementById('invalidEmail-message');
            errorMessage2.textContent = 'Invalid email format!';
            errorMessage2.style.display = 'block';
            return; // Exit the function
        }

        //If all fields are filled, submit the form
        this.submit();
    });
});

// This is the login code: 
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginform').addEventListener('submit', function(event) {
        event.preventDefault(); 
    
        //Get form fields
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
    
        const usernameRegex = /^[a-zA-Z0-9]+$/;
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]{4,}$/;
        
        //Check if any field is blank
        if (!username || !password) {
            const errorMessage = document.getElementById('error-message');
            errorMessage.textContent = 'Please fill out all fields.';
            errorMessage.style.display = 'block';
            return;
        }
        else{
            const errorMessage = document.getElementById('error-message');
            errorMessage.style.color = 'green';
            errorMessage.textContent = 'All fields filled.';
            errorMessage.style.display = 'block';
        }
            
        //User validation
        if(!(username.match(usernameRegex))){
            const errorMessage2 = document.getElementById('invalidUserName-message');
            errorMessage2.textContent = 'Invalid Username format!';
            errorMessage2.style.display = 'block';
            return;
        }
        else{
            const errorMessage2 = document.getElementById('invalidUserName-message');
            errorMessage2.style.color = 'green';
            errorMessage2.textContent = 'Valid Username format.';
            errorMessage2.style.display = 'block';
        }
        
        //Password validation
        if(!(password.match(passwordRegex))){
            const errorMessage3 = document.getElementById('invalidPassword-message');
            errorMessage3.textContent = "Invalid Password format: A username can contain letters (both upper and lower case) and digits only. A password must be at least 4 characters long (characters are to be letters and digits only), have at least one letter and at least one digit.";
            errorMessage3.style.display = 'block';
            return;
        }
        else{
            const errorMessage3 = document.getElementById('invalidPassword-message');
            errorMessage3.style.color = 'green';
            errorMessage3.textContent = "Valid Password format.";
            errorMessage3.style.display = 'block';
        }
        //If all fields are filled, submit the form
        this.submit();
    });
});