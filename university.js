function calculateGrade(unit) {
  if (unit <= 5.0 ) {
    return {
      grade: "First Class",
    };
  } else if (unit <= 4.49) {
    return {
      grade: "Second Class Upper",
    };
  } else if (unit <= 3.49) {
    return {
      grade: "Scond Class Lower",
    };
  } else if (unit <= 2.39) {
    return {
      grade: "Third Class",
    };
  } else if (unit <= 1.49) {
    return {
      grade: "Pass",
    };
  } else {
    return {
      grade: "Fail",
    };
  }
}

let checkButton = document.getElementById("calculate-gpa-btn");
let resultBox = document.getElementById("university-result");
let resultText = document.getElementById("university-gpa");

checkButton.addEventListener("click", function () {
  let course = document.getElementById("course-name").value.trim();
  let unitInput = document.getElementById("course-unit").value;

  if (course === "" || unitInput === "") {
    resultText.innerHTML = "Please enter a course and unit-score";
    resultBox.style.display = "block";
    return;
  }

  let unit = Number(unitInput);

  if (unit < 0 || unit > 5) {
    resultText.textContent = "Enter a unit-score between 0.0 and 5.0";
    resultBox.style.display = "block";
  }

  let result = calculateGrade(unit);

  resultText.textContent = course + ": " + unit + "% — " + result.grade;

  resultBox.style.display = "block";
});
