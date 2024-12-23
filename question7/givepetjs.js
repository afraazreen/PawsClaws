// This attaches an event listener to the submit button. So this runs when the form is submitted. 

document.getElementById('givePetForm').addEventListener('submit', function(event) {

    // Prevents default behavior. 
    event.preventDefault();

    // Checks whether form is valid, and then there is a string for the default message. 
    let isValid = true;
    let errorMessage = '';

    // The email is retrieved and then a regex expression checks whether or not it is valid. 
    // This line defines a regular expression pattern for validating email addresses.
    // The pattern checks for a string that follows the standard email format: characters before the @, a domain name, and a domain extension.
    const ownerEmail = document.getElementById('owner-email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Checks the text area. 
    const comments = document.getElementById('comments').value.trim();

    // Retrieves which values are checked. 
    const getsAlongDogs = document.getElementById('gets-along-dogs').checked;
    const getsAlongCats = document.getElementById('gets-along-cats').checked;
    const suitableChildren = document.getElementById('suitable-children').checked;

    // Validation is done, to see if the email adress is valid or not. 

    if (!emailPattern.test(ownerEmail)) {
        isValid = false;
        errorMessage += 'Please enter a valid email address.<br>';
    }

    if (comments === '') {
        isValid = false;
        errorMessage += 'Please enter some comments.<br>';
    }

    if (!getsAlongDogs && !getsAlongCats && !suitableChildren) {
        isValid = false;
        errorMessage += 'Please select at least one option for "Gets along with".<br>';
    }

    if (!isValid) {
        document.getElementById('error-message').innerHTML = errorMessage;
    } else {
        document.getElementById('error-message').innerHTML = '';

        // When successful, the error message is displayed. 
        alert('Form submitted successfully!');
    }
});