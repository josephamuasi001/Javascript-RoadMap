//const studyHours = 1;

//if(studyHours >= 2) {
//  console.log("Good study progress")
//} else {
//    console.log("You need to study more.")
//}


// function calculatStudyTime(morning, evening) {
//     return morning + evening;
// };

// result = calculatStudyTime(3, 2);

// console.log(result);


// const myTask = {
//     id: 1,
//     title: "Study JavaScript",
//     subject: "DCIT323",
//     duration: 2,
//     completed: false, 
// };

// console.log(myTask.subject);

// myTask.completed = true;

// console.log(myTask.completed);


// const numbers = [1, 2, 3, 4,];

// const tripledNumber = numbers.map(function(number) {
//     return number * 3;
// });

// console.log(tripledNumber);

// const ages = [12, 18, 25, 15, 30, 16, 40];

// const adultAges = ages.filter(function(age) {
//     return age >= 18;
// });

// console.log(adultAges);


// const tasks = [
//     { title: "Study JavaScript", completed: true },
//     { title: "Solve Math359", completed: false },
//     { title: "Read Computer Networks", completed: true },
//     { title: "Practice PHP", completed: false }
// ];

// const completedTasks = tasks.filter(function(task) {
//     return task.completed === true;
// });

// console.log(completedTasks);

// const prices = [10, 20, 30, 40];

// const totalPrice = prices.reduce(function(total, price) {
//     return total + price;
// }, 0);

// console.log(totalPrice);


const tasks = [
    { title: "JavaScript", hours: 2, completed: true },
    { title: "Math359", hours: 3, completed: false },
    { title: "PHP", hours: 1, completed: true },
    { title: "Networks", hours: 2, completed: false }
];



const completedTasks = tasks.filter(function(task) {
    return task.completed;
});

console.log(completedTasks);