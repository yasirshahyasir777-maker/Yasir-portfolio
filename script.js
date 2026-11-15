const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("visitorName").value.trim();
  const email = document.getElementById("visitorEmail").value.trim();
  const message = document.getElementById("visitorMessage").value.trim();
  const recipient = "your.email@example.com"; // Replace with your real email.
  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
  document.getElementById("formNote").textContent =
    "Your email app should open now. Replace the sample recipient email in script.js first.";
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});

document.addEventListener("DOMContentLoaded", function () {
  const typingText = document.getElementById("typing-text");

  if (!typingText) return;

  const words = [
    "Mathematics Student",
    "Python Programmer",
    "Web Developer",
    "AI Agent Learner"
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeEffect() {
    const currentWord = words[wordIndex];

    typingText.textContent = currentWord.substring(0, charIndex);

    if (!deleting) {
      charIndex++;

      if (charIndex > currentWord.length) {
        deleting = true;
        setTimeout(typeEffect, 1500);
        return;
      }
    } else {
      charIndex--;

      if (charIndex < 0) {
        deleting = false;
        charIndex = 0;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }

    setTimeout(typeEffect, deleting ? 60 : 100);
  }

  typeEffect();
});
