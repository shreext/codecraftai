document.addEventListener('DOMContentLoaded', () => {
    // 1. Hamburger Menu Functionality
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

    // 2. Detail Spread images card animation ---
    const detailSection = document.querySelector('.details');
    const dynamicHeading = document.getElementById('dynamic-heading');
    const dynamicParagraph = document.getElementById('dynamic-paragraph');
    const detailImagesContainer = document.querySelector('.detail-images');
    const detailImages = document.querySelectorAll('.detail-images img');

    // Initial content for the text and button
    const initialHeadingText = "🚀 Featured Projects";
    const initialParagraphText = "Here are some of my recent projects that showcase my skills in full-stack development";

    // Content for the fanned state
    const fannedHeadingText = "🚀 Featured Projects";
    const fannedParagraphText = "Click on each image for live demos...";

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
    



    // 3. Background Color Changing Existing JavaScript functionalities ---
    const colorButtons = document.querySelectorAll('.color-btn');
    const headphoneVariants = document.querySelectorAll('.card-variant');
    const colorPickerSection = document.querySelector('.color-picker');

    const colors = {
        mustard: '#E6B84A',
        olive: '#7B8A46',
        maroon: '#853D3A',
        burnt: '#E87C44',
        dustyBlue: '#5A7684',
        plum: '#7E4E60'
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



    // 4. Contact Form 
    document.getElementById("sendMessageBtn").addEventListener("click", function (e) {
        e.preventDefault();

        const name = document.getElementById("userName").value.trim();
        const email = document.getElementById("userEmail").value.trim();
        const project = document.getElementById("projectType").value;
        const budget = document.getElementById("budgetRange").value;
        const details = document.getElementById("projectDetails").value.trim();

        const subject = `New Project Inquiry from ${name}`;
        const body =
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Project Type: ${project}\n` +
            `Budget: ${budget}\n\n` +
            `Project Details:\n${details}`;

        const mailtoLink = `mailto:kshree6574@mail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    });


    document.getElementById("openEmail").addEventListener("click", function (e) {

        e.preventDefault();

        const subject = `New Project Inquiry from`;
        const body =" ";
        const mailtoLink = `mailto:kshree6574@mail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    });

    // 5. Image Reduirect 

    const redirects = {
        p1: "https://camsolution.netlify.app/",
        p2: "https://kalrix.netlify.app/",
        p3: "https://sweetdreambakery.netlify.app/",
        p4: "https://pdfit.fun/",
        p5: "https://resonanceh.netlify.app/",
        p6: "https://github.com/shreext/twitter/tree/main"
    };

    Object.keys(redirects).forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.style.cursor = "pointer"; // Optional: show hand cursor
            el.addEventListener("click", () => {
                window.location.href = redirects[id];
            });
        }
    });


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

});