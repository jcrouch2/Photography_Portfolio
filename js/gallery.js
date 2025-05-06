console.log("gallery.js is working!");

window.addEventListener('load', function () {
  const gallery = document.querySelector('#gallery');

  const msnry = new Masonry(gallery, {
    itemSelector: '.gallery-item',
    columnWidth: '.gallery-item',
    percentPosition: true,
    gutter: 10,
  });

  lightGallery(document.getElementById('gallery'), {
    selector: '.gallery-item',
    download: false,
    thumbnail: true,
    zoom: true,
    autoplay: true,
    fullScreen: true,
  });
});

