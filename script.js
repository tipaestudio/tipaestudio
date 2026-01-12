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
document.querySelectorAll('.service-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target;
    document.querySelectorAll('.service-detail').forEach(detail => {
      if (detail.id === target) {
        detail.style.display = 'block';
      } else {
        detail.style.display = 'none';
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.service-detail').forEach((detail, i) => {
    detail.style.display = i === 0 ? 'block' : 'none';
  });
});

