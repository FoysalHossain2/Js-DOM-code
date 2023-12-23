// const p = document.getElementsByTagName("p")[0];

// p.innerText = "Javascript";

// console.log(p);


const body = document.querySelector("body");

let div = document.createElement("div");
div.classList.add("mainDiv");

// make h1 in js
const h1 = document.createElement("h1");
h1.setAttribute("id" , "title");
h1.innerHTML = "Hello Bangladesh";
h1.style.textAlign = "center";
h1.style.color = "green";
console.log(h1);

// make a button
const button = document.createElement("button");
button.setAttribute("id" , "btn");
button.innerHTML = "Click Change";
button.style.display = "block";
button.style.margin = "auto";
button.style.textAlign = "center";
button.style.marginTop = "150px";
button.style.padding = "10px 20px";
button.style.background = "#A22DE5";
button.style.borderRadius = "10px";
button.style.color = "#fff";
button.style.cursor = "pointer";



// append div in body
body.appendChild(div);

// appendChild in div
div.appendChild(h1);

// agin insert button in div
div.appendChild(button);


// adding eventlistener in button
button.addEventListener("click" , () => {
    h1.innerHTML = "Hello India ";
    h1.style.color = "red";
})





