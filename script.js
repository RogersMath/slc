document.addEventListener('DOMContentLoaded', () => {

    // --- Accordion Logic ---
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            const currentlyActive = document.querySelector('.accordion-item.active');
            
            if (currentlyActive && currentlyActive !== item) {
                currentlyActive.classList.remove('active');
            }
            
            item.classList.toggle('active');
        });
    });

    // --- Testimonial Carousel Logic ---
    const testimonials = [
        {
            quote: "The One-on-One Tutoring was a game-changer. I finally understood the calculus concepts I was struggling with all term. My tutor was patient and explained everything perfectly.",
            author: "— Sarah J., Engineering Student"
        },
        {
            quote: "PALS sessions are amazing. Working with a group on tough problems before a test made me feel so much more prepared and confident. It's way better than studying alone.",
            author: "— David L., Computer Science Major"
        },
        {
            quote: "As a nursing student, the HESI Prep was invaluable. The targeted support helped me focus my studying and I passed with a great score. Highly recommend!",
            author: "— Maria G., Pre-Nursing"
        },
        {
            quote: "I was new to the university and the Math Orientation gave me a clear roadmap. I knew exactly where to go for help from day one.",
            author: "— Alex C., Freshman"
        }
    ];

    const carouselInner = document.querySelector('.carousel-inner');
    const dotsContainer = document.querySelector('.carousel-dots');
    
    testimonials.forEach((t, index) => {
        const slide = document.createElement('div');
        slide.classList.add('carousel-slide');
        if(index === 0) slide.classList.add('active');
        slide.innerHTML = `
            <p class="testimonial-text">"${t.quote}"</p>
            <p class="testimonial-author">${t.author}</p>
        `;
        carouselInner.appendChild(slide);

        const dot = document.createElement('div');
        dot.classList.add('dot');
        if(index === 0) dot.classList.add('active');
        dot.dataset.index = index;
        dotsContainer.appendChild(dot);
    });

    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');

    let currentIndex = 0;
    let autoPlayInterval = null;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(() => {
            nextBtn.click();
        }, 7000); // Change slide every 7 seconds
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
        resetAutoPlay();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
        resetAutoPlay();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            currentIndex = parseInt(e.target.dataset.index);
            showSlide(currentIndex);
            resetAutoPlay();
        });
    });

    resetAutoPlay();
});
