
  window.addEventListener("load", function() {
    setTimeout(() => {
      document.getElementById("preloader").style.display = "none";
      document.getElementById("content").style.display = "block";
    }, 1200); // الوقت ديال التحميل
  });


    window.onload = () => {
    document.querySelector(".php").style.width = "85%";
    document.querySelector(".js").style.width = "75%";
    document.querySelector(".html").style.width = "75%";
    document.querySelector(".react").style.width = "75%";
    document.querySelector(".laravel").style.width = "50%";
    document.querySelector(".wordpress").style.width = "50%";
  };