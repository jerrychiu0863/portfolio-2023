$(function () {
  const visited = sessionStorage.getItem("visited");

  if (!visited) {
    sessionStorage.setItem("visited", true);
    openingAnimation();
  } else {
    // Remove opening overlay
    $(".opening").removeClass("d-flex").addClass("d-none");
  }

  function openingAnimation() {
    splitText($(".heading"));

    const tl = gsap.timeline({
      onComplete: function () {
        $("body").removeClass("overflow-hidden");
        $(".opening").removeClass("d-flex").addClass("d-none");
        gsap.fromTo(
          $(".scroll-down .arrow"),
          {
            y: -20,
            opacity: 0,
          },
          { y: 10, opacity: 1, duration: 2, repeat: -1 }
        );
      },
    });

    // Element setting
    tl.set(".progress-bar", { transformOrigin: "0% 0%", scaleX: 0 });
    tl.set($(".heading .char"), { x: "-100%" });
    tl.set($(".header"), { y: "-100%", opacity: 0 });
    tl.set($(".scroll-down"), { y: "100%", opacity: 0 });
    tl.set($(".marquee"), { y: "100%", opacity: 0 });

    // Animation
    tl.to(".progress-bar", {
      scaleX: 1,
      duration: 1,
    })
      .to(".progress-bar", { opacity: 0 })
      .to(".strip", {
        rotationY: "90deg",
        opacity: 0,
        stagger: {
          amount: 0.5,
        },
      })
      .to($(".heading .char"), {
        x: 0,
        stagger: {
          amount: -1,
        },
      })
      .to(".header", { y: 0, opacity: 1 })
      .to(
        ".scroll-down",
        {
          y: 0,
          opacity: 1,
        },
        "-=100%"
      )
      .to(
        ".marquee",
        {
          y: 0,
          opacity: 1,
        },
        "-=100%"
      );
  }
});
