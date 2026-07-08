/*==========================================================
    LIFETIME EVENTS
    SCRIPT.JS
==========================================================*/


/*==========================================================
DOM Elements
==========================================================*/

const header = document.querySelector("header");

const nav = document.querySelector("nav");

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelectorAll("nav a");

const topBtn = document.getElementById("topBtn");

const counters = document.querySelectorAll(".count");

const fadeElements = document.querySelectorAll(
    ".service-card, .about-image, .about-content, .testimonial, #contact form, #contact div"
);


/*==========================================================
Sticky Header
==========================================================*/

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("active");

    }else{

        header.classList.remove("active");

    }

});


/*==========================================================
Mobile Navigation
==========================================================*/

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

    if(nav.classList.contains("active")){

        menuBtn.innerHTML = '<i class="fas fa-times"></i>';

    }else{

        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

    }

});


/*==========================================================
Close Mobile Menu
==========================================================*/

navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        nav.classList.remove("active");

        menuBtn.innerHTML='<i class="fas fa-bars"></i>';

    });

});


/*==========================================================
Smooth Scroll
==========================================================*/

/*==========================================================
Smooth Scroll (Fixed Header)
==========================================================*/

/*==========================================================
Premium Smooth Scroll
==========================================================*/

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            const headerHeight = header.offsetHeight;

            const offset = target.offsetTop - headerHeight;

            window.scrollTo({

                top: offset,

                behavior: "smooth"

            });

        }

    });

});


/*==========================================================
Back To Top Button
==========================================================*/

window.addEventListener("scroll",()=>{

    if(window.pageYOffset>400){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});


topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*==========================================================
Counter Animation
==========================================================*/

let counterStarted=false;

function startCounter(){

    if(counterStarted) return;

    const counterSection=document.querySelector("#counter");

    const sectionTop=counterSection.getBoundingClientRect().top;

    if(sectionTop<window.innerHeight-100){

        counters.forEach(counter=>{

            const target=+counter.dataset.count;

            let current=0;

            const increment=target/120;

            function update(){

                current+=increment;

                if(current<target){

                    counter.innerText=Math.ceil(current);

                    requestAnimationFrame(update);

                }

                else{

                    counter.innerText=target+"+";

                }

            }

            update();

        });

        counterStarted=true;

    }

}

window.addEventListener("scroll",startCounter);

window.addEventListener("load",startCounter);


/*==========================================================
Scroll Reveal Animation
==========================================================*/

function reveal(){

    fadeElements.forEach(element=>{

        const top=element.getBoundingClientRect().top;

        const windowHeight=window.innerHeight;

        if(top<windowHeight-120){

            element.classList.add("fade-up");

            requestAnimationFrame(()=>{

                element.classList.add("active");

            });

        }

    });

}

window.addEventListener("scroll",reveal);

window.addEventListener("load",reveal);


/*==========================================================
Active Navigation Highlight
==========================================================*/

const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("current");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("current");

        }

    });

});


/*==========================================================
Current Navigation CSS
==========================================================*/

const style=document.createElement("style");

style.innerHTML=`

nav a.current{

    color:#D4AF37;

}

nav a.current::after{

    width:100%;

}

`;

document.head.appendChild(style);


/*==========================================================
Simple Gallery Hover Effect
==========================================================*/

const galleryImages=document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(image=>{

    image.addEventListener("mouseenter",()=>{

        image.style.transform="scale(1.06)";

    });

    image.addEventListener("mouseleave",()=>{

        image.style.transform="scale(1)";

    });

});


/*==========================================================
Button Hover Animation
==========================================================*/

const buttons=document.querySelectorAll(".btn");

buttons.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transition=".35s";

    });

});


/*==========================================================
Page Loaded
==========================================================*/

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});


/*==========================================================
END OF SCRIPT.JS
==========================================================*/