const dino=document.getElementById("dinoship")
const space=document.getElementById("space")
// const right=document.getElementById("right")
// const left=document.getElementById("left")
// const dleft=document.getElementById("dleft")
// const dright=document.getElementById("dright")
// pos=["",right,left,dleft,dright]
const random=()=>{
    return Math.ceil(Math.random()*4)
}
// function bullet(){
    
// }
function ship(){
    // console.log(pos[random()])
    const img=document.createElement("img")
    img.src=`./assets/ship${random()}.png`
    img.classList.add("villain")
    img.style.animation=`enemey${random()} 2.3s linear`
    space.append(img)
    img.onclick=()=>{
        space.removeChild(img)
        // ship()
    }
    setInterval(check,0)
    // del(img)
}
setInterval(ship,3000)
console.log(dino.getbo)
function check() {
    let i=document.querySelector(".villain")
    i.style.border="1px solid red"
    console.log(i.getBoundingClientRect())
        if(i.getBoundingClientRect().top>=dino.getBoundingClientRect().top){
            alert("done")

            space.removeChild(i)
            alert("done")

            console.log("done!",i.getBoundingClientRect())
            // ship()
        };
    
}
ship()
// addEventListener("click",()=>{
// }) 
// 463.6484375
// top
// : 
// 391.3671875
