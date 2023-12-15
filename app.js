const sound=new Audio("./assets/jurassic_world.mp3")
sound.loop=true //to Get the background music continuously
sound.play()
const button=document.querySelector("#button")
    button.addEventListener("click",()=>{
        const nn=document.getElementById("name") //getting the information from the player and storeing in the local storage
        const name=document.getElementById("Nickname")
        if (name.value!="" ||name.value!="" ){ //ensuring that player given the information 
            localStorage.setItem("name",name.value) // Givng a click event to the button to redirect the page from home to level 1(dino-run)
            location.replace("./race.html")
        }
        else{
            name.style.border="3px solid red"
            name.style.animation="moveup .3s 1"
            nn.style.border="3px solid red"
            nn.style.animation="moveup .3s 1"
        }
    })
const speaker=document.getElementById("speaker")
let mute=false
// And giving a feature to play and stop the music
speaker.addEventListener("click",()=>{
if (!mute){
    sound.pause()
    mute=true
}
else{
    sound.play()
    mute=false
}})