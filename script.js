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


  // Efek parallax untuk header
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const header = document.querySelector('header');

    if (scrollPosition > 50) {
      header.style.background = 'linear-gradient(135deg, #3a56e4, #3730a3)';
    } else {
      header.style.background = 'linear-gradient(135deg, #4361ee, #3f37c9)';
    }
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
  headerOrderBtn.addEventListener('click', openModal);

  serviceOrderBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      openModal();
      // Ambil nama layanan dari card
      const serviceName = this.closest('li').querySelector('h3').textContent;
      document.getElementById('service').value = serviceName.toLowerCase().includes('joki') ? 'joki' :
        serviceName.toLowerCase().includes('desain') ? 'desain' :
          serviceName.toLowerCase().includes('website') ? 'website' : 'video';
    });
  });

  closeBtn.addEventListener('click', closeModal);

  // Tutup modal jika klik di luar area konten
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Form submission
  const orderForm = document.getElementById('orderForm');
  orderForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Simulasi pengiriman data
    // const serviceName = document.getElementById('service').options[document.getElementById('service').selectedIndex].text;
    // alert(`Terima kasih! Pesanan untuk ${serviceName} telah diterima. Tim kami akan segera menghubungi Anda.`);

    // Reset form dan tutup modal
    orderForm.reset();
    closeModal();
  });

  // Animasi tombol di header
  headerOrderBtn.addEventListener('mouseenter', () => {
    headerOrderBtn.style.transform = 'translateY(-3px)';
    headerOrderBtn.style.boxShadow = '0 0 25px var(--accent)';
  });

  headerOrderBtn.addEventListener('mouseleave', () => {
    headerOrderBtn.style.transform = 'translateY(0)';
    headerOrderBtn.style.boxShadow = '0 0 15px rgba(0, 238, 255, 0.5)';
  });


  // In script.js
  // Add this to the DOMContentLoaded event listener
  const formContainer = document.querySelector('.form-container');
  formContainer.style.animationDelay = '0.3s';

  // Active navigation link based on scroll
  window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY + 100;

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
});
