
// document.querySelector("button").addEventListener("click", onclick)



// document.getElementsByTagName("button")[1].addEventListener("click", onclick)


// document.getElementsByTagName("button")[2].addEventListener("click", onclick)



// document.getElementsByTagName("button")[3].addEventListener("click", onclick)


// document.getElementsByTagName("button")[4].addEventListener("click", onclick)


// document.getElementsByTagName("button")[5].addEventListener("click", onclick)


// document.getElementsByTagName("button")[6].addEventListener("click", onclick)


function onclick(){
    
let audio = new Audio("./sounds/tom-1.mp3");
audio.play()
}


for(var i=0; i< document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

            let key = this;

            key.style.color = "white"
        
    })
}
