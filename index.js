let employee = {
    name: "Samson",
    streetAddress: "woodville close",
}

    function updateEmployeeWithKeyAndValue(employee,key,value){
        return {...employee,[key]:value};
    };

    function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
        employee[key] = value;
        return employee;
    }
    function deleteFromEmployeeByKey(employee, key){
        let newEmployee = {...employee};
        delete newEmployee[key];
        return newEmployee;
    }
    function destructivelyDeleteFromEmployeeByKey(employee, key){
        let newEmployee = {...employee};
        delete newEmployee[key];
        return newEmployee;
    }
      function  destructivelyDeleteEmployeeByKey(employee, key){
        delete employee[key];
        return employee;
    }
