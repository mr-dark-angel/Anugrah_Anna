// Theme toggle
const toggle = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggle.checked = true;
}

toggle.addEventListener("change", () => {
  body.classList.toggle("dark", toggle.checked);
  localStorage.setItem("theme", toggle.checked ? "dark" : "light");
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

let roleIndex = 0;
let charIndex = 0;
let deleting = false;
const roleEl = document.getElementById("animated-role");

function typeEffect() {
  const text = roles[roleIndex];

  if (!deleting) {
    roleEl.textContent = text.slice(0, ++charIndex);
    if (charIndex === text.length) setTimeout(() => deleting = true, 140000);
  } else {
    roleEl.textContent = text.slice(0, --charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, deleting ? 50 : 50);
}
typeEffect();
