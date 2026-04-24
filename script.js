// Dark mode
const toggle = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const dark = body.classList.contains("dark");
  localStorage.setItem("theme", dark ? "dark" : "light");
  toggle.textContent = dark ? "☀️" : "🌙";
});

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const trigger = window.innerHeight - 80;
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < trigger) {
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Animated role text
const roles = [
  "Data Engineer | Robotics & Automation Engineer"
];

const roleEl = document.getElementById("animated-role");
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const current = roles[roleIndex];

  if (!deleting) {
    roleEl.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) {
      setTimeout(() => deleting = true, 14000);
    }
  } else {
    roleEl.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, deleting ? 50 : 20);
}

typeEffect();
