
  window.addEventListener("load", function() {
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

btn.addEventListener("click", function(){
    document.body.classList.toggle("dark");


    if( document.body.classList.contains("dark")){
        btn.innerHTML="<ion-icon name='sunny-outline'></ion-icon>"
        btn.style.color="white";
    }
    else{
        btn.innerHTML="<ion-icon name='moon-outline'></ion-icon>"
        btn.style.color="black";
    }
});