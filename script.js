const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const trigger = window.innerHeight * 0.85;
    if(top < trigger){
      el.classList.add("active");
    }
  });
});
