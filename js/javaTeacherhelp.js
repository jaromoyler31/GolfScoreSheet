let api_golf = "https://golf-courses-api.herokuapp.com/courses/"
let api_golf11819 = "https://golf-courses-api.herokuapp.com/courses/11819"
let y = 1
let a = 11819
let golf_courses =[]
let player1_score =[]
let player2_score =[]
let player3_score =[]
let player4_score =[]


async function fetchGolfCourse(id) {
   return await fetch(`https://golf-courses-api.herokuapp.com/courses/${id}`)
       .then(response => response.json())
       .then(data => data.data)
}


async function fetchAllGolfCourses() {
   return await fetch(api_golf)
   .then(response=> response.json())
   .then(data => data.courses)
}

async function renderAllGolfCoursesDropDown(golf_courses) {
   for(i= 0; i<golf_courses.length; i++){
       let x = i+1
       const { name, id } = golf_courses[i];
       const optionElement = document.querySelector(".golf"+x);
       optionElement.setAttribute('data-golf-course-id', id);
       optionElement.textContent = name + " " + id
   }
}

async function renderGolfCourse(id) {
   const golfCourse = await fetchGolfCourse(id);
   
   for(i=0; i<19;i++){
       const querySelector= `.par${i + 1}`
       const par = getParForHole(golfCourse, i, 'champion')
       document.querySelector(querySelector).textContent = "par " + par
   }
}

async function initializePage() {
   const allGolfCourses = await fetchAllGolfCourses();
   const idToStartWith = allGolfCourses[0].id
   await renderAllGolfCoursesDropDown(allGolfCourses);
   await renderGolfCourse(idToStartWith)
}

function getParForHole(golfCourse, holeNumber, teeType) {
   const teepObject = golfCourse.holes[holeNumber].teeBoxes[0]
   return teepObject.par;
}

initializePage();





// fetch(api_golf)
// .then(response=> response.json())
// .then(result =>{
//     golf_courses = Object.values(result)[0]
//     bob(golf_courses)
// })

// function par11819(data){
//     console.log(data)
//     let x = 0

// }

function clickFunction(){
   //add player
   let adding = document.querySelector(".add").value
   var isEmpty = adding.length == 0;
   
   if(isEmpty){
       alert("Add Player Name Is Empty")
   }else{
       document.querySelector(".add").value = ""
       
       if (y>4){
           alert("You already have four players")
           return y
       }
       
       console.log(y)
       if (adding.length > 10){
           document.querySelector(".player"+y).textContent = adding.slice(0,7)+"...";
       }else{
           document.querySelector(".player"+y).textContent = adding
       }
       y =y+1
   }

}