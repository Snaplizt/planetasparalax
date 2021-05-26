//PARALLAX

let scene = document.getElementById("scene");
let parallaxInstance = new Parallax(scene);

// SWIPER

let keys=[
    "Mercurio",
    "Venus",
    "Tierra",
    "Marte",
    "Jupiter",
    "Saturno",
    "Urano",
    "Neptuno"
];

let slider = new Swiper(".swiper-container",{
    slidesPerView:"auto",
    spaceBetween:150,
    centeredSlides:true,
    mousewheel:true,
    pagination:{
        el: ".planet-links",
        clickable: true,
        renderBullet:function(index, className){
            return '<div class="' + className +'">' + keys[index] + "</div>";
        }
    }
});

//SLide animation

slider.on("slideChangeTransitionEnd", function(){
    gsap.to(".slide-text span",0.2,{
        x: 0,
        delay:0.1
    })
    gsap.to(".slide-text span",0.2,{
        x: "100px",
    })
    gsap.to(".slide-number span",0.2,{
        x: 0,
        delay:0.1
    })
    gsap.to(".slide-number span",0.2,{
        x: "100px",
    })
    gsap.to(".slide-detail span",0.5,{
        x:0
    })
    gsap.to(".slide-detail-facts div",0.5,{
        x:0
    })
    gsap.to(".swiper-slide-active",0.5,{
        scale: 1,
        ease: Power4.easeOut
    })
    gsap.to(".swiper-slide .slide-img", 1,{
        rotation:10
    })
})