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
