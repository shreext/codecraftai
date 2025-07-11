document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // --- Detail images card animation ---
    const detailSection = document.querySelector('.details');
    const dynamicHeading = document.getElementById('dynamic-heading');
    const dynamicParagraph = document.getElementById('dynamic-paragraph');
    const detailImagesContainer = document.querySelector('.detail-images');
    const detailImages = document.querySelectorAll('.detail-images img');

    // Initial content for the text and button
    const initialHeadingText = "Every Detail Matters";
    const initialParagraphText = "From the stitching to the sound signature, made with care";
    const initialButtonText = "";

    // Content for the fanned state
    const fannedHeadingText = "Every Detail Matters";
    const fannedParagraphText = "From the stitching to the sound signature, made with care";
    const fannedButtonText = "";

    const sectionObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                dynamicHeading.textContent = initialHeadingText;
                dynamicParagraph.textContent = initialParagraphText;

                detailSection.classList.remove('text-visible', 'button-visible');
                dynamicParagraph.style.cssText = '';

                detailImagesContainer.classList.add('visible');
                detailImagesContainer.style.display = 'block';
                detailImagesContainer.classList.add('stacked');
                detailImagesContainer.classList.remove('fanned', 'final-grid');

                setTimeout(() => {
                    detailImagesContainer.classList.remove('stacked');
                    detailImagesContainer.classList.add('fanned');
                    detailImagesContainer.classList.remove('final-grid');

                    dynamicHeading.textContent = fannedHeadingText;
                    dynamicParagraph.textContent = fannedParagraphText;
                    detailSection.classList.add('text-visible', 'button-visible');
                }, 1500);

                observer.unobserve(entry.target);
            }
        });
    }, sectionObserverOptions);

    if (detailSection) {
        sectionObserver.observe(detailSection);
    }

    // --- Existing JavaScript functionalities ---
    const colorButtons = document.querySelectorAll('.color-btn');
    const headphoneVariants = document.querySelectorAll('.headphone-variant');
    const colorPickerSection = document.querySelector('.color-picker');

    const colors = {
        mustard: '#E6B84A',
        olive: '#7B8A46',
        maroon: '#853D3A'
    };

    let currentIndex = -1;

    setTimeout(() => {
        const firstVariant = headphoneVariants[0];
        if (firstVariant) {
            firstVariant.classList.add('active');
            colorPickerSection.style.backgroundColor = `${colors['mustard']}`;
            colorPickerSection.classList.add('active');
            colorButtons[0].classList.add('active');
        }
    }, 500);

    colorButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const color = button.dataset.color;
            currentIndex = index;

            colorButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            headphoneVariants.forEach(variant => variant.classList.remove('active'));

            colorPickerSection.style.backgroundColor = colors[color];
            colorPickerSection.classList.add('active');

            setTimeout(() => {
                const targetVariant = headphoneVariants[currentIndex];
                if (targetVariant) {
                    targetVariant.classList.add('active');
                }
            }, 200);
        });
    });

    if (colorPickerSection && !colorPickerSection.style.backgroundColor) {
        colorPickerSection.style.backgroundColor = colors['mustard'];
        colorPickerSection.classList.add('active');
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const fadeElements = document.querySelectorAll('.fade-in');
    const fadeObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(element => fadeObserver.observe(element));

    const lifestyleImages = document.querySelectorAll('.lifestyle-img');
    const lifestyleObserver = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            lifestyleImages.forEach((img, index) => {
                setTimeout(() => {
                    img.classList.add('active');
                }, index * 400);
            });
            lifestyleObserver.unobserve(entries[0].target);
        }
    }, { threshold: 0.5, rootMargin: '50px' });

    const lifestyleSection = document.querySelector('.lifestyle-images');
    if (lifestyleSection) {
        lifestyleObserver.observe(lifestyleSection);
    }

    const dreamlikeSection = document.querySelector('.dreamlike');
    window.addEventListener('scroll', () => {
        if (dreamlikeSection) {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.3;
            dreamlikeSection.style.backgroundPosition = `center ${rate}px`;
        }
    });
});