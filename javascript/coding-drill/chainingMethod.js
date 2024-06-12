/**
 * Return Array of Names From An Object - Chaining Methods
 * Create an array of names of senior employees
 */

const employees = [
    {
        name: "Munish",
        numOfYears: 1
    },
    {
        name: "Dinesh",
        numOfYears: 6
    },
    {
        name: "Nisha",
        numOfYears: 2
    },
    {
        name: "Rudra",
        numOfYears: 8
    },
    {
        name: "Kamlesh",
        numOfYears: 10
    },
    {
        name: "Ram Dayal",
        numOfYears: 15
    }
]

const result = employees.filter((employee) => {
    let result2 = employee.numOfYears > 3;
    return result2
});

console.log(result);