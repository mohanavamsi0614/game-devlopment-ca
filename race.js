// gathering all the required Elements from html 
const dino=document.getElementById("dino")
const block=document.getElementById("block")
const ship=document.getElementById("ship")
let cont=0
const score=document.getElementById("score")

// adding sounds for the game

const sound1=new Audio("./assets/die.wav")
const sound=new Audio("./assets/running.mp3")
sound.loop=true
sound.play()
// onclicking a button giveing animation for the dinosare
addEventListener("keydown",()=>{
    dino.classList.add("animate");
    // removing the animation 
        setTimeout(function(){
            dino.classList.remove("animate");
        },400);
    } )
    
// checking the points it reached to 500 or not 

const point=setInterval(()=>{
     if (cont>=500){
        clearInterval(point)
        block.style.display="none"
        ship.style.display="block" //displaying the ship 
        sound.pause()
        ship.style.width=50
        clearTimeout(inter)
        clearInterval(point)
     }   
    cont++
    score.innerHTML=cont
},20)

//Checking for the collision  

function check(){
    if (block.getBoundingClientRect().left<=dino.getBoundingClientRect().left && dino.getBoundingClientRect().top>=330){
        block.style.animation="none"
        cont=0
        score.innerHTML=cont
        sound.pause()
        sound1.play()
        sound.play()
        document.getElementById("ground").innerHTML=`<img src='./assets/ro.png' alt=''>`
        setTimeout(()=>{
        location.reload("./race.html")},700)
    }
}
const inter=setInterval(check,30)

// genarating random character's in the game
setInterval(()=>{
    let random=Math.ceil(Math.random()*3)
    block.innerHTML="<img src='./assets/block"+random+".png' alt='' height='100%'>"
},4000)
//onclicking the ship redirecting to level-2(space war)
ship.addEventListener("click",()=>{
    location.replace("./space.html")
})

const speaker=document.getElementById("speaker")
let mute=false
// giving a feature to play and stop the music
speaker.addEventListener("click",()=>{
if (!mute){
    sound.pause()
    mute=true
}
else{
    sound.play()
    mute=false
}})
