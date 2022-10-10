 let api_golf = "https://golf-courses-api.herokuapp.com/courses/"
 let y = 1

let golf_courses =[]

 fetch(api_golf)
 .then(response=> response.json())
 .then(result =>{
   golf_courses = Object.values(result)[0]
    bob(golf_courses)
 })


function bob(data){

    //section selector
    golf_courses= data
    console.log(golf_courses)
    

    for(i= 0; i<golf_courses.length; i++){
        let x = i+1
        document.querySelector(".golf"+x).textContent = golf_courses[i].name + " " + golf_courses[i].id
    }
    
    console.log(golf_courses[0].name + " " + golf_courses[0].id)


    //table
    













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
        }
        
        console.log(y)
        if (adding.length > 10){
            document.querySelector(".player"+y).textContent = adding.slice(0,8)+"...";
        }else{
            document.querySelector(".player"+y).textContent = adding
        }
        y =y+1
    }

}