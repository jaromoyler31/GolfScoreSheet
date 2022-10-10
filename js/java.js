 let api_golf = "https://golf-courses-api.herokuapp.com/courses/"


let golf_courses =[]

 fetch(api_golf)
 .then(response=> response.json())
 .then(result =>{
   golf_courses = Object.values(result)[0]
    bob(golf_courses)
 })


function bob(data){

    
    
    
    //add player
    let adding = document.querySelector(".add").value

    if(adding = ""){
        alert("add Player Name Is Empty")
    }else{
        
    }


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

