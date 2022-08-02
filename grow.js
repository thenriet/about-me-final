let navItems = document.querySelectorAll('.nav-link');

grow = (e) => {
  e.target.classList.toggle('normal')
  e.target.classList.toggle('grow')
}

function eventHandler() {
    navItems.forEach(item => {
      item.addEventListener("mouseenter", grow, false);
      item.addEventListener("mouseleave", grow, false);
    })
}
eventHandler();
