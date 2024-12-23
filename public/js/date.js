/* Assignment 3 - SOEN 287 - Yuhong Yan - Summer II 2024
Submitted By: Afra Azreen (Student ID: 40234047)
Submitted On: 10/08/24
Question 4 - JS file */


/* This is the Java Script code corresponding to adding the date and time to the webpage.  */

// Event listener waits for the HTML content to load then fires the function.
document.addEventListener('DOMContentLoaded', function() {

    function updateDateTime() {

        // Creating a new date object.
        const current = new Date();

        // The toLocaleString method is used with the locale en-US (English, United States) and a formatting options object.
        // Here, I converted the object to a string. 
        
        const formattedDateTime = current.toLocaleString('en-US', {

            // Specifying formatting options. 
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true
        });

        // Writes into the HTML component.
        document.getElementById('datetime').innerHTML = "Accessed at: " + formattedDateTime;
    }

    // Function call
    updateDateTime();

    // Updates every second (1000 miliseconds.)
    setInterval(updateDateTime, 1000);
});
