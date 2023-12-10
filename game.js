const random =Math.random()
let computer ="";
let point = 0
const scores = {
    win:0,
    lost:0,
    draw:0,
}

// onclick of rock play function
function rock() {
    // players play
    document.getElementById("playerplay").innerHTML += "rock✊"
    // computer plays
    if (random>0 && random<=1/3) {
    computer = "rock✊" 
    document.getElementById("computerplay").innerHTML += computer 

    }
    else if (random>=1/3 && random<=2/3){
computer = "paper🫱"
    document.getElementById("computerplay").innerHTML += computer 
    }
    else if (random>=2/3 && random<=3/3){
computer = "scissor✌️"
        
        document.getElementById("computerplay").innerHTML += computer 
    }
     else{
         console.log('invalid oooops!!')
     }
    console.log(computer);

 // decision in gameplay

    if (computer==="rock✊") {
        
        point="draw🟰"
        document.getElementById("points").innerHTML += point
    }
    
    else if (computer==="paper🫱") {
        point="lost❌"
        document.getElementById("points").innerHTML += point
        console.log(point)
    }
    
    else if (computer==="scissor✌️") {
        point="win✔️"
        document.getElementById("points").innerHTML += point
    console.log(point)}
    else{
        point = "invalid oooops!";
      
       console.log(point)
    }

    
}

// onclick of paper plays function
function paper() {
    // players play
    document.getElementById("playerplay").innerHTML += "paper🫱"
    // computer play
    if (random>0 && random<=1/3) {
    computer = "rock✊" 
        document.getElementById("computerplay").innerHTML += computer
    }
    else if (random>=1/3 && random<=2/3){
computer = "paper🫱"
document.getElementById("computerplay").innerHTML += computer

       
    }
    else if (random>=2/3 && random<=3/3){
computer = "scissor✌️"
document.getElementById("computerplay").innerHTML += computer
        
    }
     else{
         console.log('invalid oooops!!')
     }
// decison on paper function

    if (computer==="rock✊") {
        point = "win✔️";
        document.getElementById("points").innerHTML += point
        console.log(point)
    }
    
    else if (computer==="scissor✌️") {
        point = "lost❌";
        document.getElementById("points").innerHTML += point
        console.log(point)
    }
    
    else if (computer==="paper🫱") {
        point = "draw🟰";
        document.getElementById("points").innerHTML += point
    console.log(point)}
    else{
        result = "invalid oooops!";
        console.log(result);
       
    }

    

    
}
// onclick of scissor play function
function scissor() {
    // players play
    document.getElementById("playerplay").innerHTML += "scissor✌️" 
    // computer play
    if (random>0 && random<=1/3) {
    computer = "rock✊" 
    document.getElementById("computerplay").innerHTML += computer
    }
    else if (random>=1/3 && random<=2/3){
computer = "paper"
document.getElementById("computerplay").innerHTML += computer   
    }
    else if (random>=2/3 && random<=3/3){
computer = "scissor✌️"
document.getElementById("computerplay").innerHTML += computer
    }
     else{
         console.log('invalid oooops!!')
     }
    console.log(computer);

// decision on scissor function
    if (computer==="rock✊") {
        point = "lost❌";
         document.getElementById("points").innerHTML += point
        console.log(point)
    }
    
    else if (computer==="paper") {
        point = "win✔️";
         document.getElementById("points").innerHTML += point
      console.log(point)
        
    }
    
    else if (computer==="scissor✌️") {
        point = "draw🟰";
         document.getElementById("points").innerHTML += point
        console.log(point)
    }
    else{
        result = "invalid oooops!";
       
    }
    
}
