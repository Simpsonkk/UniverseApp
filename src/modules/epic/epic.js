// import '/src/styles/style.scss';

let selectedDate = '';
let slideshowPhotos;
let namesImages = [];
let changedFormatDate;
let num;
let photo;

const EPIC_API = {
  IMAGES: {
    NAMES_IMAGES:
      'https://api.nasa.gov/EPIC/api/natural/date/{selectedDate}?api_key=AbRivaimagWGLedWpuIBbVuOKrRUxxejodfFWuAq',
    SELECTED_IMAGE:
      'https://api.nasa.gov/EPIC/archive/natural/{changedFormatDate}/png/{selectedNameImage}.png?api_key=AbRivaimagWGLedWpuIBbVuOKrRUxxejodfFWuAq',
  },
};

function isNullOrEmpty(value) {
  return value === null || value === undefined || value === '';
}

function formatString(source, args) {
  if (isNullOrEmpty(source)) return source;

  return Array.isArray(args)
    ? args.reduce(
        (accumulator, value, index) =>
          accumulator.replace(`{${index}}`, value?.toString()),
        source
      )
    : Object.entries(args).reduce(
        (accumulator, [key, value]) =>
          accumulator.replace(`{${key}}`, value?.toString()),
        source
      );
}

function initEventListeners() {
  document
    .getElementById('getNextPage')
    .addEventListener('click', addRemoveClass);
  document
    .getElementById('startSlideshowButton')
    .addEventListener('click', getImage);
  document
    .getElementById('pauseInterval')
    .addEventListener('click', pauseInterval);
  document
    .getElementById('previousPhoto')
    .addEventListener('click', getPreviousPhoto);
  document.getElementById('nextPhoto').addEventListener('click', getNextPhoto);
}
initEventListeners();

function addRemoveClass() {
  document.getElementById('epic-info').classList.add('hidden');
  document.getElementById('selected-photo').classList.remove('hidden');
  document.querySelector('main').classList.add('changed-size-page-epic');
}

async function getNamesImages() {
  selectedDate = document.getElementById('dateImageInput').value;
  const response = await fetch(
    formatString(EPIC_API.IMAGES.NAMES_IMAGES, { selectedDate })
  );
  namesImages = [];
  const datesPhotos = await response.json();
  datesPhotos.forEach((element) => {
    namesImages.push(element.image);
  });
}

function getModal() {
  // const modal = document.querySelector('[data-modal-window]');
  const modal = document.querySelector('.modal');
  modal.classList.add('visible');

  // modal.style.display = 'block';
  // const close = modal.querySelector('.modal__modal-window');
  // close.addEventListener('click', () => {
  // modal.style.display = 'none';
  // });
  const close = modal.querySelector('.modal__modal-window');
  close.addEventListener('click', () => {
    // modal.style.display = 'none';
    modal.classList.remove('visible');
  });

  window.onclick = (event) => {
    if (event.target.hasAttribute('data-modal-window')) {
      modal.classList.remove('visible');
    }
  };
}

const getBase64StringFromDataURL = (dataURL) =>
  dataURL.replace('data:', '').replace(/^.+,/, '');

function downloadImage() {
  const image = document.getElementById('photoImg');
  let base64Image = '';
  // Get the remote image as a Blob with the fetch API
  fetch(image.src)
    .then((res) => res.blob())
    .then((blob) => {
      // Read the Blob as DataURL using the FileReader API
      const reader = new FileReader();
      reader.onloadend = () => {
        // Logs data:image/jpeg;base64,wL2dvYWwgbW9yZ...
        // Convert to Base64 string
        const base64 = getBase64StringFromDataURL(reader.result);
        base64Image = base64;
        // Logs wL2dvYWwgbW9yZ...
        document
          .getElementById('a')
          .setAttribute(
            'href',
            `data:application/octet-stream;base64,${base64Image}`
          );
      };
      reader.readAsDataURL(blob);
    });
}

function setImage() {
  if (namesImages[num + 1] === undefined) num--;
  if (namesImages[num - 1] === undefined) num++;
  const selectedNameImage = namesImages[num];
  photo = formatString(EPIC_API.IMAGES.SELECTED_IMAGE, {
    changedFormatDate,
    selectedNameImage,
  });
  document.getElementById('photoImg').setAttribute('src', photo);
  downloadImage();
}

function pauseInterval() {
  clearInterval(slideshowPhotos);
  downloadImage();
}

function getImage() {
  if (selectedDate !== document.getElementById('dateImageInput').value) {
    clearInterval(slideshowPhotos);
    namesImages = [];
    getNamesImages();
    num = -1;
  }
  setTimeout(() => {
    if (namesImages.length === 0) {
      getModal();
      clearInterval(slideshowPhotos);
    }
  }, 1300);
  // photo = '';
  changedFormatDate = selectedDate.replace(/-/gi, '/');
  slideshowPhotos = setInterval(() => {
    num++;
    setImage();

    if (namesImages[num + 1] === undefined) {
      pauseInterval();
    }
  }, 3000);
}

function getPreviousPhoto() {
  clearInterval(slideshowPhotos);
  num--;
  setImage();
}

function getNextPhoto() {
  clearInterval(slideshowPhotos);
  num++;
  setImage();
}
