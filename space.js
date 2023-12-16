// gathering all the required Elements from html 
const dino = document.getElementById("dinoship");
const space = document.getElementById("space");
const timer=document.getElementById("time")

// giving background music for the game
const sound=new Audio("./assets/space.mp3")
const sound1=new Audio("./assets/shoot.mp3")
sound.loop=true
sound.play()

// setting the timer in the game
let t=0
setInterval(()=>{
    if (t>=60){
        location.replace("./end.html")
    }
    timer.innerHTML=t
    t++
},1000)

// creating a function to get a random number from 1 to 4
const random = () => {
  return Math.ceil(Math.random() * 4);
};

// created a fuction for genarating ship genarating random ship's in the game
addEventListener("DOMContentLoaded",()=>{
function ship() {
  const img = document.createElement("img");
  let ani=random()
  img.style.animation = `enemey${ani} 3s linear`;
  if (ani%2==0){
  img.src = `./assets/ship${random()}.png`;
  }
  else{
    img.src = `./assets/rev boat-${random()}.png`;

  }
  img.classList.add("villain");
  space.appendChild(img);

  // givening an event when we click the enemy ship to destory it
  img.onclick = () => {
    sound1.play()
    space.removeChild(img);
    ship()
  };

  check()

  // created a function for checking collision's
function check(){
    if (img.getBoundingClientRect().top>=dino.getBoundingClientRect().top){
        space.removeChild(img)
        location.replace("lose.html")
    }
}

// checking collision for every 30 milli seconds
setInterval(check,30)}

 //calling the first ship to the ground
ship()
})

// giving a feature to play and stop the music
const speaker=document.getElementById("speaker")
let mute=false
speaker.addEventListener("click",()=>{
if (!mute){
    sound.pause()
    mute=true
    speaker.style.textDecoration="underline"
}
else{
    sound.play()
    mute=false
}
})
ship() //calling the first ship to the ground
