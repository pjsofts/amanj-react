console.log("Salam")

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
});


window.addEventListener("load", (event) => {
console.log("window loaded")
});
  
document.addEventListener("readystatechange", (event) => {
console.log(`readystate: ${document.readyState}\n`);
});

