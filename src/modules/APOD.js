function initEventListeners() {
  // document
    // .querySelector('.initial-page__button')
    // .addEventListener('click', setDate);

  const btns = document.querySelectorAll('button');
  // Проходим по массиву
  btns.forEach((btn) => {
  // Вешаем событие клик
    btn.addEventListener('click', setDate);
  })
}
initEventListeners();

async function setDate() {
  document.querySelector('.container').classList.add('hidden');
  // document.querySelector('.selected-photo-body').classList.remove('hidden')
  const selectedPhotoDiv = document.querySelector('.selected-photo-body');
  selectedPhotoDiv.classList.remove('hidden');
  document.querySelector('main').classList.add('changed-size-background');
  document.querySelector('.selected-photo__img').removeAttribute('src')
  document.querySelector('.selected-photo__description').textContent = '';

  const selectedDate = document.querySelector('.initial-page__input').value;
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=gn2Lwrt5ugX66tQzW4fN40bcfYdQZWCkrefgN7P4&date=${selectedDate}`,
  );
  const photo = await response.json();

  // document
  //   .querySelector('.selected-photo__title')
  //   .insertAdjacentHTML(
  //     'afterend',
  //     `<img src="${photo.url}" border="2px solid yellow"></img>`,
  //   );

  document.querySelector('.selected-photo__img').setAttribute('src', `${photo.url}`)


  document.querySelector('.selected-photo__title').textContent = photo.title;

  console.log(photo);

  document.querySelector('.selected-photo__description').textContent = photo.explanation;

  // document.querySelector('.selected-photo__img').insertAdjacentHTML(
  //   'beforeend',
  //   ` <div class="selected-photo__footer row">
  //   <input class="selected-photo__input col-auto initial-page__input" placeholder="2020-01-01" ></input>
  //   <p class="selected-photo__description col-auto">${photo.explanation}</p>
  //   <button class="selected-photo__button col-auto initial-page__button">Find by certain date</button>
  // </div>`,
  // );
}
