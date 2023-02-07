using System;
using System.ComponentModel.DataAnnotations;

namespace Mission4Assignment.Models
{
    public class gradeCalcModel
    {
        // Initializes all grade category variables
        // Initializes getters and setter as well
        [Required(ErrorMessage = "Assignment Grade is Required")]
        [Range(0, 100, ErrorMessage = "Assignment Grade must be between 0 and 100")]
        public double assignmentsGrade { get; set; }

        [Required(ErrorMessage = "Quiz Grade is Required")]
        [Range(0, 100, ErrorMessage = "Quiz Grade must be between 0 and 100")]
        public double quizzesGrade { get; set; }

        [Required(ErrorMessage = "Group Project Grade is Required")]
        [Range(0, 100, ErrorMessage = "Group Project Grade must be between 0 and 100")]
        public double groupProjectsGrade { get; set; }

        [Required(ErrorMessage = "Intex Grade is Required")]
        [Range(0, 100, ErrorMessage = "Intex Grade must be between 0 and 100")]
        public double intexGrade { get; set; }

        [Required(ErrorMessage = "Exam Grade is Required")]
        [Range(0, 100, ErrorMessage = "Exams Grade must be between 0 and 100")]
        public double examsGrade { get; set; }

    }
}

