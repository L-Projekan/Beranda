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
  const contactLinks = document.querySelectorAll('.contact a');
  contactLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.transform = 'translateX(5px)';
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
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  // Event listeners untuk tombol pemesanan
  if (headerOrderBtn) {
    headerOrderBtn.addEventListener('click', openModal);
  }

  serviceOrderBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      openModal();
      // Ambil nama layanan dari card
      const serviceName = this.closest('li').querySelector('h3').textContent;
      const serviceSelect = document.getElementById('service');
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
  const orderForm = document.getElementById('orderForm');
  if (orderForm) {
    orderForm.addEventListener('submit', function (e) {
      e.preventDefault();
      // Reset form dan tutup modal
      orderForm.reset();
      closeModal();
    });
  }

  // Animasi tombol di header
  if (headerOrderBtn) {
    headerOrderBtn.addEventListener('mouseenter', () => {
      headerOrderBtn.style.transform = 'translateY(-3px)';
      headerOrderBtn.style.boxShadow = '0 0 25px var(--ac)';
    });

    headerOrderBtn.addEventListener('mouseleave', () => {
      headerOrderBtn.style.transform = 'translateY(0)';
      headerOrderBtn.style.boxShadow = '0 0 15px rgba(2, 2, 2, 0.5)';
    });
  }

  // Form container animation
  const formContainer = document.querySelector('.form-container');
  if (formContainer) {
    formContainer.style.animationDelay = '0.3s';
  }

  // Active navigation link based on scroll
  

    document.querySelectorAll('section').forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        const currentId = section.getAttribute('id');
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${currentId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // FAQ FUNCTIONALITY - FIXED VERSION
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', function () {
      const faqItem = this.parentElement;
      const isActive = faqItem.classList.contains('active');
      
      // Tutup semua FAQ items
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
      });
      
      // Jika item yang diklik tidak aktif sebelumnya, buka item tersebut
      if (!isActive) {
        faqItem.classList.add('active');
      }
    });
  });

  // Scroll animations (optional)
  function animateOnScroll() {
    const elements = document.querySelectorAll('.testimonial-card, .faq-item, .service-card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    elements.forEach(el => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(el);
    });
  }
