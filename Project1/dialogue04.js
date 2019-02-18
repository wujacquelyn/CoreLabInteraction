var fadingText = document.querySelector("blackLeft")
var trigger = document.querySelector("button")
fadingText.addEventListener("click",textFade)
function textFade(event){
  console.log("trigger")
fadingText.style.background = "white";
}
