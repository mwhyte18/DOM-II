// Your code goes here
const imagehover = document.querySelectorAll(".img-content").forEach(element => {
    element.addEventListener("mouseover", () =>{
        element.style.transform="scale(1.2)";
        element.style.transition="transform 0.3s";
    })
    element.addEventListener("mouseleave", () =>{
        element.style.transform="scale(1)";
    })
})

const h2 = document.querySelectorAll("h2").forEach(element => {
    element.addEventListener("dblclick", () => {
        element.style.backgroundColor= "black";
        element.style.color= "#EDC9AF";
        element.style.transform ="scale(1.2)";
        element.style.transition="transform 0.3s";
    })
    element.addEventListener("mouseleave", () => {
        element.style.backgroundColor= "lavender";
        element.style.color= "black";
        element.style.transform ="scale(1.0)";
    })
})

const h4 = document.querySelectorAll('h4').forEach(element => {
    element.addEventListener("click", () => {
        element.style.textAlign = "center"
        element.style.zoom = "1.7"
    })
})

const imageResize = document.querySelector('.content-destination img');
    window.addEventListener('resize', () => {
        imageResize.src = 'https://images.unsplash.com/photo-1578926288207-a90a5366759d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2022&q=80'
    })
    imageResize.addEventListener('mousedown', (event) => {
        event.target.style.opacity = '0';
    })
    imageResize.addEventListener('dblclick', (event) => {
        event.target.style.opacity = '.50';
    })
    window.addEventListener("load", function(event) {
        alert("Welcome to the Fun Bus!");
        });
const p = document.querySelectorAll('p').forEach(element => {
    element.addEventListener('copy', () =>{
        alert('are you trying to plagerize?')
    })
})
const body = document.querySelector('body');
    body.addEventListener('keydown', () => {
        body.style.backgroundColor = "skyblue";
    })
    body.addEventListener('keyup', () => {
        body.style.backgroundColor = "lavender"
    })