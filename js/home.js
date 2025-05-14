const imgCount = 8;
const wrapper = document.querySelector('.swiper-wrapper');

for (let i = 1; i <= imgCount; i++) {
  const slide = document.createElement('div');
  slide.classList.add('swiper-slide');

  const img = document.createElement('img');
  img.src = `assets/homepage-carousel/h${i}.jpg`;
  img.alt = `Landscape photo ${i}`;
  img.loading = "lazy";

  slide.appendChild(img);
  wrapper.appendChild(slide);
}

const swiper = new Swiper('.swiper', {
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  speed: 1000,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});