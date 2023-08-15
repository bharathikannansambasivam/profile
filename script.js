
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Add this code to close the navigation links when a link is clicked
const navItems = document.querySelectorAll("nav ul li a");

navItems.forEach(item => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});



gsap.from(".percentage",{
    scrollTrigger : ".percentage",
    right:500,
    ease: Power2.easeInOut,
    duration:3,
    stagger:0
});

















