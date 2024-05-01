const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");
const sliders = document.getElementsByClassName("slider");
const sidemenu = document.getElementById("sidemenu");

const txt1 = "Iskander ";
const txt2 = "an aspiring software developer";
const txt3 = "a software engineering student ";
const txt1Arr = txt1.split("");
const txt2Arr = txt2.split("");
const txt3Arr = txt3.split("");

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

const slidesEducation = document.querySelectorAll(".slides-education img");
let slideEducationIndex = 0;
let intervalIdEducation = null;

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  for (slider of sliders) {
    slider.classList.remove("active-slider");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
  if (tabname === "skills") {
    sliders[0].classList.add("active-slider");
  } else if (tabname === "education") {
    sliders[1].classList.add("active-slider");
    initializeSlider();
  }
}
function sendMail() {
  var params = {
    from_name: document.getElementById("Name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("Message").value,
  };
  emailjs
    .send("service_e8oatik", "template_iirjk72", params)
    .then(function (res) {
      alert(
        "Thank you for reaching out to me! I will get back to you as soon as possible!"
      );
    })
    .catch((err) => {
      console.error(err);
      alert("Error: " + err);
    });
}

function modifyText(el, txt) {
  return (el.innerHTML = txt);
}
function writeOut(txt1Arr, txt2Arr, txt3Arr, curChar = 0) {
  const randomTime = Math.random() * 0.5;
  setTimeout(() => {
    const el = document.getElementById("text");
    let elTxt = el.innerHTML;
    elTxt += txt1Arr[curChar];
    modifyText(el, elTxt);
    if (curChar + 1 == txt1Arr.length) {
      return deleteOut(txt1Arr, txt2Arr, txt3Arr, txt1Arr.length);
    }
    return writeOut(txt1Arr, txt2Arr, txt3Arr, curChar + 1);
  }, randomTime * 800);
}
function deleteOut(txt1Arr, txt2Arr, txt3Arr, curChar = 0) {
  const randomTime = Math.random() * 0.5;
  setTimeout(() => {
    const el = document.getElementById("text");
    let elTxt = el.innerHTML;
    const elTxtArr = elTxt.split("");
    const elTxtArrLength = elTxtArr.length;
    const newEltxt = elTxtArr.splice(0, curChar - 1).join("");
    modifyText(el, newEltxt);
    if (elTxtArrLength == 0) {
      return writeOut(txt2Arr, txt3Arr, txt1Arr, 0);
    }
    return deleteOut(txt1Arr, txt2Arr, txt3Arr, elTxtArrLength - 1);
  }, randomTime * 800);
  return;
}

writeOut(txt1Arr, txt2Arr, txt3Arr);
document.addEventListener("DOMContentLoaded", initializeSkillsSlider);

function initializeSkillsSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSkillSlide, 2000);
  }
}

function initializeSlider() {
  if (slidesEducation.length > 0) {
    slidesEducation[slideEducationIndex].classList.add("displaySlide");
    intervalIdEducation = setInterval(nextSlide, 2000);
  }
}

function showSkillSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
}
function showSlide(index) {
  if (index >= slidesEducation.length) {
    slideEducationIndex = 0;
  } else if (index < 0) {
    slideEducationIndex = slidesEducation.length - 1;
  }
  slidesEducation.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slidesEducation[slideEducationIndex].classList.add("displaySlide");
}

function prevSkillSlide() {
  clearInterval(intervalId);
  intervalId = setInterval(prevSkillSlide, 2000);
  slideIndex--;
  showSkillSlide(slideIndex);
}

function prevSlide() {
  clearInterval(intervalIdEducation);
  intervalIdEducation = setInterval(prevSlide, 2000);
  slideEducationIndex--;
  showSlide(slideEducationIndex);
}

function nextSkillSlide() {
  clearInterval(intervalId);
  intervalId = setInterval(nextSkillSlide, 2000);
  slideIndex++;
  showSkillSlide(slideIndex);
}

function nextSlide() {
  clearInterval(intervalIdEducation);
  intervalIdEducation = setInterval(nextSlide, 2000);
  slideEducationIndex++;
  showSlide(slideEducationIndex);
}