const targetAbout = document.querySelector('.about-section');
const targetSkills = document.querySelector('#skills');
const targetCollaboration = document.querySelector('#collaboration');
const targetConception = document.querySelector('#conception');
const targetDev = document.querySelector('#dev');
const targetProd = document.querySelector('#prod');
const targetContact = document.querySelector('#contact');
const targetTopLink = document.querySelector('.top-link');

function handleIntersection(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('fade-in')
      entry.target.classList.add('fade-in-visible')
      entry.target.classList.add('translate')
    } else {
      entry.target.classList.remove('fade-in-visible')
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
observer.observe(targetContact);
observer.observe(targetTopLink);
