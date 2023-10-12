let lastModified = document.querySelector(".lastmodified")
let currentYear = document.querySelector("#currentyear")

const lastModifiedOptions = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
};
const currentYearOptions = {
    year: "numeric",
}
lastModified.textContent = ` Last Modified: ${new Date(document.lastModified).toLocaleDateString("en-US", lastModifiedOptions)}`;
currentYear.textContent = `${new Date().toLocaleDateString("en-US", currentYearOptions)}`

document.querySelector('#lastModified').textContent = "Last Modification: "+document.lastModified;



// dark mode stuff here
const modeBtn = document.querySelector('#mode');
const theMainArea = document.querySelector('main')
modeBtn.addEventListener('click', () => {
  console.log('clicked')
  modeBtn.classList.toggle('dark')
  theMainArea.classList.toggle('dark')
})


//Current Weather

const myAPI = "437209d363a4387bb2f5dffcea58bbee"
const myWeather = `//api.openweathermap.org/data/2.5/weather?zip=84653,us&appid=437209d363a4387bb2f5dffcea58bbee&units=imperial`
// ========== Grab the weather data and W A I T
fetch(myWeather)
.then((response) => response.json())
.then((allData) => {
    currentWeather(allData)
}) // end waiting

function currentWeather(weatherResults) {
  console.log(weatherResults)
  const myTemperature = document.querySelector('#temp')
  myTemperature.textContent = weatherResults.main.temp
  const myDescription = document.querySelector('#desc')
  myDescription.textContent = weatherResults.weather[0].description
  const myIcon = document.querySelector('#icon')
  myIcon.src=`https://openweathermap.org/img/w/${weatherResults.weather[0].icon}.png`
  myIcon.alt=weatherResults.weather[0].description
}