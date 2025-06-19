// Write your solution in this file!
let employee = {
  name:"",
  streetAddress:""
}

function updateEmployeeWithKeyAndValue(employee,key,value) {
  return {...employee,[key]:value};
}

// destructivelyUpdateEmployeeWithKeyAndValue(): this function should work the same as updateEmployeeWithKeyAndValue() but it should mutate the employee Object passed in.

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value) {
  employee[key]=value;
  return employee;
}

function deleteFromEmployeeByKey(employee,key) {
  let newEmployee = {...employee};
  // console.log(newEmployee);
  // console.log(employee);
  delete newEmployee[key];
  return newEmployee;
}

// deleteFromEmployeeByKey(employee, 'name');

function destructivelyDeleteFromEmployeeByKey(employee,key) {
  delete employee[key];
  return employee;
}