ol = document.querySelector("ol")
ol.addEventListener("click",theme)

div = document.querySelector("div")
div.addEventListener("click",theme1);

function theme(event){
    event.target.classList.toggle("theme");
    event.stopPropagation()
}


function theme1(event){
    event.currentTarget.classList.toggle("theme1");

}
