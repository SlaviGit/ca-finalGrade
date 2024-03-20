const finalGrade = (grade1, grade2, grade3) => {
  if (grade1 < 0 || grade1 > 100 || grade2 < 0 || grade2 > 100 || grade3 < 0 || grade3 > 100) {
    return 'You have entered an invalid grade.'
  }
  let average = (grade1 + grade2 + grade3) / 3
  if (average < 60) {
   return 'F'
  } else if (average < 69) {
    return 'D'
  } else if (average < 79) {
    return 'C'
  } else if (average < 89) {
    return 'B'
  } else if (average < 100) {
    return 'A'
  }
}

console.log(finalGrade(48, 92, 95)) // Should print 'C'
