let aboutItems = document.querySelector('.about');

grow = (e) => {
  e.target.classList.toggle('normal')
  e.target.classList.toggle('grow')
}

for (var item of aboutItems.children) {
  item.addEventListener("scroll", grow, false);
  item.addEventListener("scroll", grow, false);
}
