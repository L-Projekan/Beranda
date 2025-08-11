// FAQ FUNCTIONALITY
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
        const faqItem = this.parentElement; // Perbaikan: gunakan parentElement
        const isActive = faqItem.classList.contains("active");

        // Tutup semua FAQ items
        document.querySelectorAll(".faq-item").forEach((item) => {
            item.classList.remove("active");
        });

        // Jika item yang diklik tidak aktif sebelumnya, buka item tersebut
        if (!isActive) {
            faqItem.classList.add("active");
        }
    });
});

// Navbar functionality
const navbar = document.getElementById("navbar");
const navMenu = document.getElementById("navMenu");
const mobileToggle = document.getElementById("mobileToggle");
const navLinks = document.querySelectorAll(".nav-link");

// Mobile menu toggle
mobileToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    const icon = mobileToggle.querySelector("i");

    if (navMenu.classList.contains("active")) {
        icon.className = "fas fa-times";
    } else {
        icon.className = "fas fa-bars";
    }
});

// Close mobile menu when clicking on a link
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        const icon = mobileToggle.querySelector("i");
        icon.className = "fas fa-bars";
    });
});

// Active link highlighting
function setActiveLink() {
    const sections = document.querySelectorAll("section[id]");
    const scrollPos = window.scrollY + 100;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id");
        const sections = document.querySelectorAll("section[id], #faq-contact");

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${sectionId}`) {
                    link.classList.add("active");
                }
            });
        }
    });
}

// Panggil setActiveLink saat scroll
window.addEventListener("scroll", setActiveLink);

// Panggil saat halaman dimuat
window.addEventListener("load", setActiveLink);

// Smooth scrolling for anchor links
navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (href.startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 65;
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                });
            }
        }
    });
});