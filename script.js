var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemuneu = document.getElementById("sidemenu");

function openmenu() {
    sidemuneu.style.right = "0";
    document.getElementById("openn").classList.remove("active-bar");
    document.getElementById("closee").classList.add("active-bar");

}

function closemenu() {
    sidemuneu.style.right = "-253px";
        document.getElementById("closee").classList.remove("active-bar");
        document.getElementById("openn").classList.add("active-bar");

}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxBWa0MqHcCUtwr5nuNT6-ZgiYXGwSb4I6IB734rZOTtUATdvO0kw2DWfoNJ62PK8CE4A/exec'
const form = document.forms['submit-to-google-sheet']
const msg =document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message Save Successfully"
            setTimeout(function(){
                msg.innerHTML =""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})