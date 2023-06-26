let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');
let searchBtn = document.querySelector('.bx-search');
let listItem = document.querySelectorAll('.list-item');


btn.onclick = function () {

    sidebar.classList.toggle('active');
}
searchBtn.onclick = function () {

    sidebar.classList.toggle('active');
}

function activeLink() {

    listItem.forEach(item => 
    item.classList.remove('active'));
    this.classList.add('active');
}

listItem.forEach(item =>
    item.onclick = activeLink)
 
    /////////////encabezado//////////
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        centeredSlides: false,
        slidesPerGroup: 1, 
        grabCursor: true,
        keyboard: {
          enabled: true,
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        },
        scrollbar: {
          el: ".swiper-scrollbar",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });