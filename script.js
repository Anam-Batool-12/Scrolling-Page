
gsap.to(".slider", {
    x: "-100%", 
    duration: 2.5, 
    ease: "power2.out", 
  });
 gsap.from('.rock',{
  y:200,
  duration:2,
  delay:1,
  opacity:0

 })
 gsap.from('.character',{
  y:-200,
  duration:2,
  delay:1,
  opacity:0

 })
 gsap.from('.chain1',{
  y:-200,
  duration:2,
  delay:1,
  opacity:0

 })
 gsap.from('.chain2',{
  y:200,
  duration:2,
  delay:1,
  opacity:0

 })

 gsap.from('.mt1',{
  x:-200,
  duration:2,
  delay:1,
  opacity:0

 })
 gsap.from('.mt2',{
  x:200,
  duration:2,
  delay:1,
  opacity:0

 })
 

          
gsap.registerPlugin(ScrollTrigger);


gsap.fromTo(
  ".left", 
  { x: "-100%", opacity: 0 }, 
  { 
    x: "0%", 
    opacity: 1, 
    duration: 1.5, 
    scrollTrigger: {
      trigger: ".left",
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      toggleActions: "play reverse play reverse",
    }
  }
);


gsap.fromTo(
  ".right", 
  { x: "100%", opacity: 0 }, 
  { 
    x: "0%", 
    opacity: 1, 
    duration: 1.5, 
    scrollTrigger: {
      trigger: ".right",
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      toggleActions: "play reverse play reverse",
    }
  }
);

gsap.fromTo(
  ".left1", 
  { x: "-100%", opacity: 0 }, 
  { 
    x: "0%", 
    opacity: 1, 
    duration: 1.5, 
    scrollTrigger: {
      trigger: ".left1",
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      toggleActions: "play reverse play reverse",
    }
  }
);


gsap.fromTo(
  ".right1", 
  { x: "100%", opacity: 0 }, 
  { 
    x: "0%", 
    opacity: 1, 
    duration: 1.5, 
    scrollTrigger: {
      trigger: ".right1",
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      toggleActions: "play reverse play reverse",
    }
  }
);




gsap.utils.toArray('.banner').forEach((banner) => {
  gsap.fromTo(
    banner.querySelector('h2'), 
    { x: 300, opacity: 0 }, 
    {
      x: "0%", 
      opacity: 1, 
      duration: 1, 
      scrollTrigger: {
        trigger: banner, 
        start: "top 80%", 
        end: "top 20%", 
        scrub: true, 
        toggleActions: "play reverse play reverse", 
      }
    }
  );
});


gsap.fromTo(
  "#section3 .txt p", 
  { x: 300, opacity: 0 }, 
  {
    x: 0, 
    opacity: 1, 
    duration: 1, 
    scrollTrigger: {
      trigger: "#section3 .txt p", 
      start: "top 65%", 
      end: "top 30%", 
      scrub: true, 
      toggleActions: "play reverse play reverse", 
    },
  }
);


gsap.utils.toArray("#section3 .txt .btn").forEach((button) => {
  gsap.fromTo(
    button,
    { x: -100, opacity: 0 }, {
      x: 0, 
      opacity: 1, 
      duration: 1,
      scrollTrigger: {
        trigger: button, 
        start: "top 90%", 
        end: "top 30%", 
        scrub: true, 
        toggleActions: "play reverse play reverse", 
      },
    }
  );
});







  