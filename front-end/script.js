
window.addEventListener("load", function () {
  setTimeout(() => {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 1000); // الوقت ديال التحميل
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
    img3.src = "cofe-dark.png"; // dark
    btn.innerHTML = "<ion-icon name='sunny-outline'></ion-icon>";
    btn.style.color = "white";
  } else {
    img1.src = "port.png"; // light
    img2.src = "para.png"; // light
    img3.src = "cofe.png"; // light
    btn.innerHTML = "<ion-icon name='moon-outline'></ion-icon>";
    btn.style.color = "black";
  }           
});

var contactForm = document.querySelector(".forrrm");
var formMessage = document.getElementById("form-message");

if (contactForm && formMessage) {
  var isSubmitting = false;

  window.addEventListener("message", function (event) {
    if (!event.data || event.data.type !== "contact-result") {
      return;
    }

    formMessage.textContent = event.data.message;
    formMessage.style.color = event.data.status === "success" ? "green" : "red";

    if (event.data.status === "success") {
      contactForm.reset();
    }
  });

  contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    isSubmitting = true;
    formMessage.textContent = "Sending message...";
    formMessage.style.color = "green";

    try {
      var response = await fetch(contactForm.action, {
        method: contactForm.method,
        body: new FormData(contactForm)
      });

      var responseText = await response.text();
      var sentSuccessfully = response.ok && responseText.includes("status: 'success'");

      if (sentSuccessfully) {
        contactForm.reset();
        formMessage.textContent = "Your message has been sent.";
        formMessage.style.color = "green";
      } else {
        formMessage.textContent = "The message could not be sent.";
        formMessage.style.color = "red";
      }
    } catch (error) {
      formMessage.textContent = "The message could not be sent.";
      formMessage.style.color = "red";
    } finally {
      isSubmitting = false;
    }
  });
}
