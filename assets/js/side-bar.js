$(function () {
  $(".sidebar-close").click(function () {
    gsap.to(".sidebar", {
      duration: 0.5,
      clipPath: " circle(0% at 95% 5%)",
    });
  });
  $(".mobile-hamburger").click(function () {
    gsap.to(".sidebar", {
      duration: 0.5,
      clipPath: " circle(134% at 95% 5%)",
    });
  });
  $(".sidebar .link").click(function () {
    gsap.to(".sidebar", {
      duration: 0.5,
      clipPath: " circle(0% at 95% 5%)",
    });
  });
});
