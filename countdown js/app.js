const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];


const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');


let futureDate = new Date(2021,5,30,11,30,0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];
giveaway.textContent = `giweaway ends on ${date} ${month} ${year} ${hours}:${minutes}am`;


function format(item) {
  if (item < 10 ) {
    
    return (item=`0${item}`);
  }
  return item; 
}

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureDate - today;
  console.log(t);
  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000;
  let days = t/oneDay;

  days = Math.floor(days);
 
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor(( t % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];

  items.forEach(function(item, index) {
    item.innerHTML = format(values[index]);
  });
  if (t<10) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, expired</h4>`;
  }
  console.log(hours, days);
  console.log(oneDay);
}


let countDown = setInterval(getRemainingTime, 1000);
getRemainingTime();
