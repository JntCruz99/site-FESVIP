document.addEventListener('DOMContentLoaded', function() {
    const dotCarousel = document.querySelector('.dot-carousel');
    const carousel = document.querySelector('.carousel');
    const cards = carousel.children;
    const cardPerDot = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--card-per-dot'));
    let dots = '';
    let qtdDot = 0;
    let currentIndex = 0;
  
    for (let i = 0; i < cards.length; i++) {
      if (i % cardPerDot === 0) {
        qtdDot++;
        dots += `<div id=${qtdDot} class="dot"></div>`;
      }
    }
    dotCarousel.innerHTML = dots;
  
    const dotsList = document.querySelectorAll('.dot');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
  
    // Adiciona a classe 'active-dot' ao primeiro dot
    dotsList[currentIndex].classList.add('active-dot');
  
    dotsList.forEach((dot, index) => {
      dot.addEventListener('click', function() {
        currentIndex = index; // Atualiza currentIndex com o índice do dot clicado
        updateCarousel(currentIndex * cardPerDot);
      });
    });
  
    prevButton.addEventListener('click', function() {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel(currentIndex * cardPerDot);
      }
    });
  
    nextButton.addEventListener('click', function() {
      const totalSlides = Math.ceil(cards.length / cardPerDot);
      const lastSlideIndex = totalSlides - 1;
  
      // Verifica se currentIndex não está no último slide
      if (currentIndex < lastSlideIndex) {
        currentIndex++;
        updateCarousel(currentIndex * cardPerDot);
      }
    });
  
    function updateCarousel(index) {
      const cardWidth = carousel.children[0].offsetWidth;
      carousel.style.transform = `translateX(-${index * (cardWidth + 6)}px)`;
  
      // Remove a classe 'active-dot' de todos os dots
      dotsList.forEach(dot => {
        dot.classList.remove('active-dot');
      });
  
      // Adiciona a classe 'active-dot' apenas ao dot correspondente ao slide atual
      dotsList[currentIndex].classList.add('active-dot');
    }
  });
  