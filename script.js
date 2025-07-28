// script.js
document.addEventListener('DOMContentLoaded', function () {
  // Animasi untuk item layanan
  const serviceItems = document.querySelectorAll('.services li');

  serviceItems.forEach((item, index) => {
    // Delay untuk animasi berurutan
    item.style.animationDelay = `${index * 0.1}s`;

    // Efek hover interaktif
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'translateX(10px)';
    });

    item.addEventListener('mouseleave', () => {
      item.style.transform = 'translateX(0)';
    });
  });

  // Animasi tahun di footer
  const yearSpan = document.querySelector('footer p');
  const currentYear = new Date().getFullYear();
  yearSpan.innerHTML = `&copy; ${currentYear} L-Projekan.`;

  // Efek untuk link kontak
  const contactLinks = document.querySelectorAll(".contact a");
  contactLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.transform = "translateX(5px)";
    });

    link.addEventListener('mouseleave', () => {
      link.style.transform = 'translateX(0)';
    });
  });

  // Modal functionality
  const modal = document.getElementById('orderModal');
  const headerOrderBtn = document.getElementById('headerOrderBtn');
  const serviceOrderBtns = document.querySelectorAll('.service-order-btn');
  const closeBtn = document.querySelector('.close-btn');

  // Fungsi untuk membuka modal
  function openModal() {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  // Fungsi untuk menutup modal
  function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }

  // Event listeners untuk tombol pemesanan
  if (headerOrderBtn) {
    headerOrderBtn.addEventListener("click", openModal);
  }

  serviceOrderBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      openModal();
      // Ambil nama layanan dari card
      const serviceName = this.closest("li").querySelector("h3").textContent;
      const serviceSelect = document.getElementById("service");
      if (serviceSelect) {
        serviceSelect.value = serviceName.toLowerCase().includes('joki') ? 'joki' :
          serviceName.toLowerCase().includes('desain') ? 'desain' :
            serviceName.toLowerCase().includes('website') ? 'website' : 'video';
      }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // Tutup modal jika klik di luar area konten
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Form submission
  const orderForm = document.getElementById("orderForm");
  if (orderForm) {
    orderForm.addEventListener("submit", function (e) {
      e.preventDefault();
      // Reset form dan tutup modal
      orderForm.reset();
      closeModal();
    });
  }

  // Animasi tombol di header
  if (headerOrderBtn) {
    headerOrderBtn.addEventListener("mouseenter", () => {
      headerOrderBtn.style.transform = "translateY(-3px)";
      headerOrderBtn.style.boxShadow = "0 0 25px var(--ac)";
    });

    headerOrderBtn.addEventListener("mouseleave", () => {
      headerOrderBtn.style.transform = "translateY(0)";
      headerOrderBtn.style.boxShadow = "0 0 15px rgba(2, 2, 2, 0.5)";
    });
  }

  // Form container animation
  const formContainer = document.querySelector(".form-container");
  if (formContainer) {
    formContainer.style.animationDelay = "0.3s";
  }

  // Active navigation link based on scroll
  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
  });
});

// Ambil elemen tombol dan modal
const ctaButton = document.querySelector('.cta-button');
const modal = document.getElementById('orderModal');
const closeBtn = document.querySelector('.close-btn');

// Saat tombol ditekan, tampilkan modal
ctaButton.addEventListener('click', function(e) {
    e.preventDefault();
    modal.style.display = 'block';
});

// Saat tombol close ditekan, sembunyikan modal
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Sembunyikan modal jika klik di luar modal-content
window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// FAQ FUNCTIONALITY - FIXED VERSION
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", function () {
    const faqItem = this.parentElement;
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

// Scroll animations (optional)
// function animateOnScroll() {
//   const elements = document.querySelectorAll(".testimonial-card, .faq-item, .service-card");

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.style.opacity = 1;
//           entry.target.style.transform = "translateY(0)";
//           observer.unobserve(entry.target);
//         }
//       });
//     },
//     { threshold: 0.1 }
//   );

//   elements.forEach((el) => {
//     el.style.opacity = 0;
//     el.style.transform = "translateY(30px)";
//     el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
//     observer.observe(el);
//   });
// }

// Navbar functionality
const navbar = document.getElementById("navbar");
const navMenu = document.getElementById("navMenu");
const mobileToggle = document.getElementById("mobileToggle");
const navLinks = document.querySelectorAll(".nav-link");
const scrollIndicator = document.getElementById("scrollIndicator");

// Mobile menu toggle
mobileToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  const icon = mobileToggle.querySelector("i");

  if (navMenu.classList.contains("active")) {
    icon.className = "fas fa-times";
    mobileToggle.style.transform = "rotate(180deg)";
  } else {
    icon.className = "fas fa-bars";
    mobileToggle.style.transform = "rotate(0deg)";
  }
});

// Close mobile menu when clicking on a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    const icon = mobileToggle.querySelector("i");
    icon.className = "fas fa-bars";
    mobileToggle.style.transform = "rotate(0deg)";
  });
});

// Scroll effects
// let lastScrollTop = 0;

// window.addEventListener("scroll", () => {
//   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Add scrolled class for blur effect
  // if (scrollTop > 50) {
  //   navbar.classList.add("scrolled");
  // } else {
  //   navbar.classList.remove("scrolled");
  // }

  // Update scroll indicator
  // const scrollPercent = (scrollTop / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  // scrollIndicator.style.width = scrollPercent + "%";

  // Hide/show navbar on scroll (optional)
  /*
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
            */

//   lastScrollTop = scrollTop;
// });

// Active link highlighting
function setActiveLink() {
  const sections = document.querySelectorAll("section[id]");
  const scrollPos = window.scrollY + 100;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const sectionId = section.getAttribute("id");

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

window.addEventListener("scroll", setActiveLink);

// Smooth scrolling for anchor links
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  });
});

// Create floating particles
// function createParticle() {
//   const particle = document.createElement("div");
//   particle.className = "particle";
//   particle.style.left = Math.random() * 100 + "vw";
//   particle.style.animationDelay = Math.random() * 6 + "s";
//   particle.style.animationDuration = Math.random() * 3 + 3 + "s";
//   document.getElementById("particles").appendChild(particle);

//   setTimeout(() => {
//     particle.remove();
//   }, 6000);
// }

// Generate particles
// setInterval(createParticle, 300);

// Add mouse move effect to navbar
// navbar.addEventListener("mousemove", (e) => {
//   const rect = navbar.getBoundingClientRect();
//   const x = e.clientX - rect.left;
//   const y = e.clientY - rect.top;

//   navbar.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(67, 97, 238, 0.1) 0%, rgba(43, 45, 66, 0.95) 50%)`;
// });

// navbar.addEventListener("mouseleave", () => {
//   navbar.style.background = "rgba(43, 45, 66, 0.95)";
// });

// Add ripple effect to navigation links
// navLinks.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     const ripple = document.createElement("span");
//     const rect = link.getBoundingClientRect();
//     const size = Math.max(rect.width, rect.height);
//     const x = e.clientX - rect.left - size / 2;
//     const y = e.clientY - rect.top - size / 2;

//     ripple.style.width = ripple.style.height = size + "px";
//     ripple.style.left = x + "px";
//     ripple.style.top = y + "px";
//     ripple.style.position = "absolute";
//     ripple.style.borderRadius = "50%";
//     ripple.style.background = "rgba(255, 255, 255, 0.3)";
//     ripple.style.transform = "scale(0)";
//     ripple.style.animation = "ripple 0.6s linear";
//     ripple.style.pointerEvents = "none";

//     const rippleContainer = link.querySelector(".ripple-container");
//     if (rippleContainer) {
//       rippleContainer.appendChild(ripple);
//     } else {
//       const container = document.createElement("div");
//       container.className = "ripple-container";
//       container.style.position = "absolute";
//       container.style.top = "0";
//       container.style.left = "0";
//       container.style.width = "100%";
//       container.style.height = "100%";
//       container.style.overflow = "hidden";
//       container.style.borderRadius = "50px";
//       link.appendChild(container);
//       container.appendChild(ripple);
//     }

//     setTimeout(() => ripple.remove(), 600);
//   });
// });

// Add CSS for ripple animation
// const style = document.createElement("style");
// style.textContent = `
//             @keyframes ripple {
//                 to {
//                     transform: scale(4);
//                     opacity: 0;
//                 }
//             }
//         `;
// document.head.appendChild(style);
