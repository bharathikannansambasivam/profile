
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
      duration:1.5,
      stagger:0
  });



  gsap.from(".skill-bar",{
    scrollTrigger : ".skill-bar",

    duration:2,
    ease: Power2.easeInOut,
    opacity:0,

  })

gsap.from(".social-icons a",{

  scrollTrigger:".social-icons",
  opacity:0,
  stagger:.3

}
)

gsap.from("nav ul li",{

  scrollTrigger:"nav",
  opacity:0,
  stagger:.3

}
)
  gsap.from("#portfolio",{
    opacity:0,
    y:"-100vh",
    rotation:"3600"
  })

gsap.from(".about h3",{
  x:"120vh",
  opacity:0,
  ease:"bounce",
  duration:1
})
  
gsap.from(".about h2",{
  x:"-120vh",
  opacity:0,
  ease:"bounce",
  duration:1
})
  
gsap.from(".projects",{
  scrollTrigger:".project-container",
  opacity:0,
  stagger:.3
})



gsap.from(".seemore button",{
  scrollTrigger:".seemore",

  opacity:0,
rotation:720,
delay:""

})







