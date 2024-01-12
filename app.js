// ANIMATING the Hero section

// const tlSplit = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".third-page",
//     start: "-25%",
//     end: "100%",
//     scrub: true,
//   },
// });

// tlSplit.fromTo('.large-phone',{x:'40%'},{x: '20%'})
// tlSplit.fromTo('.small-phone',{x: '-40%'},{ x: '-20%'})
// tlSplit.fromTo('.product-text-left',{x: 50, opacity:0},{opacity:1, x:0})

// let tl = gsap.timeline({});
// tl.from(".logo", 1, {
//     y: 500,
//     opacity: 0,
// })
// tl.from(".myheader", 1, {
//     y: 500,
//     stagger: 0.2,
//     opacity: 0,
// })
// tl.from(".first-page-title", 1, {
//   y: 500,
//   stagger: 0.2,
//   opacity: 0,
// });
// tl.from(".first-page-subtitle", 1, {
//   y: 500,
//   stagger: 0.2,
//   opacity: 0,
// });
// tl.from(
//   ".phone-title",
//   1,
//   {
//     y: 500,
//     stagger: 0.2,
//     opacity: 0,
//   }

// );
// tl.from(".product-images", 1, {
//   y: 500,
//   stagger: 0.2,
//   opacity: 0,
// });

gsap.fromTo(
  ".product-images",
  { y: 300, opacity: 0 },
  { y: 0, opacity: 1, duration: 5 }
);

// Second Animation
// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// const smoother = ScrollSmoother.create({
//     wrapper: "#wrapper",
//     smooth:1,
//     normalizeScroll: true,
//     ignoreMobileResize: true,
//     effects: true,
//     preventDefault: true
// })

const galleryWrapper = document.querySelector(".gallery");
const tli = gsap.timeline();
tli.to(galleryWrapper, {
  x: `-${galleryWrapper.offsetWidth}`,
  scrollTrigger: {
    trigger: galleryWrapper,
    start: "top top",
    end: `+${galleryWrapper.offsetWidth}`,
    pin: true,
    scrub: 0.9,
  },
});




// Select individual gallery items


// const person = {
//     name: "Smith",
//     age:23,
//    " home address": "#23 ago",
// }
//  person.prototype.Scrin = function(){
//   return this.name + " " + this.age;
// }
// person.Scrin();
// console.log(person.Scrin());
// console.log(person.Scrin());