const circle = document.querySelector(".consumption__circle--green");
const percentNumber = document.querySelector(".consumption__percent-number");
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function circleSetProgress(percent, circumference) {
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}

circleSetProgress(percentNumber.innerHTML, circumference);
