
window.addEventListener("load", function () {
  setTimeout(() => {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 1200); // الوقت ديال التحميل
});



// skills
window.onload = () => {
  document.querySelector(".php").style.width = "85%";
  document.querySelector(".js").style.width = "75%";
  document.querySelector(".html").style.width = "75%";
  document.querySelector(".react").style.width = "75%";
  document.querySelector(".laravel").style.width = "50%";
  document.querySelector(".wordpress").style.width = "50%";
};



// dark mode 


var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  var img1 = document.getElementById("img1");
  var img2 = document.getElementById("img2");
  var img3 = document.getElementById("img3");

  if (document.body.classList.contains("dark")) {
    img1.src = "port-dark.png"; // dark
    img2.src = "para-dark.png"; // dark
    img3.src = "port-dark.png"
    btn.innerHTML = "<ion-icon name='sunny-outline'></ion-icon>";
    btn.style.color = "white";
  } else {
    img1.src = "port.png"; // light
    img2.src = "para.png"; // light
    img3.src = "port.png"; // light
    btn.innerHTML = "<ion-icon name='moon-outline'></ion-icon>";
    btn.style.color = "black";
  }           
});