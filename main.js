
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav--link");
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SWIPER PROJECTS ===============*/

let swiperProject = new Swiper(".projects--container", {
  loop: true,
  spaceBetween: 24,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // // If we need pagination
  // pagination: {
  //   el: ".swiper-pagination",
  //   type: "fraction",
  //   formatFractionCurrent: (number) => {
  //     return "0" + number;
  //   },
  //   formatFractionTotal: (number) => {
  //     return "0" + number;
  //   },
  // },

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    formatFractionCurrent: (number) => {
      return number.toString().padStart(2, "0");
    },
    formatFractionTotal: (number) => {
      return number >= 10
        ? number.toString()
        : number.toString().padStart(3, "0");
    },
  },

  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: -56,
    },
  },
});

/*=============== SWIPER Video play ===============*/

let videos = document.querySelectorAll(".swiper-slide .videos");

videos.forEach((elem) => {
  elem.addEventListener(
    "mouseenter",
    () => {
      elem.play();
      elem.playbackRate = 2.0;
    },
    { passive: true }
  );
  elem.addEventListener("mouseleave", () => {
    elem.pause();
  });
});

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial--container", {
  grabCursor: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactProject = document.getElementById("contact-project"),
  contactMessage = document.getElementById("contact-message");

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      contactName.value === "" ||
      contactEmail.value === "" ||
      contactProject.value === ""
    ) {
      contactMessage.classList.remove("color-blue");
      contactMessage.classList.add("color-red");
      contactMessage.textContent = "Write all the input Fields 📩";
    } else {
      emailjs.sendForm("service_mvc5yc6", "template_bhriwz4", "#contact-form",'6owu7X00dNO_G4bBB')
      .then(() => {
        contactMessage.classList.add('color-blue')
        contactMessage.textContent = 'Message sent ✅'
        setTimeout(() => {
          contactMessage.textContent = ''
        }, 5000)
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        contactMessage.classList.remove("color-blue");
        contactMessage.classList.add("color-red");
        contactMessage.textContent = "Error sending message. Please try again later.";
      });
    }
  };
  
contactForm.addEventListener("submit", sendEmail);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollDown = window.scrollY;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav--menu a[href*=" + sectionId + "]"
      );
    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset:true,
});
sr.reveal(`.home--data, .projects--container,  .testimonial--container, .footer--container`)
sr.reveal(`.home--info div`, {
  delay: 600,
  origin: "bottom",
  interval: 100,
})
sr.reveal(`.skills--content:nth-child(1), .contact--content:nth-child(1)`, {
  origin: "left",
})
sr.reveal(`.skills--content:nth-child(2),  .contact--content:nth-child(2)`, {
  origin: "right",
})
sr.reveal(` .qualification--content, .services--card`, {
  interval:100,
})
document.onkeydown = function(e) {
  if (e.keyCode == 123 || // F12
      (e.ctrlKey && e.shiftKey && (e.keyCode == 'I'.charCodeAt(0) || e.keyCode == 'J'.charCodeAt(0))) || // Ctrl+Shift+I or Ctrl+Shift+J
      (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) // Ctrl+U
  ) {
      return false;
  }
};
var cursor = document.querySelector('.cursor');
var cursor2 = document.querySelector('.cursor2');
document.addEventListener('mousemove',function(e){
cursor.style.cssText = cursor2.style.cssText = "left:" + e.clientX + "px; top:" + e.clientY + "px;";
})
