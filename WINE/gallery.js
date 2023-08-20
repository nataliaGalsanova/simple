const sliderMain = new Swiper(".slider_main" , {
    freeMode: true,
    centeredSlides: true,
    mousewheel: true,
    parallax: true,
    breakpoints: {
        0: {
        slidesPerView: 1.3,
        spaceBetween: 20
    },
    680: {
        slidesPerView: 3.5,
        spaceBetween: 60
    }
   }
    
})


const sliderBg = new Swiper(".slider_bg" , {

    centeredSlides: true,
    parallax: true,
    spaceBetween: 60, 
    slidesPerView: 3.5
    
})

sliderMain.controller.control = sliderBg;

document.querySelectorAll(".slider__item").forEach(item => {
    item.addEventListener("click", event => {
        item.classList.toggle("opened")
    })
});

let desc = document.querySelector('.description')
sliderMain.on('slideChange', e => {
	sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
})

let btn = document.querySelector('.btn-79')
sliderMain.on('slideChange', e => {
	sliderMain.activeIndex > 0 ? btn.classList.add('hidden') : btn.classList.remove('hidden')
})

const button = document.querySelector(".btn-79");
 button.addEventListener("click", function() {
  window.open("file:///home/user/Desktop/JS/WINE/simple.html", "_blank");
 })


