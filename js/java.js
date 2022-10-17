let api_golf = "https://golf-courses-api.herokuapp.com/courses/"

let e = document.querySelector(".form-control")
let y = 1
let a = 0

let golf_courses =[]
let player1_score =[]
let player2_score =[]
let player3_score =[]
let player4_score =[]

let bluring = document.querySelectorAll(".blur")
bluring.forEach(bl =>{
    bl.style.opacity ="0.5"
})

let bluring1 = document.querySelectorAll(".blur1")
bluring1.forEach(bl1 =>{
    bl1.style.opacity ="0.5"

})

document.querySelector(".blur").style.opacity = "0.5"


fetch(api_golf)
.then(response=> response.json())
.then(result =>{
    golf_courses = Object.values(result)[0]
    bob(golf_courses)
})

function par(data){
    let x = 0
    let element = document.querySelectorAll(".blur")
    element.forEach(el =>{
        el.textContent = "# of Hits"
    })

    if (a ==11819){
        for(i=1; i<19;i++){
            
            document.querySelector(".par"+i).textContent = "par " + data.holes[x].teeBoxes[0].par

            x++
        }
    }
    if (a ==19002){
        for(i=1; i<19;i++){
            
            document.querySelector(".par"+i).textContent = "par " + data.holes[x].teeBoxes[0].par
            
            x++
        }
    }
    
    if (a ==18300){
        for(i=1; i<19;i++){

            document.querySelector(".par"+i).textContent = "par " + data.holes[x].teeBoxes[0].par
            
            x++
        }
    }
    if (a == 0){
        for(i=1; i<19;i++){

            document.querySelector(".par"+i).textContent = "par "
            
            x++
        }
    }
    
    
}

function bob(data){
    //section selector
    golf_courses= data
    
    for(i= 0; i<golf_courses.length; i++){
        let x = i+1
        let select = document.querySelector('.golf'+x);
        document.querySelector(".golf"+x).textContent = golf_courses[i].name + " " + golf_courses[i].id
        select.value = golf_courses[i].id
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
        
        if (adding.length > 10){
            document.querySelector(".player"+y).textContent = adding.slice(0,7)+"...";
        }else{
            document.querySelector(".player"+y).textContent = adding
        }
        y =y+1
    }

}

function getInfo(){
    let value = e.value;
    let api_golf11819 = "https://golf-courses-api.herokuapp.com/courses/"+value
    a = value
    if( a == 0 ){
        return par(0)
    } else{
        fetch(api_golf11819)
        .then(response=> response.json())
        .then(result =>{
            par(result.data)
            
        })
    }
    
}