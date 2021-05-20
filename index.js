console.log("inside js")
var arrow1 = document.querySelector(".arrow-1");
var arrow2 = document.querySelector(".arrow-2");
var set1 = document.querySelector(".set-1");
var set2 = document.querySelector(".set-2");
var button = document.querySelector(".message button");
var aboutMe = document.getElementById("selfinfo");
var closeAbout = document.getElementById("aboutId");


arrow1.addEventListener("click", () => {
    console.log("inside event listner")
    set1.style.transform="translateX(-500px)"
    setTimeout(()=> set1.style.display = "none", 300)
    set2.style.transform="translateX(0px)"
    setTimeout(()=> set2.style.display = "block", 300)
    arrow1.style.display="none"
    arrow2.style.display="block"
})

arrow2.addEventListener("click", () => {
    console.log("inside event listner")
    set1.style.transform="translateX(0px)"
    setTimeout(()=> set1.style.display = "block", 300)
    set2.style.transform="translateX(800px)"
    setTimeout(()=> set2.style.display = "none", 300)
    arrow1.style.display="block"
    arrow2.style.display="none"
})

aboutMe.addEventListener("click", () => {
    document.querySelector(".inner-about").style.opacity = "1";
    document.querySelector(".section-1").style.transform = "scale(1)";
    document.querySelector(".about-me").style.visibility = "visible"
})

closeAbout.addEventListener("click", () => {
    document.querySelector(".inner-about").style.opacity = "0";
    document.querySelector(".section-1").style.transform = "scale(0)";
    document.querySelector(".about-me").style.visibility = "hidden"
})

// arrow1.addEventListener("mouseover",()=>{
//     document.querySelector(".arrow-1 div").style.backgroundColor = "#d5f700"
//     document.querySelector(".arrow-1 div::after").style.backgroundColor = "#d5f700"
// })