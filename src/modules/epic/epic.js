import '/src/styles/style.scss';
// import AirDatepicker from 'air-datepicker';
// import 'air-datepicker/air-datepicker.css';

// // new AirDatepicker('#my-element'[, options]);

//добавь ограничения по датам датапикеру и придумай из-за чего сет интервал будет 
//останваливаться, когда фотки кончатся

let selectedDate = '';

document.getElementById('startSlideshowButton').addEventListener('click', getImage)
document.getElementById('epicDateInput')
  .addEventListener('blur', () => { selectedDate = document.getElementById('epicDateInput').value; });

async function getImage() {
  const response = await fetch(`https://api.nasa.gov/EPIC/api/natural/date/${selectedDate}?api_key=AbRivaimagWGLedWpuIBbVuOKrRUxxejodfFWuAq`);
  const datesPhotos = await response.json();
  const namesImages = [];
  datesPhotos.forEach(element => {
    namesImages.push(element.image);
  });
  console.log(namesImages);
  // const changedFormatDate = selectedDate.replace(/-/gi, '/')
  // let num = 0

  // setInterval(() => {
    
  //   const photo = `https://api.nasa.gov/EPIC/archive/natural/${changedFormatDate}/png/${namesImages[num]}.png?api_key=AbRivaimagWGLedWpuIBbVuOKrRUxxejodfFWuAq`
  //   document.getElementById('photoImg').setAttribute('src', `${photo}`)
  //   num++

  // }, 1000);




}                           
// https://api.nasa.gov/EPIC/api/natural/date/2022-06-01?api_key=AbRivaimagWGLedWpuIBbVuOKrRUxxejodfFWuAq