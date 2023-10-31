$(function () {
  function getOffset(el, event) {
    const offsetX = el.offset().left;
    const offsetY = el.offset().top - $(window).scrollTop();
    const width = el.outerWidth();
    const height = el.outerHeight();
    const x = (event.clientX - offsetX) / width - 0.5;
    const y = (event.clientY - offsetY) / height - 0.5;
    return [x, y];
  }

  $(".scroll-down").mousemove(function (e) {
    const [x, y] = getOffset($(this), e);
    gsap.to($(this), {
      x: -x * 50,
      y: -y * 50,
      background: "#343b31",
      color: "#fff",
    });
    gsap.to($(".scroll-down .inner-circle:eq(0)"), {
      x: -x * 10,
      y: -y * 10,
      scale: 0.9,
      borderColor: "#fff",
    });

    gsap.to($(".scroll-down .inner-circle:eq(1)"), {
      x: -x * 20,
      y: -y * 20,
      scale: 0.8,
      borderColor: "#fff",
    });
  });

  $(".scroll-down").mouseleave(function (e) {
    const [x, y] = getOffset($(this), e);
    gsap.to($(this), {
      x: 0,
      y: 0,
      background: "transparent",
      color: "#333",
    });
    gsap.to($(".scroll-down .inner-circle:eq(0)"), {
      x: 0,
      y: 0,
      scale: 1,
      borderColor: "#333",
    });

    gsap.to($(".scroll-down .inner-circle:eq(1)"), {
      x: 0,
      y: 0,
      scale: 1,
      borderColor: "#333",
    });
  });

  $(".contact-circle").mousemove(function (e) {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 991px)", () => {
      const [x, y] = getOffset($(this), e);

      gsap.to($(this), {
        left: -x * 120,
        top: -y * 120,
        background: "#343b31",
        color: "#fff",
      });
      gsap.to($(".contact-circle .inner-circle:eq(0)"), {
        scale: 0.8,
        left: -x * 90,
        top: -y * 90,
        borderColor: "#fff",
      });
      gsap.to($(".contact-circle .inner-circle:eq(1)"), {
        scale: 0.9,
        left: -x * 50,
        top: -y * 50,
        borderColor: "#fff",
      });
    });
  });

  $(".contact-circle").mouseleave(function () {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 991px)", () => {
      gsap.to($(this), {
        left: 0,
        top: 0,
        background: "transparent",
        color: "#333",
      });
      gsap.to($(".contact-circle .inner-circle:eq(0)"), {
        scale: 1,
        left: 0,
        top: 0,
        borderColor: "#1d1c21",
      });
      gsap.to($(".contact-circle .inner-circle:eq(1)"), {
        scale: 1,
        left: 0,
        top: 0,
        borderColor: "#1d1c21",
      });
    });
  });
});
