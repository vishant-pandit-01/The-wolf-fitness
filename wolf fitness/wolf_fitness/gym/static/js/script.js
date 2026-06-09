// NAVBAR + ACTIVE LINK
const links = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {

  document.querySelector(".navbar")
    .classList.toggle("sticky", window.scrollY > 50);

  let current = "";

  document.querySelectorAll("section[id]").forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) {
      current = sec.id;
    }
  });

  links.forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === "#" + current
    );
  });

  // BACK TO TOP
  document.getElementById("backToTop").style.display =
    window.scrollY > 500 ? "block" : "none";
});

// MOBILE MENU
const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");

hamburger.onclick = () => {
  menu.classList.toggle("active");
};

links.forEach(link => {
  link.onclick = () => menu.classList.remove("active");
});

// COUNTER
const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {

  if (entries[0].isIntersecting) {

    counters.forEach(counter => {

      let target = +counter.dataset.target;
      let count = 0;

      let timer = setInterval(() => {

        count += Math.ceil(target / 50);

        if (count >= target) {
          counter.innerText =
            target + (target == 99 ? "%" : "+");
          clearInterval(timer);
        } else {
          counter.innerText = count;
        }

      }, 30);

    });

    counterObserver.disconnect();
  }

}, { threshold: 0.5 });

const stats = document.querySelector(".stats");

if (stats) counterObserver.observe(stats);

// PROGRESS BAR
const progressObserver = new IntersectionObserver(entries => {

  if (entries[0].isIntersecting) {

    document.querySelectorAll(".bar span")
      .forEach(bar => {
        bar.style.width = bar.style.width;
      });

  }

}, { threshold: 0.5 });

const progress = document.querySelector(".progress");

if (progress) progressObserver.observe(progress);

// BACK TO TOP CLICK
document.getElementById("backToTop")
?.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});

// EMAIL CHECK
const emailValid = email =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// PHONE CHECK
const phoneValid = phone =>
  /^\d{10}$/.test(phone);

// CONTACT FORM
const contactForm =
  document.getElementById("contactForm");

if (contactForm) {

  contactForm.addEventListener("submit", e => {

    e.preventDefault();

    const name =
      document.getElementById("contactName").value.trim();

    const email =
      document.getElementById("contactEmail").value.trim();

    const phone =
      document.getElementById("contactPhone").value.trim();

    const message =
      document.getElementById("contactMessage").value.trim();

    if (
      name &&
      emailValid(email) &&
      phoneValid(phone) &&
      message
    ) {
      alert("Message Sent Successfully!");
      contactForm.reset();
    } else {
      alert("Please Fill Correct Details");
    }

  });

}

const words = [
  "Strength",
  "Power",
  "Beast Mode",
  "Transformation",
  "Fitness"
];

let i = 0;
let j = 0;
let isDeleting = false;

const typedText = document.querySelector(".animated-text span");

function typeEffect(){

  if(!typedText) return;

  let current = words[i];

  if(isDeleting){
    typedText.textContent = current.substring(0, j--);
  }else{
    typedText.textContent = current.substring(0, j++);
  }

  let speed = isDeleting ? 80 : 120;

  if(!isDeleting && j === current.length + 1){
    isDeleting = true;
    speed = 1000;
  }

  if(isDeleting && j === 0){
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

// REGISTER FORM
const registerForm =
  document.getElementById("registerForm");

if (registerForm) {

  registerForm.addEventListener("submit", e => {

    e.preventDefault();

    const pass =
      document.getElementById("regPassword").value;

    const confirm =
      document.getElementById("regConfirmPassword").value;

    if (pass.length < 6) {
      alert("Password must be 6+ characters");
      return;
    }

    if (pass !== confirm) {
      alert("Passwords do not match");
      return;
    }

    alert("Registration Successful!");
    registerForm.reset();

  });

}

let user = {
  name: "Vishant",
  email: "test@gmail.com"
};

localStorage.setItem("user", JSON.stringify(user));