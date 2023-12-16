// gathering all the required Elements  
const dino=document.getElementById("dino")
const block=document.getElementById("block")
const ship=document.getElementById("ship")
let seconds=0
const time=document.getElementById("time")
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
})

// genarating random character's in the game
setInterval(()=>{
    let random=Math.ceil(Math.random()*2)
    block.innerHTML="<img src='./assets/block"+random+".png' alt='' height='100%'>"
},4000)

const timer=setInterval(()=>{
    if (seconds==35){
        block.style.display="none"
        ship.style.display="block" //displaying the ship 
        sound.pause()
        ship.style.width=50
        clearInterval(inter)
        clearInterval(timer)
    }
    time.innerHTML=seconds
    seconds++
},1000)
// checking the points it reached to 500 or not 


//Checking for the collision  
function check(){
    console.log(block.getBoundingClientRect().top+" "+dino.getBoundingClientRect().top )

    if (block.getBoundingClientRect().left<=dino.getBoundingClientRect().left && dino.getBoundingClientRect().top>=340){
        block.style.animation="none"
        cont=0
        score.innerHTML=cont
        clearTimeout(inter)
        sound.pause()
        sound1.play()
        document.getElementById("ground").innerHTML=`<img src='./assets/ro.png' alt=''>`
        setTimeout(()=>{
        location.reload("./race.html")},700)
    }
}
const inter=setInterval(check,0)


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
    sound1.pause()
    mute=true
}
else{
    sound.play()
    sound1.play()
    mute=false
}})
