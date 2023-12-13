const dino = document.getElementById("dinoship");
const space = document.getElementById("space");
// const right=document.getElementById("right")
// const left=document.getElementById("left")
// const dleft=document.getElementById("dleft")
// const dright=document.getElementById("dright")
// pos=["",right,left,dleft,dright]
const random = () => {
  return Math.ceil(Math.random() * 4);
};
// function bullet(){
let i=0
// }
function ship() {
  // console.log(pos[random()])
  const img = document.createElement("img");
  img.src = `./assets/ship${random()}.png`;
  img.id=i
  img.classList.add("villain");
  img.style.animation = `enemey${random()} 2.3s linear`;
  space.appendChild(img);
  console.log(img)
  img.onclick = () => {
    space.removeChild(img);
    i++
    ship()
  };
  check()
//   setInterval(()=>{  check(img)
//   }, 10);
function check(){
    // const img=document.querySelector(".villain")
    if (img.getBoundingClientRect().top>=dino.getBoundingClientRect().top){
        space.removeChild(img)
        i++
        ship()
        alert("hi")
        // ship()
    }
}
setInterval(check,30)
}
  // del(img)
// }
// setInterval(ship, 3000);

// console.log(dino.getbo);


ship();
// addEventListener("click",()=>{
// })
// 463.6484375
// top
// :
// 391.3671875
