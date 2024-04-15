function checkGrade() {
  const examType = document.getElementById("examType").value;
  const totalMarks = parseFloat(document.getElementById("totalMarks").value);

  if (examType === "final" && totalMarks >= 90) {
    document.getElementById("result").innerHTML = "Grade: A+ (Final Exam)";
    return true;
  } else if (examType === "regular" && totalMarks >= 89 && totalMarks <= 100) {
    document.getElementById("result").innerHTML = "Grade: A+";
    return true;
  } else {
    document.getElementById("result").innerHTML = "Grade: Not A+";
    return false;
  }
}

function reset() {
  document.getElementById("examType").value = "";
  document.getElementById("totalMarks").value = "";
  document.getElementById("result").innerHTML = "";
}
