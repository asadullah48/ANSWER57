// Q 57
// A list of grades
let grades = [81, 84, 72, 68, 77];

// Calculates the average grade
let averageGrade =
  grades.reduce((total, grade) => total + grade, 0) / grades.length;

// Shows the average grade
console.log(averageGrade);
// First, we add up all the grades...
//Then, we divide by how many grades there are to get the average.