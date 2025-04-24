function userscroll() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-dark');
        }
        else {
            navbar.classList.remove('bg-dark');
        }
    })
} 

document.addEventListener('DOMContentLoaded', userscroll);

// what's up message 

function SendToWhatsapp(){
    let nummber = "201113232195";
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let msg = document.getElementById('msg').value;

    var theName = "الاسم :";
    var old = "العمر :"
    window.open(`https://wa.me/${nummber}?text=%20${theName}%20${name}%20${old}%20${age}%20${msg}` , '_blank').focus();
}

// testimonial
$(document).ready(function () {
    var multipleCardCarousel = document.querySelector(
    "#carouselExampleControls"
  );
  if (window.matchMedia("(min-width: 576px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false,
      wrap: false
    });
    var carouselWidth = $(".carousel-inner-2")[0].scrollWidth;
    var cardWidth = $(".carousel-item-2").width();
    var scrollPosition = 0;
    $("#carouselExampleControls .cntrol-next").on("click", function () {
      if (scrollPosition < carouselWidth - cardWidth * 3) {
        scrollPosition += cardWidth;
        $("#carouselExampleControls .carousel-inner-2").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
    $("#carouselExampleControls .cntrol-prev").on("click", function () {
      if (scrollPosition > 1) {
        scrollPosition -= cardWidth;
        $("#carouselExampleControls .carousel-inner-2").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
  } else {
    $(multipleCardCarousel).addClass("slide");
  }
});