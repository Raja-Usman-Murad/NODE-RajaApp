// const express = require("express");

const submitbtn = document.getElementById("submitbtn");
const grabcityName = document.getElementById("grabcityName");
const output = document.getElementById("output");
const temp = document.getElementById("temp");
const tempstatus = document.getElementById("tempstatus");
const midlayer = document.querySelector(".midlayer");

const getInfo = async (e) => {
  e.preventDefault();
  let cityvalue = grabcityName.value;
  if (cityvalue === "") {
    output.innerHTML = `Plz write the city name before search`;
    midlayer.classList.add("datahide");
  } else {
    try {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&units=metric&appid=2f8598cd4b28ba4666c7aeb92625edb5`;
      const response = await fetch(url);
      const jsondata = await response.json();
      const arrdata = [jsondata];
      output.innerHTML = `${arrdata[0].name} ${arrdata[0].sys.country}`;
      temp.innerHTML = `${arrdata[0].main.temp} °C`;

      const tempMood = `${arrdata[0].weather[0].main}`;
      if (tempMood == "Clear") {
        tempstatus.innerHTML = `<i class="fas fa-sun" style="color:#eccc68" ></i>`;
      } else if (tempMood == "Clouds") {
        tempstatus.innerHTML = `<i class="fas fa-cloud" style="color:#f1f2f6" ></i>`;
      } else if (tempMood == "Rain") {
        tempstatus.innerHTML = `<i class="fas fa-rain" style="color:#a4b0be" ></i>`;
      } else {
        tempstatus.innerHTML = `<i class="fas fa-sun" style="color:#eccc68" ></i>`;
      }
      midlayer.classList.remove("datahide");
    } catch (error) {
      output.innerHTML = `Plz correct the city name before search`;
      midlayer.classList.add("datahide");
    }
  }
};
const getcurrentday = () => {
  let weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  const currentDay = new Date().getDay();
  days = weekday[currentDay];
  let day = (document.getElementById("day").innerHTML = days);
};

getcurrentday();
submitbtn.addEventListener("click", getInfo);
var today = new Date();

var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
document.getElementById("todaydate").innerHTML = date;
