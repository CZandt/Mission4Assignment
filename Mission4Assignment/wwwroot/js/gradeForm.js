$('#btnSend').click(function () {
    var assignmentGrade = Number($("#assignments").val());
    var quizGrade = Number($("#quizzes").val());
    var groupGrade = Number($("#groupProjects").val());
    var intexGrade = Number($("#intex").val());
    var examGrade = Number($("#exam").val());
    var ecGrade = Number($("$extraCredit").val());

    var assignmentWeight = 0.53;
    var quizWeight = 0.0860;
    var groupWeight = 0.0538;
    var intexWeight = 0.1075;
    var examWeight = 0.2151;

    var letterGrade = ' ';
    var finalGrade = 0;

    finalGrade = ((assignmentGrade * assignmentWeight) + (quizGrade + quizWeight) + (groupGrade + groupWeight) + (intexGrade * intexWeight) + (examGrade + examWeight) + (ecGrade));

    finalGrade = finalGrade / (assignmentWeight + quizWeight + groupWeight + intexWeight + examWeight);

    if (finalGrade >= 94) {
        letterGrade = 'A';
    }
    else if (finalGrade >= 90) {
        letterGrade = 'A-';
    }
    else if (finalGrade >= 87) {
        letterGrade = 'B+';
    }
    else if (finalGrade >= 84) {
        letterGrade = 'B';
    }
    else if (finalGrade >= 80) {
        letterGrade = 'B-';
    }
    else if (finalGrade >= 77) {
        letterGrade = 'C+';
    }
    else if (finalGrade >= 74) {
        letterGrade = 'C';
    }
    else if (finalGrade >= 70) {
        letterGrade = 'C-';
    }
    else if (finalGrade >= 67) {
        letterGrade = 'D+';
    }
    else if (finalGrade >= 64) {
        letterGrade = 'D';
    }
    else if (finalGrade >= 60) {
        letterGrade = 'D-';
    }
    else if (finalGrade >= 0{
        letterGrade = 'E';
    }

    alert(finalGrade + "| LETTER " + letterGrade);
})