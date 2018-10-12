// Siena Carousel
const mySiema = new Siema({
  selector: '.carrousel',
  duration: 400,
  easing: 'ease-out',
  perPage: 1,
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: true,
  rtl: false,
  onInit: () => { },
  onChange: () => { },
});
document.querySelector('.banner .prev').addEventListener('click', () => mySiema.prev());
document.querySelector('.banner .next').addEventListener('click', () => mySiema.next());

const productsCarrousel = new Siema({
  selector: '.products',
  duration: 400,
  easing: 'ease-out',
  perPage: {
    768: 3,
    1024: 4,
  },
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: true,
  rtl: false,
  onInit: () => { },
  onChange: () => { },
});
document.querySelector('.news .prev').addEventListener('click', () => productsCarrousel.prev());
document.querySelector('.news .next').addEventListener('click', () => productsCarrousel.next());

// jQuery.mmenu
$(document).ready(function($){
  $("#nav-mob").mmenu({
    slidingSubmenus: !1,
    extensions: ["pagedim-black"],
    navbar: {
      add: !1
    }
  }, {
      offCanvas: {
        pageSelector: "#wrapper"
      }
    }),
    mmenu = $("#nav-mob").data("mmenu"),
    $('[data-action="open-menu-mobile"]').on("click", function(e) {
      e.preventDefault(),
        $("#nav-mob").hasClass("mm-menu_opened") ? mmenu.close() : mmenu.open()
    })
});



