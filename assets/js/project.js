$(function () {
  $(".project-list .item")
    .find("img")
    .each((i, el) => {
      gsap.set($(el), {
        scale: 0,
        rotation: 30,
        opacity: 0,
        transformOrigin: "50% 50%",
      });
    });

  $(".project-list .item").mousemove(function (e) {
    const currentImg = $(this).find(" img");
    let mm = gsap.matchMedia();
    mm.add("(min-width: 991px)", () => {
      gsap.to(currentImg, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.5,
      });
    });
  });

  $(".project-list .item").mouseleave(function () {
    const currentImg = $(this).find(" img");
    let mm = gsap.matchMedia();
    mm.add("(min-width: 991px)", () => {
      gsap.to(currentImg, {
        opacity: 0,
        rotation: 30,
        scale: 0,
        duration: 0.5,
      });
    });
  });
});
