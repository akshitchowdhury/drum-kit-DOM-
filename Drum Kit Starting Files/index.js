
// document.querySelector("button").addEventListener("click", onclick)



// document.getElementsByTagName("button")[1].addEventListener("click", onclick)


// document.getElementsByTagName("button")[2].addEventListener("click", onclick)



// document.getElementsByTagName("button")[3].addEventListener("click", onclick)


// document.getElementsByTagName("button")[4].addEventListener("click", onclick)


// document.getElementsByTagName("button")[5].addEventListener("click", onclick)


// document.getElementsByTagName("button")[6].addEventListener("click", onclick)


// function onclick(){
    
// }


for(var i=0; i< document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

            let keyelem = this.innerHTML;


            makeSound(keyelem)
            
        
    })


    // document.addEventListener("keydown", function(){

    //     alert("key pressed")
    // })

document.addEventListener("keydown",function(event){

    makeSound(event.key)
})

function makeSound(key){

    switch (key) {
        case "w": 
    let tom1 = new Audio("./sounds/tom-1.mp3");
    tom1.play()
            
            break;
    
    case "a":
        
    let tom2 = new Audio("./sounds/tom-2.mp3");
    tom2.play() 
    break;
    
    
    case "s":
        
    let tom3 = new Audio("./sounds/tom-3.mp3");
    tom3.play() 
    break;
    
    
    case "d":
        
    let tom4 = new Audio("./sounds/tom-4.mp3");
    tom4.play() 
    break;
    
    
    case "j":
        
    let snare = new Audio("./sounds/snare.mp3");
    snare.play() 
    break;
    
    
    case "k":
        
    let crash = new Audio("./sounds/crash.mp3");
    crash.play() 
    break;
    
    
    case "l":
        
    let kick = new Audio("./sounds/kick-bass.mp3");
    kick.play() 
    break;
    }
    


    
}

}
