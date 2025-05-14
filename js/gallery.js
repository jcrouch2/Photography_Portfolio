document.querySelectorAll('.gallery-container').forEach((galleryContainer) => {
  const folder = galleryContainer.dataset.folder;
  const base = galleryContainer.dataset.base;
  const imgCount = parseInt(galleryContainer.dataset.count);

  const folderPath = `assets/optimized/${folder}/`;

  for (let i = 1; i <= imgCount; i++) {
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

  const msnry = new Masonry(galleryContainer, {
    itemSelector: '.gallery-item',
    columnWidth: '.gallery-item',
    percentPosition: true,
    gutter: 25,
  });

  //try to reduce loading time by starting masonry layout after each image loads (instead of after all images load)
  imagesLoaded(galleryContainer)
  .on('progress', function (_instance, image) {
    if (image.isLoaded) {
      image.img.classList.add('loaded');
    }
    msnry.layout(); 
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
