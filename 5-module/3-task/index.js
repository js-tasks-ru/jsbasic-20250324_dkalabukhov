function initCarousel() {
  function updateCarousel() {
    elements.arrowLeft.style.display = state.currentSlideIndex === 0 ? 'none' : '';
    elements.arrowRight.style.display = state.currentSlideIndex === slidesCount - 1 ? 'none' : '';

    const offset = -state.currentSlideIndex * slideWidth;
    elements.carouselInner.style.transform = `translateX(${offset}px)`;
  }

  const elements = {
    arrowRight: document.querySelector('.carousel__arrow_right'),
    arrowLeft: document.querySelector('.carousel__arrow_left'),
    carouselInner: document.querySelector('.carousel__inner'),
  };

  const state = {
    currentSlideIndex: 0,
  };

  const slidesCount = elements.carouselInner.children.length;
  const slideWidth = elements.carouselInner.offsetWidth;

  elements.arrowRight.addEventListener('click', () => {
    if (state.currentSlideIndex === slidesCount - 1) {
      return;
    }

    state.currentSlideIndex += 1;
    updateCarousel();
  });

  elements.arrowLeft.addEventListener('click', () => {
    if (state.currentSlideIndex === 0) {
      return;
    }

    state.currentSlideIndex -= 1;
    updateCarousel();
  })

  updateCarousel();
}
