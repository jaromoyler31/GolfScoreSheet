let api_golf = "https://golf-courses-api.herokuapp.com/courses/"

let e = document.querySelector(".form-control")
let y = 1
let a = 0


let selected_golf = false;
let golf_courses =[]
let golf_par =[]
let player1_score =[]
let player2_score =[]
let player3_score =[]
let player4_score =[]

let bluring = document.querySelectorAll(".blur")
bluring.forEach(bl =>{
    bl.style.opacity ="0.5"
})

for(i = 0 ; i<6 ; i++){
    let bluring = document.querySelectorAll(".blur"+i)
    bluring.forEach(bl =>{
        bl.style.opacity ="0.5"
    })
}


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
        selected_golf = true
        for(i=1; i<19;i++){
            
            document.querySelector(".par"+i).textContent = "par " + data.holes[x].teeBoxes[0].par
            golf_par[i-1] =data.holes[x].teeBoxes[0].par
            x++
            q=1
        }
    }
    if (a ==19002){
        selected_golf = true
        for(i=1; i<19;i++){
            
            document.querySelector(".par"+i).textContent = "par " + data.holes[x].teeBoxes[0].par
            golf_par[i-1] =data.holes[x].teeBoxes[0].par
            x++
            q=1
        }
    }
    
    if (a ==18300){
        selected_golf = true
        for(i=1; i<19;i++){

            document.querySelector(".par"+i).textContent = "par " + data.holes[x].teeBoxes[0].par
            golf_par[i-1] =data.holes[x].teeBoxes[0].par
            x++
            q=1
        }
    }
    if (a == 0){
        selected_golf = false
        for(i=1; i<19;i++){

            document.querySelector(".par"+i).textContent = "par "
            golf_par[i-1] =data.holes[x].teeBoxes[0].par
            x++
            q=1
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
    let nameblur = document.querySelector(".player"+y)
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
        nameblur.style.opacity ="1"
        let bluring = document.querySelectorAll(".blur"+y)
        bluring.forEach(bl =>{
            bl.style.opacity ="1"
            bl.contentEditable = true
        })

        document.querySelector(".player"+y).contentEditable = true;
        document.querySelector(".total").contentEditable = false;
    
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


let row_number
let col_number
function myFunction(x) {
    row_number =x.rowIndex;
    
    
}
function myFunction1(x) {
    col_number = x.cellIndex;
    
}


let div = document.querySelectorAll(".blur")

div.forEach(div =>{
 
    
    div.addEventListener("blur", ()=> {
        
        if( selected_golf == false){
            alert("Plz Select a Golf Course")
            div.textContent = "# of Hits"
        
        }
        else if(Number.isInteger(Number(div.textContent)) == false){
            div.textContent = "# of Hits"
            alert("Plz Put in Whole Number!!!!!")
            
        }else{
            let total = div.textContent - golf_par[row_number-1]
            div.contentEditable = false;
            if(total>= 0){
                
                div.textContent = "+"+total
                if(col_number==1){
                    player1_score[row_number-1] = total
                }else if(col_number==2){
                    player2_score[row_number-1] = total
                }else if(col_number==3){
                    player3_score[row_number-1] = total
                }else if(col_number==4){
                    player4_score[row_number-1] = total
                }
            }else{
                div.textContent = total
                if(col_number==1){
                    player1_score[row_number-1] = total
                }else if(col_number==2){
                    player2_score[row_number-1] = total
                }else if(col_number==3){
                    player3_score[row_number-1] = total
                }else if(col_number==4){
                    player4_score[row_number-1] = total
                }
            }
            
            
        }
    })
})
