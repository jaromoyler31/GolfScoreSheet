let api_golf = "https://golf-courses-api.herokuapp.com/courses/"
let hide = document.querySelector(".hide")
let hide1 = document.querySelector(".hide1")
let infoHide = document.querySelector(".info-hide")
hide.style.display ="block"
hide1.style.display ="none"
infoHide.style.display ="none"
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
let player1_total = 0
let player2_total = 0
let player3_total = 0
let player4_total = 0
let bluring1 = document.querySelectorAll(".blur"+y)
let bluring = document.querySelectorAll(".blur")
let images_good = ["https://giphy.com/embed/jhU0K8mYDY8OmFAxji"]
let images_bad = ["https://giphy.com/embed/26ufdYUTT5QOIF8pq"]

// let image = document.getElementById('image');
//     setInterval(function(){
//             let random = Math.floor(Math.random()* 4);
//             image.src = images[random];
//     } ,2000);


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
            
            hide.style.display ="none"
            hide1.style.display ="block"

            document.querySelector(".tittle-text").textContent = data.name
            
        }
    }
    if (a ==19002){
        selected_golf = true
        for(i=1; i<19;i++){
            
            document.querySelector(".par"+i).textContent = "par " + data.holes[x].teeBoxes[0].par
            golf_par[i-1] =data.holes[x].teeBoxes[0].par
            x++
            q=1
            
            hide.style.display ="none"
            hide1.style.display ="block"

            document.querySelector(".tittle-text").textContent = data.name

        }
    }
    
    if (a ==18300){
        selected_golf = true
        for(i=1; i<19;i++){
            document.querySelector(".par"+i).textContent = "par " + data.holes[x].teeBoxes[0].par
            golf_par[i-1] =data.holes[x].teeBoxes[0].par
            x++
            q=1
            
            
            hide.style.display ="none"
            hide1.style.display ="block"

            document.querySelector(".tittle-text").textContent = data.name

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
        toastr.error("Add Player NAme Is Empty", "Error")
        
    }else{
        document.querySelector(".add").value = ""
        
        if (y>4){
            toastr.error("You Already Have 4 Players", "Error")

            
            return y
        }
        
        if (adding.length > 10){
            

            document.querySelector(".player"+y).textContent = adding.slice(0,7)+"...";
        }else{
            
            document.querySelector(".player"+y).textContent = adding
        }

        nameblur.style.opacity ="1"
        bluring1 = document.querySelectorAll(".blur"+y)
        bluring1.forEach(bl =>{
            bl.style.opacity ="1"
            bl.contentEditable = true
        })
        toastr.success("Welcome " + adding , "New Player Joined")
        document.querySelector(".player"+y).contentEditable = true;
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
            info(result.data)
            console.log(result.data)
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
            toastr.error("Plz Select a Golf Course", "Error")
            div.textContent = "# of Hits"
        
        }
        else if(Number.isInteger(Number(div.textContent)) == false){
            div.textContent = "# of Hits"
            toastr.error("Plz Put in Whole Number!!!!!", "Error")
        }else{
            let total = Number(div.textContent - golf_par[row_number-1])
            div.contentEditable = false;
            if(total>= 0){
                
                div.textContent = "+"+total

                if(col_number==1){
                    player1_score[row_number-1] = total
                    player1_total += total
                    if(player1_total>= 0){
                        document.querySelector(".total1").textContent = "+"+player1_total
                    }else{
                        document.querySelector(".total1").textContent = player1_total

                    }
                }else if(col_number==2){
                    player2_score[row_number-1] = total
                    player2_total += total
                    if(player2_total>= 0){
                        document.querySelector(".total2").textContent = "+"+player2_total
                    }else{
                        document.querySelector(".total2").textContent = player2_total

                    }
                }else if(col_number==3){
                    player3_score[row_number-1] = total
                    player3_total += total
                    if(player3_total>= 0){
                        document.querySelector(".total3").textContent = "+"+player3_total
                    }else{
                        document.querySelector(".total3").textContent = player3_total

                    }
                }else if(col_number==4){
                    player4_score[row_number-1] = total
                    player4_total += total
                    if(player4_total>= 0){
                        document.querySelector(".total4").textContent = "+"+player4_total
                    }else{
                        document.querySelector(".total4").textContent = player4_total

                    }
                }

                toastr.info("We Know you Can Do Better then That", "Listen to the Computer")

            }else{
                div.textContent = total
                
                if(col_number==1){
                    player1_score[row_number-1] = total
                    player1_total += total
                    if(player1_total>= 0){
                        document.querySelector(".total1").textContent = "+"+player1_total
                    }else{
                        document.querySelector(".total1").textContent = player1_total

                    }
                }else if(col_number==2){
                    player2_score[row_number-1] = total
                    player2_total += total
                    if(player2_total>= 0){
                        document.querySelector(".total2").textContent = "+"+player2_total
                    }else{
                        document.querySelector(".total2").textContent = player2_total

                    }
                }else if(col_number==3){
                    player3_score[row_number-1] = total
                    player3_total += total
                    if(player3_total>= 0){
                        document.querySelector(".total3").textContent = "+"+player3_total
                    }else{
                        document.querySelector(".total3").textContent = player3_total

                    }
                }else if(col_number==4){
                    player4_score[row_number-1] = total
                    player4_total += total
                    if(player4_total>= 0){
                        document.querySelector(".total4").textContent = "+"+player4_total
                    }else{
                        document.querySelector(".total4").textContent = player4_total

                    }
                }
                toastr.success("Nice Hit", "Good Job")


            }
            
            
        }
    })
})

function info(data){

    document.querySelector(".name").textContent = data.name
    document.querySelector(".number").textContent = data.phone
    document.querySelector(".place").textContent = data.country +" "+ data.city
    document.querySelector(".hole1").textContent = "Hole 1: " + "par " + data.holes[0].teeBoxes[0].par + ", Yards: "+ data.holes[0].teeBoxes[0].yards+", Handicap: " + data.holes[0].teeBoxes[0].hcp
    document.querySelector(".hole2").textContent = "Hole 2: " + "par " + data.holes[1].teeBoxes[0].par + ", Yards: "+ data.holes[1].teeBoxes[0].yards+", Handicap: " + data.holes[1].teeBoxes[0].hcp
    document.querySelector(".hole3").textContent = "Hole 3: " + "par " + data.holes[2].teeBoxes[0].par + ", Yards: "+ data.holes[2].teeBoxes[0].yards+", Handicap: " + data.holes[2].teeBoxes[0].hcp
    document.querySelector(".hole4").textContent = "Hole 4: " + "par " + data.holes[3].teeBoxes[0].par + ", Yards: "+ data.holes[3].teeBoxes[0].yards+", Handicap: " + data.holes[3].teeBoxes[0].hcp
    document.querySelector(".hole5").textContent = "Hole 5: " + "par " + data.holes[4].teeBoxes[0].par + ", Yards: "+ data.holes[4].teeBoxes[0].yards+", Handicap: " + data.holes[4].teeBoxes[0].hcp
    document.querySelector(".hole6").textContent = "Hole 6: " + "par " + data.holes[5].teeBoxes[0].par + ", Yards: "+ data.holes[5].teeBoxes[0].yards+", Handicap: " + data.holes[5].teeBoxes[0].hcp
    document.querySelector(".hole7").textContent = "Hole 7: " + "par " + data.holes[6].teeBoxes[0].par + ", Yards: "+ data.holes[6].teeBoxes[0].yards+", Handicap: " + data.holes[6].teeBoxes[0].hcp
    document.querySelector(".hole8").textContent = "Hole 8: " + "par " + data.holes[7].teeBoxes[0].par + ", Yards: "+ data.holes[7].teeBoxes[0].yards+", Handicap: " + data.holes[7].teeBoxes[0].hcp
    document.querySelector(".hole9").textContent = "Hole 9: " + "par " + data.holes[8].teeBoxes[0].par + ", Yards: "+ data.holes[8].teeBoxes[0].yards+", Handicap: " + data.holes[8].teeBoxes[0].hcp
    document.querySelector(".hole10").textContent = "Hole 10: " + "par " + data.holes[9].teeBoxes[0].par + ", Yards: "+ data.holes[9].teeBoxes[0].yards+", Handicap: " + data.holes[9].teeBoxes[0].hcp
    document.querySelector(".hole11").textContent = "Hole 11: " + "par " + data.holes[10].teeBoxes[0].par + ", Yards: "+ data.holes[10].teeBoxes[0].yards+", Handicap: " + data.holes[10].teeBoxes[0].hcp
    document.querySelector(".hole12").textContent = "Hole 12: " + "par " + data.holes[11].teeBoxes[0].par + ", Yards: "+ data.holes[11].teeBoxes[0].yards+", Handicap: " + data.holes[11].teeBoxes[0].hcp
    document.querySelector(".hole13").textContent = "Hole 13: " + "par " + data.holes[12].teeBoxes[0].par + ", Yards: "+ data.holes[12].teeBoxes[0].yards+", Handicap: " + data.holes[12].teeBoxes[0].hcp
    document.querySelector(".hole14").textContent = "Hole 14: " + "par " + data.holes[13].teeBoxes[0].par + ", Yards: "+ data.holes[13].teeBoxes[0].yards+", Handicap: " + data.holes[13].teeBoxes[0].hcp
    document.querySelector(".hole15").textContent = "Hole 15: " + "par " + data.holes[14].teeBoxes[0].par + ", Yards: "+ data.holes[14].teeBoxes[0].yards+", Handicap: " + data.holes[14].teeBoxes[0].hcp
    document.querySelector(".hole16").textContent = "Hole 16: " + "par " + data.holes[15].teeBoxes[0].par + ", Yards: "+ data.holes[15].teeBoxes[0].yards+", Handicap: " + data.holes[15].teeBoxes[0].hcp
    document.querySelector(".hole17").textContent = "Hole 17: " + "par " + data.holes[16].teeBoxes[0].par + ", Yards: "+ data.holes[16].teeBoxes[0].yards+", Handicap: " + data.holes[16].teeBoxes[0].hcp
    document.querySelector(".hole18").textContent = "Hole 18: " + "par " + data.holes[17].teeBoxes[0].par + ", Yards: "+ data.holes[17].teeBoxes[0].yards+", Handicap: " + data.holes[17].teeBoxes[0].hcp




}

function info_show(){
    infoHide.style.display ="block"
    
}

function info_hide(){
    infoHide.style.display ="none"

}