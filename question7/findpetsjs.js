// This function selects the form element and helps identify when the form is submitted, by having an event listener for the submit button. 


document.getElementById('findPetsForm').addEventListener('submit', function(event) {

    // Prevents it from default behavior. Without this, the form would submit and reload the page, which we don't want during client-side validation.
    event.preventDefault();

    // The first value tracks whether the form is valid, the second is a string which will take an error message. 
    let isValid = true;
    let errorMessage = '';


    // Retrieves the data from the document. 
    const animalType = document.getElementById('animal-type').value;
    const breed = document.getElementById('breed').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;

    // Sees what the user checked, true if checked false otherwise.
    const dogs = document.getElementById('dogs').checked;
    const cats = document.getElementById('cats').checked;
    const children = document.getElementById('children').checked;

    // If the values are empty that means they weren't selected, so the form is invalid. 
    if (animalType === '') {
        isValid = false;
        errorMessage += 'Please select an animal type.<br>';
    }
    if (breed === '') {
        isValid = false;
        errorMessage += 'Please select a breed.<br>';
    }
    if (age === '') {
        isValid = false;
        errorMessage += 'Please select an age.<br>';
    }
    if (gender === '') {
        isValid = false;
        errorMessage += 'Please select a gender.<br>';
    }

    // This is for the checkboxes. 
    if (!dogs && !cats && !children) {
        isValid = false;
        errorMessage += 'Please select at least one option for "Needs to Get Along With"<br>';
    }

    // If not valid, then you display the error message. 
    if (!isValid) {
        document.getElementById('error-message').innerHTML = errorMessage;
    } else {
        document.getElementById('error-message').innerHTML = '';
        // This means it was successful.
        alert('Form submitted successfully!');
    }
});