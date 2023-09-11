new WAChatBox({
    link: "https://wa.me/+556286410505",
    user: {
    name: "Junior",
        avatar: "images/OsmarSantanaJr.jpeg",
        status: "Costuma responder dentro de uma hora",
    },
    text: `Olá 👋<br><br>Estou aqui para te ajudar. Me fale um pouco sobre as suas necessidades e ficarei feliz em te atender 🤓`,
    button_text: "Peça já o seu orçamento",
});

$('#destaques').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    dots: false,
    infinite: true,
    arrows: false,
    // rtl: true,
});


// Back to top button

const backToTopBtn = document.getElementById("back-to-top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// debugger