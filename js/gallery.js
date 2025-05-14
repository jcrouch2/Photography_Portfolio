const galleryContainer = document.querySelector('.gallery-container');
const folder = galleryContainer.dataset.folder;
const base = galleryContainer.dataset.base;
const imgCount = parseInt(galleryContainer.dataset.count);
const folderPath = `assets/optimized/${folder}/`;

//nice loader while you wait (from css-loaders.com)
const loader = document.createElement('div');
loader.className = 'loader';
document.body.appendChild(loader); //position it outside the gallery container so its not hidden
console.log("Loading...");

galleryContainer.style.visibility = 'hidden';  //hide the gallery while images are loading

for (let i = 1; i <= imgCount; i++) {
  const filename = `${base}${i}.jpg`;
  const link = document.createElement('a');
  link.href = `${folderPath}${filename}`;
  link.className = 'gallery-item';

  const img = document.createElement('img');
  img.src = `${folderPath}${filename}`;
  img.loading = 'lazy';

  img.addEventListener('load', () => {
    img.classList.add('loaded');
  });

  link.appendChild(img);
  galleryContainer.appendChild(link);
}

imagesLoaded(galleryContainer).on('always', function () {
  galleryContainer.style.visibility = 'visible';

  loader.remove();
  console.log("Finished loading.");

  const masonry = new Masonry(galleryContainer, {
    itemSelector: '.gallery-item',
    columnWidth: '.gallery-item',
    percentPosition: true,
    gutter: 25,
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