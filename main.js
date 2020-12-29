const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    $(".main").fadeIn(500);
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    $(".open").show();
    $(".close").hide();
    $(".main").fadeOut(500);
    menuOpen = false;
  }
});

const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('open');
    $(".open").show();
    $(".close").hide();
    $(".main").fadeOut(500);
    menuOpen = false;
  });
})