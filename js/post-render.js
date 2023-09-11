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

// new WAChatBox({
//     link: "https://wa.me/+556286410505",
//     user: {
//     name: "Junior",
//         avatar: "images/OsmarSantanaJr.jpeg",
//         status: "Costuma responder dentro de uma hora",
//     },
//     text: `Olá 👋<br><br>Estou aqui para te ajudar. Me fale um pouco sobre as suas necessidades e ficarei feliz em te atender 🤓`,
//     button_text: "Peça já o seu orçamento",
// });

$('#destaques').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    // rtl: true,
});

// debugger