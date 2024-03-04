$(function () {
  // Scroll animation
  gsap.registerPlugin(ScrollTrigger);

  // About
  const intro = new SplitType(".intro-content", { types: "words" });
  const introTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".intro",
      start: "top bottom",
      end: "50% 50%",
      markers: false,
      scrub: 1,
    },
  });
  introTl.fromTo(
    ".intro-content .word",
    { opacity: 0.2 },
    { opacity: 1, stagger: 1 }
  );

  function createScrollTrigger(el, timeline, startPosition) {
    ScrollTrigger.create({
      trigger: el,
      start: `${startPosition} bottom`,
      markers: false,
      onEnter: () => {
        // Play animation
        timeline.play();
      },
      onLeaveBack: () => {
        // Reset animation
        timeline.progress(0);
        timeline.pause();
      },
    });
  }

  // Section title
  $(".section-title").each((i, el) => {
    splitText($(el));
    const tl = gsap.timeline({ paused: true });
    tl.from($(el).find(".char"), { x: -100, stagger: { amount: 0.5 } });
    createScrollTrigger($(el), tl, "50%");
  });

  // Project items
  $(".project-list .item").each((i, el) => {
    const tl = gsap.timeline({ paused: true });
    tl.from($(el), { yPercent: 100, opacity: 0 });
    createScrollTrigger($(el), tl, "-50%");
  });

  // Contact
  const contact = new SplitType(".contact .content", { types: "words" });
  const contactTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".contact .content",
      start: "top bottom",
      end: "110% 100%",
      markers: false,
      scrub: 1,
    },
  });
  contactTl.fromTo(
    ".contact .content .word",
    { opacity: 0.2 },
    { opacity: 1, stagger: 1 }
  );
});
