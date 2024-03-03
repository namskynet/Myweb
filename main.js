let classLink = '.menu-page1'

window.onscroll = function() {
    let h = document.documentElement.clientHeight;

    if (window.scrollY >=h*4) {
        classLink = '.menu-page5'
    }
    else if (window.scrollY >=h*3) {
        classLink = '.menu-page4'
    }
    else if (window.scrollY >=h*2) {
        classLink = '.menu-page3'
    }
    else if (window.scrollY >=h) {
        classLink = '.menu-page2'
    }
    else {
        classLink = '.menu-page1'
    }

    let sec = document.querySelectorAll()
    
    let activeBTN = document.querySelector('.active');
    let newactiveBTN = document.querySelector(classLink);
    
    if (!newactiveBTN.classList.contains('.active')) {
        newactiveBTN.classList.add('.active')
        activeBTN.classList.remove(('.active'))
    }

};

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
