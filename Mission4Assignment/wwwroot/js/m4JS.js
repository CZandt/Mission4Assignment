
$('#calculateGrade').click(function () {

    let inputValidation;
    inputValidation = true;

    let assignments = parseFloat($('#assignments').val());

    let quizzes = parseFloat($('#quizzes').val());

    let groupProjects = parseFloat($('#groupProjects').val());

    let intex = parseFloat($('#intex').val());

    let exam = parseFloat($('#exams').val());

    let finalGrade;
    // performs the math and gets the final grade
    finalGrade = (((assignments / 100) * 0.5) + ((quizzes / 100) * 0.1) + ((groupProjects / 100) * 0.1) + ((intex / 100) * 0.1) + ((exam / 100) * 0.2)) * 100;

    

    // determines what letter grade a person gets based on the final grade variable
    // Mission 5 Changes
    if (finalGrade >= 94) {
        letterGrade = "A";
    } else if (finalGrade >= 90) {
        letterGrade = "A-";
    } else if (finalGrade >= 87) {
        letterGrade = "B+";
    } else if (finalGrade >= 84) {
        letterGrade = "B";
    } else if (finalGrade >= 80) {
        letterGrade = "B-";
    } else if (finalGrade >= 77) {
        letterGrade = "C+";
    } else if (finalGrade >= 74) {
        letterGrade = "C";
    } else if (finalGrade >= 70) {
        letterGrade = "C-";
    } else if (finalGrade >= 68) {
        letterGrade = "D+";
    } else if (finalGrade >= 64) {
        letterGrade = "D";
    } else if (finalGrade >= 60) {
        letterGrade = "D-";
    } else {
        letterGrade = "E";
    }
    $('#finalGrade').html(letterGrade);

    alert("Final Grade: " + letterGrade);
})
// displays the final grade on load
