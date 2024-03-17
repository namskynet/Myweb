let classLink = '.menupage'

window.onscroll = function() {
    let h = document.documentElement.clientHeight;

    if (window.scrollY >=h*4) {
        classLink = '.mainpage';
    }
    else if (window.scrollY >=h*3) {
        classLink = '.aboutme';
    }
    else if (window.scrollY >=h*2) {
        classLink = '.skills';
    }
    else if (window.scrollY >=h) {
        classLink = '.projects';
    }
    else {
        classLink = '.comments';
    }


};

let activeBTN = document.querySelector('.active');
let newactiveBTN = document.querySelector(classLink);

if (!newactiveBTN.classList.contains('active')) {
    newactiveBTN.classList.add('active')
    activeBTN.classList.remove('active')
}



// let sec = document.querySelectorAll()
// let section = document.querySelectorAll('section')
// let navlinks = document.querySelectorAll('header menupage')


// let currentSection = 'page1';
// window.onscroll = () => {
//     section.forEach(sec => {
//         if (window.scrollY >= sec.offsetTop) {
//             currentSection = sec.id
//         }
//     });
//     navlinks.forEach(navlink => {
//         if (navlink.href.includes(currentSection)) {
//             navlink.classList.add('active')
//         }
//     });
// }


document.querySelector(".mobile_menu").addEventListener("click", 
function (event)
{
    document.querySelector(".menulinks").classList.toggle("hidemenu")
}
)



addEventListener('click', function(event) {
    let clickTarget = event.target;
    let activeBtn = document.querySelector('.active');
    if (clickTarget.classList.contains('menupage') ){
       clickTarget.classList.add('active');
       activeBtn.classList.remove('active');
       
       let mobile = document.querySelector('.menulinks');
       if (!mobile.classList.contains('hidemenu')){
           mobile.classList.add('hidemenu');
       }
    }
    
})


let bodyselect = document.querySelector("body")
let mobile = document.querySelector('.menulinks');

if (!bodyselect.classList.contains("off-scroll") && !mobile.classList.contains('hidemenu')) {
    bodyselect.classList.add('off-scroll')
}
else {
    bodyselect.classList.remove('off-scroll')
}