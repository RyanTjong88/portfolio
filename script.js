// Create object to hold everything {Namespacing}
const portfolio = {};

// Create a scroll down and up function
portfolio.scroll = () => {
  $(
    "#about-me, #skills, #portfolio, #contact, #mobile-about-me, #mobile-skills, #mobile-portfolio, #mobile-contact"
  ).click(function (e) {
    let { id } = e.target;

    const scrollToSection = (section, time) => {
      return $("html, body").animate(
        {
          scrollTop: $(section).offset().top,
        },
        time
      );
    };

    switch (id) {
      case "about-me" || "mobile-about-me":
        scrollToSection("#about", 1500);
        break;
      case "skills" || "mobile-skills":
        scrollToSection("#skills-sec", 2000);
        break;
      case "portfolio" || "mobile-portfolio":
        scrollToSection("#portfolio-sec", 2500);
        break;
      case "contact" || "mobile-contact":
        scrollToSection("#contact-sec", 4000);
        break;
    }
  });
};

portfolio.init = () => {
  const { scroll } = portfolio;
  scroll();
};

$(document).ready(function () {
  portfolio.init();
});
