let toogleHide = document.getElementById("hide");
let threeBar = document.querySelector(".fa-bars1");
let bar1 = document.querySelector(".bar1");
let bar2 = document.querySelector(".bar2");
let bar3 = document.querySelector(".bar3");
let bar4 = document.querySelector(".bar4");

let loader = document.querySelector(".loader");
window.addEventListener("load", ()=> {
    loader.style.display = "none";
})

threeBar.addEventListener("click", ()=>{
    toogleHide.classList.toggle("active");
    bar1.classList.toggle("hide1-2");
    bar2.classList.toggle("rotate2");
    bar3.classList.toggle("rotate3");
    bar4.classList.toggle("hide1-2");
});

let login_btn = document.querySelector(".login");
setInterval(() => {
    const colors = ['#FF8960', "#FFFFFF", "#62FF96", "#FFE62D", "#2DFFA3", "#2DFCFF", "#E697FF", "#E697FF"]
    // console.log(colors.length);
    // console.log(colors[7]);
    const random = Math.floor(Math.random()*7);
    login_btn.style.background = `${colors[random]}`;
}, 1000);

