const mobileMenu = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");

// Toggle menu mobile
mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Smooth scroll + auto close menu
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);

    if (!target) return;

    navLinks.classList.remove("active");

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
