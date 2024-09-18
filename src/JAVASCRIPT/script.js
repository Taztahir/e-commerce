// MOBILE MENU LINKS
const btn = document.querySelector("button.mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");
    
    btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });
    
    // HERO SECTION BACKGROUND IMAGE SLIDER
    const carouselWrapper = document.querySelector('.flex.transition-transform');
        const slides = document.querySelectorAll('.min-w-full');
        const totalSlides = slides.length;
        let currentSlide = 0;

    document.getElementById('next').addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        carouselWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
    });

    document.getElementById('prev').addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        carouselWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
    });