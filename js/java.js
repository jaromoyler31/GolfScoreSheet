 let api_golf = "https://golf-courses-api.herokuapp.com/courses/"
 let y = 1

let golf_courses =[]
let player1_score =[]
let player2_score =[]
let player3_score =[]
let player4_score =[]

 fetch(api_golf)
 .then(response=> response.json())
 .then(result =>{
   golf_courses = Object.values(result)[0]
    bob(golf_courses)
 })


function bob(data){

    //section selector
    golf_courses= data

    

    for(i= 0; i<golf_courses.length; i++){
        let x = i+1
        document.querySelector(".golf"+x).textContent = golf_courses[i].name + " " + golf_courses[i].id
    }
    

}

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