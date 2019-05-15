const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

for (employee of employees) {
  console.log(employee);
}

function employeeBonus(employee) {
  let emp = {
    name: employee.name,
    bonusPercentage: percentCalc(employee) + finalBonus(employee), 
    totalCompensation: (employee.annualSalary * finalBonus(employee)) + Number(employee.annualSalary)
  }
  //clear bonus percent!
  return emp;
}

let bonusPercent = 0;

function percentCalc(employee) {
  //replace bonusPercent with local variable x
  let x = 0
  if (employee.reviewRating < 2) {
    return x;
  } else if (employee.reviewRating === 3) {
    return x + 0.04;
  } else if (employee.reviewRating === 4) {
    return x + 0.06;
  } else if (employee.reviewRating === 5){
    return x + 0.1;
  }
  //add x to bonusPercent 
  bonusPercent = bonusPercent + x; 
  
}

function finalBonus(employee) {
  if(employee.employeeNumber.length === 4){
    return bonusPercent + 0.05;
  } else if (employee.annualSalary > 65000 && bonusPercent > 0){
    return bonusPercent - 0.01;
  } else {
    return bonusPercent;
  }
  
}






console.log(employeeBonus(employees[0]));
console.log(employeeBonus(employees[1]));
console.log(employeeBonus(employees[2]));
console.log(employeeBonus(employees[3]));
