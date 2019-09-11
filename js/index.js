// nav tags
const navColor = document.querySelector('nav');
navColor.addEventListener('mouseover', function (event) {
    event.target.style.color = "red";
    setTimeout(function () {
        event.target.style.color = "";
    }, 400);
}, false);

//keydown
const  introP = document.querySelector('.intro p');
document.addEventListener('keydown', function (event) {
    if (event.code === 'KeyS') {
        introP.style.color = "crimson";
    }
});

//keyup
document.addEventListener('keyup', function (event) {
    if (event.code === 'KeyS') {
        introP.style.color = "";
    }
});

//wheel
const headerPAgain = document.querySelector('.intro p');
headerPAgain.addEventListener('wheel', wheel);
function wheel() {
    this.style.fontSize = "40px";
}


const tagSelect = document.querySelectorAll('.destination .btn');
tagSelect.forEach(function(){
    document.addEventListener('contextmenu', function (event){
        alert('Time for Vacation!')
    })
})


//clicking logo refreshes page
const logoBegins = document.querySelector('.logo-heading');
logoBegins.addEventListener('click', function () {
    window.setTimeout(function () {
        window.location.reload(true);
    }, 200);
});


// 
//nav anchors change font color on doubleclick
navColor.addEventListener('dblclick', function (event) {
    event.target.style.color = "orange";
});


//nav prevent default
navColor.addEventListener('click', function (event) {
    event.preventDefault()
});

//change img on hover with mouseovere/mouseout
const busImg = document.querySelector('img');
busImg.addEventListener('mouseover', function (event){
    event.target.setAttribute('src', 'img/gi-joe.jpg');
    busImg.addEventListener('mouseout', function (event){
        event.target.setAttribute('src', 'img/fun-bus.jpg');
    });
});

//click bus pic vanish bus pic
busImg.addEventListener('click', function (event) {
    event.target.style.display = "none";
    setTimeout(() => {
        event.target.style.display = "";
    }, 900);
}, false);



//click footer vanish footer
const noFoot = document.querySelector('footer');
noFoot.addEventListener('click', function (event) {
    event.target.style.display = "none";
    setTimeout(() => {
        event.target.style.display = "";
    }, 900);
}, false);
