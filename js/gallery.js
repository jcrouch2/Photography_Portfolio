document.querySelectorAll('.gallery-container').forEach((galleryContainer) => {
  const folder = galleryContainer.dataset.folder;
  const base = galleryContainer.dataset.base;
  const count = parseInt(galleryContainer.dataset.count);

  const folderPath = `assets/optimized/${folder}/`;

  for (let i = 1; i <= count; i++) {
    const filename = `${base}${i}.jpg`;

    const link = document.createElement('a');
    link.href = `${folderPath}${filename}`;
    link.className = 'gallery-item';

    const img = document.createElement('img');
    img.src = `${folderPath}${filename}`;
    img.loading = 'lazy';

    link.appendChild(img);
    galleryContainer.appendChild(link);
  }

  window.addEventListener('load', function () {
    imagesLoaded(galleryContainer, function () {
      new Masonry(galleryContainer, {
        itemSelector: '.gallery-item',
        columnWidth: '.gallery-item',
        percentPosition: true,
        gutter: 10,
      });

      lightGallery(galleryContainer, {
        selector: '.gallery-item',
        download: false,
        thumbnail: true,
        zoom: true,
        autoplay: true,
        fullScreen: true,
      });
    });
  });
});