function calculateGrade(gpa) {
    if (gpa >= 3.50) {
        return "Distinction";
    } else if (gpa >= 3.00) {
        return "Upper Credit";
    } else if (gpa >= 2.50) {
        return "Lower Credit";
    } else if (gpa >= 2.00) {
        return "Pass";
    } else {
        return "Fail"
    }
}

let checkButton = document.getElementById("calculate-poly-gpa-btn");
let resultBox = document.getElementById("poly-result");
let resultText = document.getElementById("poly-gpa");

checkButton.addEventListener("click", function() {
    let course = document.getElementById("course-name").value;
    let unit = document.getElementById("course-unit").value;

    if (course === "" || unit === "") {
        resultText.innerHTML = "Please enter the course-name and unit";
        resultBox.style.display = "block"
        return;
    }

    let gpa = Number(unit);

    if (gpa < 0 || gpa > 4 ) {
        resultText.textContent = "Enter a GPA between 0 and 4.";
        resultBox.style.display = "block";
        return;
    }

    let result = calculateGrade(gpa);

    resultText.innerHTML = course + ": " + result;

    resultBox.style.display = "block"
})