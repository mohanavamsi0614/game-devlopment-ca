const dino=document.getElementById("dino")
const block=document.getElementById("block")
const ship=document.getElementById("ship")
let cont=0
const score=document.getElementById("score")
const sound1=new Audio("./assets/die.wav")
const bullet=document.createElement("div")
bullet.style.width=20
bullet.style.height=20
bullet.style.borderRadius=100+"%"
bullet.style.backgroundColor="white"
document.body.append(bullet)
addEventListener("keydown",jump 
)
addEventListener("keyup",()=>{
    dino.style.animation=" "
})
function jump(){
dino.classList.add("animate");
    setTimeout(function(){
        dino.classList.remove("animate");
    },300);
}
function check(){
    if (block.getBoundingClientRect().left<=dino.getBoundingClientRect().left && dino.getBoundingClientRect().top>=330){
        block.style.animation="none"
        sound1.play()
        document.getElementById("ground").innerHTML=`<img src='./assets/ro.png' alt=''>`
        setTimeout(()=>{
        location.reload("./race.html")},700)
    }
    else{
    cont++
    score.innerHTML=cont
    }
}
const inter=setInterval(check,20)
setInterval(()=>{
    let random=Math.ceil(Math.random()*3)
    block.innerHTML="<img src='./assets/block"+random+".png' alt='' height='100%'>"
},4000)
setInterval(()=>{
    if (cont>=800){
        block.style.display="none"
        ship.style.display="block"
        ship.style.width=50
        clearTimeout(inter)
    }
})
ship.addEventListener("click",()=>{
    location.replace("./space.html")
})
