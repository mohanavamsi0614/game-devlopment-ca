const dino=document.getElementById("dinoship")
const right=document.getElementById("right")
const left=document.getElementById("left")
const dleft=document.getElementById("dleft")
const dright=document.getElementById("dright")
pos=["",right,left,dleft,dright]
const random=()=>{
    return Math.ceil(Math.random()*4)
}
// function bullet(){
    
// }
let eni=setInterval(()=>{
    console.log(pos[random()])
    const img=document.createElement("img")
    img.src=`./assets/ship${random()}.png`

    pos[random()].append(img)
},2000)
// addEventListener("click",()=>{
// })
