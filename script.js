function loading() {
  var tl = gsap.timeline();

  tl.to("#yellow1", {
    top: "-100%",
    delay: 0.5,
    duration: 0.7,
    ease: "expo.out",
  });

  tl.from(
    "#yellow2",
    {
      top: "100%",
      delay: 0.6,
      duration: 0.7,
      ease: "expo.out",
    },
    "anim"
  );

  tl.to(
    "#loader h1",
    {
      color: "black",
      delay: 0.6,
      duration: 0.7,
    },
    "anim"
  );

  tl.to("#loader", {
    opacity: 0,
  });
  tl.to("#loader", {
    display: "none",
  });
}
loading();

var elems = document.querySelectorAll(".elem");

function loco() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  document.querySelector("#footer h2").addEventListener("click", () => {
    scroll.scrollTo(0);
  });

  var page2 = document.querySelector("#page2");
  // var elems = document.querySelectorAll(".elem");
  elems.forEach(function (ele) {
    ele.addEventListener("mouseenter", function () {
      var bgimg = ele.getAttribute("data-img");
      page2.style.backgroundImage = `url(${bgimg})`;
    });
    ele.addEventListener("mouseleave", function () {
      page2.style.backgroundImage = ``;
    });
  });
}
loco();

function iteration() {
  elems.forEach(function (ems) {
    var image = ems.getAttribute("data-img");
    console.log(image);
    for(i=0;i<=5;i++){
      ems.addEventListener("mouseenter",function(){
        
      })
    }
  });
}
iteration();