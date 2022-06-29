import '/src/styles/stylee.scss';
import { ROUTES_API } from '../../shared/constants/api-routes';
import { formatString } from '../../shared/constants/format_string';
import AirDatepicker from 'air-datepicker';
import localeEn from 'air-datepicker/locale/en';
// import 'font-awesome/css/font-awesome.css';

let selectedDate;
const input = document.getElementById('datePictureInput');

new AirDatepicker(input, {
  selectedDates: new Date(),
  position: 'top center',
  locale: localeEn,
  dateFormat: 'yyyy-MM-dd',
  maxDate: new Date(),
  autoClose: true,
});

function initEventListeners() {
  document
    .getElementById('pictureSearchButton')
    .addEventListener('click', getAndSetPicture);
}
initEventListeners();

async function getAndSetPicture() {
  if (!getElementClassList('apod-info').contains('hidden')) getApodContant();
  selectedDate = input.value;
  let pictureApi =
    selectedDate === ''
      ? ROUTES_API.APOD.IMAGES.RANDOM
      : formatString(ROUTES_API.APOD.IMAGES.SELECTED_DATE, { selectedDate });

  if (selectedDate === '') {
    const response = await fetch(pictureApi);
    const picture = await response.json();
    setPicture(picture[0]);
  } else {
    const response = await fetch(pictureApi);
    const picture = await response.json();
    setPicture(picture);
  }
}

function getApodContant() {
  addClassToElement('apod-info', 'hidden');
  removeClassToElement('apod-picture-container', 'hidden');
  addClassToElement('main', 'changed-size-page-apod');
  addClassToElement('datePictureInput', 'shift-input');
  addClassToElement('pictureSearchButton', 'shift-button');
}

function setPicture(data) {
  document.getElementById('pictureImg').setAttribute('src', data.url);
  document.getElementById('pictureTitle').textContent = data.title;
  document.getElementById('pictureDescription').textContent = data.explanation;
}

function getElementClassList(element) {
  return document.getElementById(element).classList;
}

function addClassToElement(element, value) {
  document.getElementById(element).classList.add(value);
}

function removeClassToElement(element, value) {
  document.getElementById(element).classList.remove(value);
}
