let wrap = document.querySelector(".parallax-wrap");
let parallaxes = document.querySelectorAll(".parallax");

console.log(wrap, parallaxes);
document.addEventListener("mousemove", (event) => {
  parallaxes.forEach((parallax) => {
    let position = parallax.getAttribute("value");
    let x = (window.innerWidth - event.pageX * position) / 90;
    let y = (window.innerHeight - event.pageY * position) / 90;

    parallax.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
});
//   document.addEventListener("mousemove", parallax);
//   function parallax(event) {
//     this.querySelectorAll(".parallax-wrap parallax").forEach((shift) => {
//       const position = shift.getAttribute("value");
//       const x = (window.innerWidth - event.pageX * position) / 90;
//       const y = (window.innerHeight - event.pageY * position) / 90;

//       shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
//     });
//   }
