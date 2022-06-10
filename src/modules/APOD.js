import '../scss/apod.scss';

let selectedDate = '';

function initEventListeners() {
  document.getElementById('apodDateButton1').addEventListener('click', getImage);
  document.getElementById('apodDateButton2').addEventListener('click', getImage);
  document.getElementById('apodDateInput1')
    .addEventListener('blur', () => setDate(document.getElementById('apodDateInput1').value));
  document.getElementById('apodDateInput2')
    .addEventListener('blur', () => setDate(document.getElementById('apodDateInput2').value));
}
initEventListeners();

function setDate(value) {
  selectedDate = value;
}

function setCurrentDate() {
  const currentDate = `${new Date().getFullYear()}-${String(new Date()
    .getMonth() + 1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}`;
  document.getElementById('apodDateInput1').value = currentDate;
  setDate(currentDate);
}
setCurrentDate();

function changesClass() {
  document.getElementById('mainPage').classList.add('hidden');
  document.getElementById('secondPage').classList.remove('hidden');
  document.querySelector('main').classList.add('changed-size-page');
}

function setImage(data) {
  document.getElementById('photoImg').setAttribute('src', `${data.url}`);
  document.getElementById('photoTitle').textContent = data.title;
  document.getElementById('photoDescription').textContent = data.explanation;
}

async function getImage() {
  changesClass();
  if (selectedDate === '') {
    const response = await fetch(
      'https://api.nasa.gov/planetary/apod?api_key=AbRivaimagWGLedWpuIBbVuOKrRUxxejodfFWuAq&count=1',
    );
    const photo = await response.json();
    setImage(photo[0]);
  } else {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=AbRivaimagWGLedWpuIBbVuOKrRUxxejodfFWuAq&date=${selectedDate}`,
    );
    const photo = await response.json();
    setImage(photo);
  }
  document.getElementById('apodDateInput2').value = '';
  setDate('');
}
