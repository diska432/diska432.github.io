const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");
const sidemenu = document.getElementById("sidemenu");

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
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
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
      console.log("Success");
      alert(
        "Thank you for reaching out to me! I will get back to you as soon as possible!"
      );
    })
    .catch((err) => {
      console.error(err);
      alert("Error: " + err);
    });
}

const txt2 = "a web developer";
const txt3 = "a software engineering student ";
const txt1 = "Iskander ";
const txt1Arr = txt1.split("");
const txt2Arr  = txt2.split("");
const txt3Arr = txt3.split("");

function modifyText(el, txt){
    return (el.innerHTML = txt);
}
function writeOut(txt1Arr, txt2Arr, txt3Arr, curChar = 0){
    const randomTime = Math.random() * 0.5;
    setTimeout(
        () => {
          const el = document.getElementById("text");
          let elTxt = el.innerHTML;
          elTxt += txt1Arr[curChar];
          modifyText(el, elTxt);
          if(curChar + 1 == txt1Arr.length){
            return deleteOut(txt1Arr, txt2Arr, txt3Arr, txt1Arr.length);
          }
          return writeOut(txt1Arr, txt2Arr, txt3Arr, curChar + 1);
        },
        randomTime * 800
    );
}
function deleteOut(txt1Arr, txt2Arr, txt3Arr, curChar = 0){
  const randomTime = Math.random() * 0.5;
  setTimeout(() => {
    const el = document.getElementById("text");
    let elTxt = el.innerHTML;
    const elTxtArr = elTxt.split("");
    const elTxtArrLength = elTxtArr.length;
    // console.log(elTxtArr.length - 1);
    const newEltxt = elTxtArr.splice(0, curChar - 1).join("");
    modifyText(el, newEltxt);
    if(elTxtArrLength == 0){
      return writeOut(txt2Arr, txt3Arr, txt1Arr, 0);
    }
    return deleteOut(txt1Arr, txt2Arr, txt3Arr, elTxtArrLength - 1);
  }, 
  randomTime * 800);
  return;
}
writeOut(txt1Arr, txt2Arr, txt3Arr);