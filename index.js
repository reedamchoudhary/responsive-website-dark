console.log("inside js")
var arrow1 = document.querySelector(".arrow-1");
var arrow2 = document.querySelector(".arrow-2");
var set1 = document.querySelector(".set-1");
var set2 = document.querySelector(".set-2");
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