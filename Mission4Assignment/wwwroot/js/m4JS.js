// document.getElementById("calculateGrade").addEventListener("click", function () {
    // alert("TEST TEST TEST");
// })


$('#calculateGrade').click(function () {
    

    let assignments = parseFloat($('#assignments').val());

    let quizzes = parseFloat($('#quizzes').val());

    let groupProjects = parseFloat($('#groupProjects').val());

    let intex = parseFloat($('#intex').val());

    let exam = parseFloat($('#exams').val());

    let finalGrade;

    finalGrade = ((assignments * 0.5) + (quizzes * 0.1) + (groupProjects * 0.1) + (intex * 0.1) + (exam * 0.2)) * 100;

    let letterGrade;

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
})