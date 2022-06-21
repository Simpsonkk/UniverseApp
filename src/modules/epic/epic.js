import '/src/styles/style.scss';

let selectedDate = '';
let slideshowPhotos;
let namesImages = [];
let changedFormatDate;
let num;
let photo;

function initEventListeners() {
  document
    .getElementById('getNextPage')
    .addEventListener('click', changesClass);
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

function changesClass() {
  document.getElementById('mainPage').classList.add('hidden');
  document.getElementById('secondPage').classList.remove('hidden');
}

async function getNamesImages() {
  selectedDate = document.getElementById('epicDateInput').value;
  const response = await fetch(
    `https://api.nasa.gov/EPIC/api/natural/date/${selectedDate}?api_key=AbRivaimagWGLedWpuIBbVuOKrRUxxejodfFWuAq`
  );
  namesImages = [];
  const datesPhotos = await response.json();
  datesPhotos.forEach((element) => {
    namesImages.push(element.image);
  });
  if (namesImages.length === 0) {
    getModalError();
    clearInterval(slideshowPhotos);
  }
}

function getImage() {
  if (selectedDate !== document.getElementById('epicDateInput').value) {
    clearInterval(slideshowPhotos);
    namesImages = [];
    getNamesImages();
    num = -1;
  }
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

function getModalError() {
  const modal = document.querySelector('[data-modal-window]');
  modal.style.display = 'block';
  const close = modal.querySelector('.modal__modal-window');
  close.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.onclick = (event) => {
    if (event.target.hasAttribute('data-modal-window')) {
      modal.style.display = 'none';
    }
  };
}

function pauseInterval() {
  clearInterval(slideshowPhotos);
  downloadImage();
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

function setImage() {
  if (namesImages[num + 1] === undefined) num--;
  if (namesImages[num - 1] === undefined) num++;
  photo = `https://api.nasa.gov/EPIC/archive/natural/${changedFormatDate}/png/${namesImages[num]}.png?api_key=AbRivaimagWGLedWpuIBbVuOKrRUxxejodfFWuAq`;
  document.getElementById('photoImg').setAttribute('src', photo);
  downloadImage();
}
