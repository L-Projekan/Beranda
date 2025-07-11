// script.js
document.addEventListener('DOMContentLoaded', function() {
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
  yearSpan.innerHTML = `&copy; ${currentYear} L-Projekan. Powered by GitHub Pages.`;

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
});