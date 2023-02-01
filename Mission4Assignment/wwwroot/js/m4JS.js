$('#calculateGrade').click(function () {
    
    // Grabs the values from the from
    let assignments = parseFloat($('#assignments').val());

    let quizzes = parseFloat($('#quizzes').val());

    let groupProjects = parseFloat($('#groupProjects').val());

    let intex = parseFloat($('#intex').val());

    let exam = parseFloat($('#exams').val());

    let finalGrade;
    // performs the math and gets the final grade
    finalGrade = ((assignments * 0.5) + (quizzes * 0.1) + (groupProjects * 0.1) + (intex * 0.1) + (exam * 0.2)) * 100;

    let letterGrade;

    // determines what letter grade a person gets based on the 
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

    // displays the final grade in the HTML
    $('#finalGrade').html(letterGrade);
})