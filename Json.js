console.log("I love u Kunu");

const myName = {
    id:1,
    fName:"Satya",
    mName: "Narayan",
    lName: "Rout",
    fullName: "Satyanarayan Rout",
    age: 29,
    isStudent: false,
    greet: function(){
        console.log(`Hey my name is ${student.identity} & my name is ${student.fullName}`);
    }

};

let jsonData = JSON.stringify(myName)
console.log(jsonData);
let parseObject = JSON.parse(jsonData);
console.log(parseObject);

// let parseData = JSON.parse(myName);
// console.log(parseData);