// Function to calculate age
function calculateAge(dob) {
    var birthDate = new Date(dob);
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();

    // Check if the current month is before the birth month or
    // if it's the same month, check if the day is before the birth day
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// Event listener for the form submit
document.getElementById('ageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var dob = document.getElementById('dob').value;
    var age = calculateAge(dob);
    document.getElementById('result').textContent = 'Your age is: ' + age;
});
