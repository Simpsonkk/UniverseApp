function setDate(value) {
  this.selectedDate = value;
}

function setCurrentDate() {
  const currentDate = `${new Date().getFullYear()}-${String(new Date()
    .getMonth() + 1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}`;
  document.getElementById('apodDateInput1').value = currentDate;
  setDate(currentDate);
}
setCurrentDate();

function changeClass() {
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
  changeClass();
  if (this.selectedDate == '') {
    var response = await fetch(
      'https://api.nasa.gov/planetary/apod?api_key=gn2Lwrt5ugX66tQzW4fN40bcfYdQZWCkrefgN7P4&count=1',
    );
    const photo = await response.json();
    setImage(photo[0]);
  } else {
    var response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=gn2Lwrt5ugX66tQzW4fN40bcfYdQZWCkrefgN7P4&date=${this.selectedDate}`,
    );
    const photo = await response.json();
    setImage(photo);
  }
  setDate('');
}
