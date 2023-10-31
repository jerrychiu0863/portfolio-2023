$(function () {
  // Marquee
  let mm = gsap.matchMedia();
  mm.add("(min-width:991px)", () => {
    marquee($(".marquee-text"));
  }).add("(max-width:990px)", () => {
    marquee($(".marquee-text"));
  });

  function marquee(el) {
    gsap.to(el, {
      x: -el.outerWidth(),
      duration: 10,
      repeat: -1,
      ease: "linear",
    });
  }
});
