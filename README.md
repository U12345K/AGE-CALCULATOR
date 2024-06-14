Explanation

    1.    HTML & CSS Structure:
    •    The HTML form has input fields for day, month, and year.
    •    A button to submit the form and a div to display the result.
       .    Use css for styling project.
    2.    JavaScript Code:
    •    We add an event listener to the form to handle the submit event.
    •    When the form is submitted, we prevent the default behavior (reloading the page).
    •    We get the input values and create a Date object for the birth date.
    •    We calculate the current date using new Date().
    •    We compute the age by subtracting the birth year from the current year.
    •    We adjust the age if the current date is before the birth date in the current year.
    •    Finally, we display the calculated age in the result div.

With this setup, you have a functional web-based Age Calculator that uses JavaScript to calculate the user’s age based on their date of birth.

This code creates a visually appealing, user-friendly age calculator with all the necessary functionalities and styling.
