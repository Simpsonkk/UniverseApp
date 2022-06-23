import '/src/styles/style.scss';
import * as moment from 'moment';

let selectedDate;

const APOD_API = {
  IMAGES: {
    RANDOM:
      'https://api.nasa.gov/planetary/apod?api_key=AbRivaimagWGLedWpuIBbVuOKrRUxxejodfFWuAq&count=1',
    SELECTED_DATE:
      'https://api.nasa.gov/planetary/apod?api_key=AbRivaimagWGLedWpuIBbVuOKrRUxxejodfFWuAq&date={selectedDate}',
  },
};

function isNullOrEmpty(value) {
  return value === null || value === undefined || value === '';
}

function formatString(source, args) {
  if (isNullOrEmpty(source)) return source;

  return Array.isArray(args)
    ? args.reduce(
      (accumulator, value, index) => accumulator.replace(`{${index}}`, value?.toString()),
      source,
    )
    : Object.entries(args).reduce(
      (accumulator, [key, value]) => accumulator.replace(`{${key}}`, value?.toString()),
      source,
    );
}

function setDate(value) {
  selectedDate = value;
}

function initEventListeners() {
  document
    .getElementById('imageSearchButton')
    .addEventListener('click', getImage);
  document
    .getElementById('dateImageInput')
    .addEventListener('blur', () => setDate(document.getElementById('dateImageInput').value));
}

function setCurrentDate() {
  const currentDate = moment();
  selectedDate = currentDate.format('YYYY-MM-DD');
  document.getElementById('dateImageInput').value = selectedDate;
}

function init() {
  initEventListeners();
  setCurrentDate();
}
init();

function addRemoveClass() {
  document.getElementById('page-information').classList.add('hidden');
  document.getElementById('selected-photo').classList.remove('hidden');
  document.querySelector('main').classList.add('changed-size-page-apod');
  document.getElementById('dateImageInput').classList.add('shift-input');
  document.getElementById('imageSearchButton').classList.add('shift-button');
}

function setImage(data) {
  document.getElementById('photoImg').setAttribute('src', data.url);
  document.getElementById('photoTitle').textContent = data.title;
  document.getElementById('photoDescription').textContent = data.explanation;
}

async function getImage() {
  if (document.getElementById('page-information').classList.contains('hidden') === false)
   addRemoveClass();

  if (selectedDate === '') {
    const response = await fetch(APOD_API.IMAGES.RANDOM);
    const photo = await response.json();
    setImage(photo[0]);
  } else {
    const response = await fetch(
      formatString(APOD_API.IMAGES.SELECTED_DATE, { selectedDate }),
    );
    const photo = await response.json();
    setImage(photo);
  }
  document.getElementById('dateImageInput').value = '';
  setDate('');
}
