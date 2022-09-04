// analog clock
let analogHour = document.getElementById('a-hour');
let analogMinute = document.getElementById('a-minute');
let analogSecond = document.getElementById('a-second');

setInterval(() => {
  let day = new Date();
  let secondDeg = day.getSeconds() * 6;
  let minuteDeg = day.getMinutes() * 6;
  let hourDeg = day.getHours() * 30;

  analogSecond.style.transform = `rotateZ(${secondDeg}deg)`;
  analogMinute.style.transform = `rotateZ(${minuteDeg}deg)`;
  analogHour.style.transform = `rotateZ(${hourDeg + (minuteDeg / 12)}deg)`;
}, 1000);

// digital clock
let digitalHour = document.getElementById('d-hour');
let digitalMinute = document.getElementById('d-minute');
let digitalSecond = document.getElementById('d-second');
let digitalAmPm = document.getElementById('d-ampm');

setInterval(() => {
  let day = new Date();
  let second = day.getSeconds();
  let minute = day.getMinutes();
  let hour = day.getHours();
  let ampm = hour >= 12 ? 'PM' : 'AM';

  digitalSecond.innerHTML = second < 10 ? `0${second}` : second;
  digitalMinute.innerHTML = minute < 10 ? `0${minute}` : minute;
  digitalHour.innerHTML = hour % 12 < 10 ? `0${hour % 12}` : hour % 12;
  digitalAmPm.innerHTML = ampm;
}, 1000);