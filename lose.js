document.querySelector(".message").innerHTML=`You Lost ${localStorage.getItem("name")}`
    const button=document.getElementById("green")
    button.addEventListener("click",()=>{
        location.replace("./index.html")
    })
    let sound=new Audio("./assets/jurassic_world.mp3")
    sound.loop=true
    sound.play()
    document.getElementById("title").innerHTML=`Hey ${localStorage.getItem("nick")} You Lost :(`

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