let classLink = '.menupage'

window.onscroll = function() {
    let h = document.documentElement.clientHeight;

    if (window.scrollY >=h*4) {
        classLink = '.comments';
    }
    else if (window.scrollY >=h*3) {
        classLink = '.projects';
    }
    else if (window.scrollY >=h*2) {
        classLink = '.skills';
    }
    else if (window.scrollY >=h) {
        classLink = '.aboutme';
    }
    else {
        classLink = '.mainpage';
    }

    let activeBTN = document.querySelector('.active');
    let newactiveBTN = document.querySelector(classLink);

    if (!newactiveBTN.classList.contains('active')) {
    newactiveBTN.classList.add('active')
    activeBTN.classList.remove('active')
    }

};




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

let bodyselect = document.querySelector("body");

document.querySelector(".mobile_menu").addEventListener("click", 
function (event)
{
    document.querySelector(".menulinks").classList.toggle("hidemenu")
    bodyselect.classList.toggle("off-scroll")

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
           bodyselect.classList.remove("off-scroll")
       }
    }
    
})

