const text = document.querySelector("#text");
const btn = document.querySelector("#btn");
const red = document.querySelector("#Red");
const Blue = document.querySelector("#Blue");
const Green = document.querySelector("#Green");
const Yellow = document.querySelector("#Yellow");


red.addEventListener("click",()=> {red.style.backgroundColor = "red"});

Blue.addEventListener("click",()=> {Blue.style.backgroundColor = "Blue"});

Green.addEventListener("click",()=> {Green.style.backgroundColor = "Green"});

Yellow.addEventListener("click",()=> {Yellow.style.backgroundColor = "Yellow"});

btn.addEventListener("click",()=>{
    const input = document.querySelector("#input").value;
    text.innerHTML = "Hello, " + input;
})

