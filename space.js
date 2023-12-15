const dino = document.getElementById("dinoship");
const space = document.getElementById("space");
const timer=document.getElementById("time")
const sound=new Audio("./assets/space.mp3")
const sound1=new Audio("./assets/shoot.mp3")
sound.loop=true
sound.play()

let t=0
let i=0
setInterval(()=>{
    if (t>=60){
        location.replace("./end.html")
    }
    timer.innerHTML=t
    t++

},1000)
const random = () => {
  return Math.ceil(Math.random() * 4);
};
function ship() {
  const img = document.createElement("img");
  img.src = `./assets/ship${random()}.png`;
  img.id=i
  img.classList.add("villain");
  img.style.animation = `enemey${random()} 3s linear`;
  space.appendChild(img);
  console.log(img)
  img.onclick = () => {
    space.removeChild(img);
    i++
    ship()
  };
  check()
function check(){
    if (img.getBoundingClientRect().top>=dino.getBoundingClientRect().top){
        space.removeChild(img)
        location.replace("lose.html")
    }
}
setInterval(check,30)
}


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
}})
ship();
