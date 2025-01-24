const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

console.log(navMenu , navToggle,navClose);

if (navToggle){
    navToggle.addEventListener("click", ()=>{
        navMenu.classList.add("show-menu");
    });
}

if(navClose){
    navClose.addEventListener("click", ()=>{
        navMenu.classList.remove("show-menu");
    });
}

const navLink = document.querySelectorAll(".nav__link");
 function LinkAction() {
    const navMenu =document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
 }
 navLink.forEach((element)=>{
    element.addEventListener("click", LinkAction);
 })

window.addEventListener("scroll", () =>{
    const header = document.getElementById("header")
    if (this.scrolly >100) {
        header.classList.add("bg-header");
    }else{
        header.classList.remove("bg-header");
    }
});

const swiper= new Swiper(".services__swiper", {
    loop: true,
    grabCursor: true,
    spaceBetween: 24,
    slidePerView: "auto",

    navigation:{
        nextEl: ".swiper-button-next",
        preEl:  ".swiper-button-prev",
        
    },
});

const scrollBtn =document.getElementById("scroll-up");

this.addEventListener("scroll", ()=>{
   if(this.scrollY>350){
    scrollBtn.classList.add("show-scroll")
   }else{
    scrollBtn.classList.remove("show-scroll")
   }
});

const sections =document.querySelectorAll("section");
window.addEventListener("scroll",()=>{
    sections.forEach(current=>{
        const sectionHeight =current.offsetHeight;
        const sectionTop =current.offsetTop -58;
        const sectionId =current.getAttribute("id")
        const sectionClass=document.querySelector(".nav__menu a[href*=" + section + "]"

        );
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add("active-link");
        }else {
            sectionClass.classList.remove("active-link");
        }
    });
});

const sr=ScrollReveal({
    origin:"top",
    distance:"100px",
    duration:2500,
    delay:400,
});

sr.reveal(
    `home__container, .services__data .services__swiper, .footer__container`);
sr.reveal(`home__iamge`,{origin:"bottom",delay: 1000});
sr.reveal(`.about__images,.contact__img`,{orgin:"left"});
sr.reveal(`.about__data,.contact__data`,{orgin:"right"});
sr.reveal(`.projects__card` , { interval: 100});
