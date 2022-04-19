var isAuthenticated = false;
var result = isAuthenticated ? console.log("User is Authenticated") : console.log("Not authenticated user");
console.log(result);

var usertype = "admin";
console.log("Tyoe of User " + usertype);

switch (usertype) {
    case "admin":
        console.log("Admin Role...");
        break;
    case "user":
        console.log("User Role...");
    break;

    default:
        console.log("No Access...");
        break;
}

var user =null;
console.log(typeof user);

if (user) {
    console.log("value store in user var....");
}

var compare = 2;
if (compare === 2) {
    console.log("Both are Same");
}

function sayHello(name) {
    console.log("Hello there,Runval");
    console.log("Hello there,",name);
}
sayHello();//call a function 
sayHello;//refer a function 
sayHello("Roshan");

var getUserRole = function(name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin and has all access`
            //once value return then never wont be execute...
          //  break;
        case "subadmin":
            return `${name} is subadmin`
         //   break;
        case "user":
            return `${name} is only user`;

        default:
            return `${name} is trial user`;
    }
}

console.log(getUserRole("roshan"));
console.log(typeof getUserRole);

var states = new Array("Maharashtra","Rajasthan","Goa","Punjab");
console.log(states);

states[5]="Tamilnadu";
states[4]="Assam"; 
console.log(states[4]);

function isEven(num){
    return num%2 === 0;
}
console.log(isEven(2));
console.log(isEven(3));
console.log(isEven(1001));

var numbers = [2,4,6,8,10]; 
var result = numbers.every((e)=> e % 3 == 0 );
console.log(result);

let myStates = [
    "Maharashtra",
    "Goa",
    "Gujrat",
    1947,
    "Delhi",
];

for(let i = 0; i < myStates.length ; i++){
    if(typeof myStates[i] !== "string") continue;
    console.log(myStates[i]);
}
let user={
    courseType : "offline",
    courseid : "C101",
    courseList : [],
    getcourseList : function (){
        return `Total  ${this.courseList.length} Enrolled course `;
    },
    setcourseList : function(name){
        this.courseList.push(name)
    },
};

console.log(user.getcourseList());
user.setcourseList("React JS Course");
user.setcourseList("Angular JS Course");
console.log(typeof user.courseList);
console.log(user.getcourseList());
console.log(this);
let user = {
    firstName : "Runval",
    lastName : "Borse",
    sayHello : function(){
        console.log(`Line no 113`,this);
        function hello(){
            console.log("This is line no 115",this);
        } hello()
    }
}

user.sayHello();

var number = document.querySelector("h1");
var title = document.querySelector("h2");
var modal = document.getElementById("modal");
var count = 0;
setInterval(() => {
    if(count < 1000)
    {
        count++;
        number.innerText = count;
    }
},10);

setTimeout(()=>{
    modal.style.display="block";
},5000);

var User = function (fname,count) {
    this.firstName = fname,
    this.courseCount = count,
    this.getCourseCount = function(){
        console.log(`The Total Course Count is ${this.courseCount}`);
    }
};

User.prototype.getName = function(){
    console.log(`The name is :${this.firstName}`);
}
var runval = new User("Runval",3);
runval.getCourseCount();
runval.getName();


var sam = new User("Sam",2);
sam.getCourseCount();
sam.getName();

( function (){
    console.log(`This is self executing anonymous function!`);
})();

function init(){
    var fname = "Runval";
    function showname(){
        console.log(fname);
    }
    showname();
}

init();
console.log("fname");

CLOSURES INVOLVEMENT
function doAddition(x){
    return function(y){
        return function (z){
        return x + y + z;
        }
    }
}

console.log(doAddition(5)(7)(1));

// const user = {
//     name : "Runval",
// }

 const courses = [
    { 
         courseName : "LCO React Course",
         rating : "4.7"
    },
    { 
         courseName : "LCO Angular Course",
         rating : "4.3"
    },
    { 
         courseName : "LCO C++ Course",
         rating : "4.0"
    },
    { 
         courseName : "LCO Django Course",
         rating : "3.8"
    },
    { 
         courseName : "LCO Redux Course",
         rating : "4.4"
    },
];

console.log(courses); 



function generateList(){
    const ul = document.querySelector(".course-list");
    ul.innerHTML="";

    courses.forEach( (course) => {

        const li = document.createElement("li");
        const name = document.createTextNode(course.courseName);
        li.appendChild(name);

        const span = document.createElement("span");
        const rating = document.createTextNode("$"+course.rating);
        span.appendChild(rating);

        li.appendChild(span);
        ul.appendChild(li);
     })
}

window.addEventListener("load",generateList());

const btn = document.querySelector(".sort-courses");
btn.addEventListener("click",()=>{
    courses.sort((a,b)=>a.rating - b.rating)
    generateList();
})


//Scope {} in js 
var name = "runval";
if(true){
     const lastname = "Borse"
}
console.log(lastname);

var myMap = new Map();
console.log(myMap);

myMap.set("Company","OYO");
myMap.set("Org","Amazon");

console.log(myMap);

for(let key of myMap.keys()){
     console.log(key);
}
for(let value of myMap.values()){
     console.log(value);
}
for(let [key,value] of myMap){
     console.log(`${key} => ${value}`);
}

myMap.forEach((v)=>{
     console.log(`${v}`);
});

var user = {
     name : "Roshan",
     age : 26
};

console.log(user.age);

var {name,age} = user;
console.log(age);
// Rest and Spread Operator


// Classes and object in js
 class User {
     constructor(name,email){
          this.name = name;
          this.email = email;
     }
    #courseList = [];
    getInfo(){
         return {name : this.name , email : this.email};
    }
    enrollCourse(name){
         this.#courseList.push(name);
    }
    getCourseList(){
         return this.#courseList;
    }
}

module.exports = User; 

const rock = new User("Dwyane","rock@gmail.com");
console.log(rock.getInfo());
rock.enrollCourse("Rect");
console.log(rock.getCourseList()); 
fetch("https://api.chucknorris.io/jokes/random")
.then((response)=>{
     return response.json(); 
})
.then((data)=>{
     console.log(data.value);
})
.catch();

let user = new Array();
console.log(user);