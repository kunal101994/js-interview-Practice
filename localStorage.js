// localStorage.setItem("youtubeJsCourse", "addingData")
// localStorage.getItem("youtubeJsCourse");
// localStorage.getItem("youtubeJsCourse");

// const data = {name: "Satya", age: 30, city: "Greater Noida"};
// const jsonSting = JSON.stringify(data);
// console.log(jsonSting)

// const jsonString = '{"name":"satya","age":30, "city":"New Delhi"}';
// const parseData = JSON.parse(jsonString);
// console.log(parseData);

// const jsonString = '{"name":"Vinod","age":30,"city":"pune"}';
// const parsedData = JSON.parse(jsonString);
// console.log(parsedData);

// jsonData.stringfy

// const data = {
//     id: 1,
//     name:"satya",
//     age:30,
//     fullName: "Satyanarayan Rout",
//     edu:"MCA",
//     skills: ["HTML","CSS","JavaScript", "Reactjs", "C++", "WordPress", "PHP"],
//     hobby: {
//         first: "Playing Video Games",
//         second: "Watching Movies",
//         third: "Listening Music",
//         fourth: "Reading Books",
//         fifth: "Exercise"
//     },
//     language: {
//         fLanguage: "Odia",
//         sLanguage: "Hindi",
//         tLanguage: "English"
//     },
//     isknowEnglish: true,
// }

// const jsonSting = JSON.stringify(data);
// console.log(jsonSting);

const jsonSting = '{"id":1,"name":"satya","age":30,"fullName":"Satyanarayan Rout","edu":"MCA","skills":["HTML","CSS","JavaScript","Reactjs","C++","WordPress","PHP"],"hobby":{"first":"Playing Video Games","second":"Watching Movies","third":"Listening Music","fourth":"Reading Books","fifth":"Exercise"},"language":{"fLanguage":"Odia","sLanguage":"Hindi","tLanguage":"English"},"isknowEnglish":true}';
const parseData = JSON.parse(jsonSting);
console.log(parseData);