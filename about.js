let aboutItems = document.querySelector('.about-section');
console.log(aboutItems)

visible = (e) => {
  e.target.classList.toggle('fade-in.visible')
}

// aboutItems.addEventListener("scroll", visible, false);

// for (var item of aboutItems.children) {
//   item.addEventListener("scroll", grow, false);
//   item.addEventListener("scroll", grow, false);
// }

// var options = {
//   root: document.querySelector('#scrollArea'),
//   rootMargin: '0px',
//   threshold: 1.0
// }

// var observer = new IntersectionObserver(visible, root);
const targetAbout = document.querySelector('.about-section');
const targetSkills = document.querySelector('#skills');
const targetCollaboration = document.querySelector('#collaboration');
const targetConception = document.querySelector('#conception');
const targetDev = document.querySelector('#dev');
const targetProd = document.querySelector('#prod');
function handleIntersection(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('fade-in')
      entry.target.classList.add('fade-in-visible')
      entry.target.classList.add('translate')
    } else {
      entry.target.classList.remove('fade-in visible')
    }
  });
}

const observer = new IntersectionObserver(handleIntersection);
observer.observe(targetAbout);
observer.observe(targetSkills);
observer.observe(targetCollaboration);
observer.observe(targetConception);
observer.observe(targetDev);
observer.observe(targetProd);
