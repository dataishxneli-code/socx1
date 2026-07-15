// 1. თემის შეცვლა
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});

// 2. სქროლის ანიმაცია (Reveal Effect)
const revealElements = document.querySelectorAll('.reveal');
const scrollReveal = () => {
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < window.innerHeight - 80) {
      el.classList.add('active');
    }
  });
};
window.addEventListener('scroll', scrollReveal);
window.addEventListener('load', scrollReveal);

// 3. ავტომატური არჩევა
function autoSelect(pkg) {
  const select = document.getElementById('package-selector');
  select.value = pkg;
  document.getElementById('contact').scrollIntoView({ 
    behavior: 'smooth',
    block: 'center'
  });
}
