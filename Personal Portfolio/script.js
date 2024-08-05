gsap.from(".logo", {
  y: -100,

  duration: 1,
});
gsap.from("#burger-menu", {
  x: -250,
  duration: 1,
});

gsap.from(".top-heading", {
  scale: 2,
  x: 500,
  duration: 1,
  stagger: 1,
});

gsap.from(".top-gif", {
  scale: 0.5,
  duration: 1,
});
gsap.from(".social-img img", {
  x: -300,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".top-gif",
    scroller: "body",
    start: "top 80%",
    end: "bottom top",
    // scrub: true,
  },
}); // Skills Section Animation
gsap.from(".skill-desc", {
  scale: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".skill-desc",
    scroller: "body",
    start: "top 80%",
    end: "bottom top",
    // scrub: true,
  },
});

gsap.from(".technology span", {
  x: -300,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".technology",
    scroller: "body",
    start: "top 80%",
    end: "bottom top",
    // scrub: true,
  },
});
// Education Section Animation
gsap.from(
  "#education .bachelors, #education .Intermediate, #education .Schooling",
  {
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#education",
      scroller: "body",
      start: "top 80%",
      end: "bottom top",
      // scrub: true,
    },
  }
);
gsap.from(".projects div", {
  x: -300,
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".projects div",
    scroller: "body",
    start: "top 80%",
    end: "bottom 60%",
    // scrub: true,
  },
});

// gsap.from(".social-img img", {
//   x: -1000,
//   duration: 0.5,
//   stagger: 0.5,
// });

var burgerMenu = document.getElementById("burger-menu");
var menu = document.getElementById("menu");
var menuContent = document.getElementById("menu-content");

burgerMenu.addEventListener("click", function () {
  menu.checked = !menu.checked; // Toggle the checkbox
  if (menu.checked) {
    menuContent.style.display = "flex";
  } else {
    menuContent.style.display = "none";
  }
});
