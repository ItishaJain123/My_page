const header = document.querySelector("header");
const toggle_btn = document.querySelector(".toggle-btn");
const hamburger = document.querySelector(".hamburger");

/*--------------STICKY NAVBAR---------------*/

function stickyNavbar() {
    header.classList.toggle("scrolled" , window.pageYOffset > 0);
}

stickyNavbar();

window.addEventListener("scroll" , stickyNavbar);

/*--------------REVEAL ANIMATION---------------*/

let sr = ScrollReveal({
    duration: 2500,
    distance: "60px",
});

sr.reveal(".showcase-info" , {delay: 600});
sr.reveal(".showcase-image" , {origin: "top", delay: 500});

/*--------------SLIDE ANIMATION---------------*/

const swiper = new Swiper('.swiper', {
    loop: true,
    spped: 500,
    autoplay:true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});

/*--------------CHANGE PAGE THEME---------------*/

let firstTheme = localStorage.getItem("dark");

changeTheme(+firstTheme);

function changeTheme(isDark) {
    if(isDark) {
        document.body.classList.add("dark");
        toggle_btn.classList.replace("uil-moon", "uil-sun");
        localStorage.setItem("dark", 1);
    }

    else{
        document.body.classList.remove("dark");
        toggle_btn.classList.replace("uil-sun", "uil-moon");
        localStorage.setItem("dark", 0);
    }
}

toggle_btn.addEventListener("click", () => {
    changeTheme(!document.body.classList.contains("dark"));
});

/*--------------OPEN AND CLOSE NAVBAR MENU---------------*/

hamburger.addEventListener("click", () => {
    document.body.classList.toggle("open");
    document.body.classList.toggle("stopScrolling");
});

links.forEach((link) => 
    link.addEventListener("click" , () => {
    document.body.classList.remove("open");
    document.body.classList.remove("stopScrolling");
    })
);