<<<<<<< HEAD
/*=========================================
AOS
=========================================*/

AOS.init({
  duration: 1000,
  once: false,
  easing: "ease-in-out",
});

/*=========================================
LOADER
=========================================*/

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";

    loader.style.visibility = "hidden";
  }, 1200);
});

/*=========================================
CUSTOM CURSOR
=========================================*/

const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  cursor2.style.left = e.clientX + "px";
  cursor2.style.top = e.clientY + "px";
});

/*=========================================
CURSOR HOVER EFFECT
=========================================*/

const links = document.querySelectorAll(
  "a,button,.btn,.btn2,.project-card,.skill-card,.experience-card,.certificate,.tech",
);

links.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    cursor.style.transform = "translate(-50%,-50%) scale(2)";

    cursor.style.background = "#ffffff";

    cursor2.style.transform = "translate(-50%,-50%) scale(1.6)";

    cursor2.style.borderColor = "#00e5ff";
  });

  item.addEventListener("mouseleave", () => {
    cursor.style.transform = "translate(-50%,-50%) scale(1)";

    cursor.style.background = "#00e5ff";

    cursor2.style.transform = "translate(-50%,-50%) scale(1)";

    cursor2.style.borderColor = "#00e5ff";
  });
});

/*=========================================
TYPING EFFECT
=========================================*/

new Typed(".typing", {
  strings: [
    "Full Stack Developer",

    "Machine Learning Enthusiast",

    "Java Developer",

    "Problem Solver",

    "Open Source Learner",
  ],

  typeSpeed: 80,

  backSpeed: 45,

  backDelay: 1500,

  loop: true,
});

/*=========================================
SCROLL PROGRESS BAR
=========================================*/

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {
  const totalHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const progress = (window.pageYOffset / totalHeight) * 100;

  progressBar.style.width = progress + "%";
});

/*=========================================
HEADER BLUR
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    header.style.background = "rgba(5,8,22,.85)";

    header.style.backdropFilter = "blur(25px)";

    header.style.boxShadow = "0 0 25px rgba(0,229,255,.08)";
  } else {
    header.style.background = "rgba(0,0,0,.15)";

    header.style.boxShadow = "none";
  }
});

/*=========================================
BUTTON RIPPLE
=========================================*/

document.querySelectorAll(".btn,.btn2").forEach((button) => {
  button.addEventListener("click", function (e) {
    const ripple = document.createElement("span");

    const rect = this.getBoundingClientRect();

    const size = Math.max(rect.width, rect.height);

    ripple.style.width = size + "px";

    ripple.style.height = size + "px";

    ripple.style.left = e.clientX - rect.left - size / 2 + "px";

    ripple.style.top = e.clientY - rect.top - size / 2 + "px";

    ripple.classList.add("ripple");

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 700);
  });
});

/*=========================================
MAGNETIC BUTTON
=========================================*/

document.querySelectorAll(".btn,.btn2").forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;

    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.15}px,${y * 0.15}px)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0,0)";
  });
});

/*=========================================
IMAGE FLOAT EFFECT
=========================================*/

const profile = document.querySelector(".profile-card");

if (profile) {
  window.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 40;

    const y = (window.innerHeight / 2 - e.clientY) / 40;

    profile.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  });
}

/*=========================================
CONSOLE MESSAGE
=========================================*/

console.log(
  "%cDesigned by Rajeswar",

  "color:#00e5ff;font-size:18px;font-weight:bold;",
);
/*=========================================
MOBILE MENU
=========================================*/

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
  nav.classList.toggle("show-menu");

  if (nav.classList.contains("show-menu")) {
    menu.classList.remove("ri-menu-3-line");
    menu.classList.add("ri-close-line");
  } else {
    menu.classList.remove("ri-close-line");
    menu.classList.add("ri-menu-3-line");
  }
});

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("show-menu");

    menu.classList.remove("ri-close-line");
    menu.classList.add("ri-menu-3-line");
  });
});

/*=========================================
SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,

        behavior: "smooth",
      });
    }
  });
});

/*=========================================
ACTIVE NAVIGATION
=========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;

    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

/*=========================================
SCROLL TO TOP BUTTON
=========================================*/

const scrollBtn = document.createElement("div");

scrollBtn.className = "scroll-top";

scrollBtn.innerHTML = '<i class="ri-rocket-fill"></i>';

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});

/*=========================================
SECTION FADE-IN
=========================================*/

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

document.querySelectorAll("section").forEach((sec) => {
  sec.classList.add("hidden-section");

  observer.observe(sec);
});

/*=========================================
PROJECT CARD HOVER
=========================================*/

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    card.style.background = `radial-gradient(circle at ${x}px ${y}px,
rgba(0,229,255,.18),
rgba(255,255,255,.05))`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.background = "rgba(255,255,255,.05)";
  });
});

/*=========================================
NAVBAR SHADOW
=========================================*/

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    header.classList.add("header-shadow");
  } else {
    header.classList.remove("header-shadow");
  }
});

/*=========================================
REVEAL CARDS
=========================================*/

const revealItems = document.querySelectorAll(
  ".skill-card,.experience-card,.project-card,.certificate,.counter-card,.info-box",
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("card-show");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

revealItems.forEach((item) => {
  item.classList.add("card-hidden");

  revealObserver.observe(item);
});
/*=========================================
PARTICLES.JS CONFIGURATION
=========================================*/
particlesJS("particles-js", {
  particles: {
    number: {
      value: 180,
      density: {
        enable: true,
        value_area: 900,
      },
    },

    color: {
      value: "#ff7b8a", // Light reddish particles
    },

    shape: {
      type: "circle",
    },

    opacity: {
      value: 0.6,
      random: true,
    },

    size: {
      value: 3,
      random: true,
    },

    line_linked: {
      enable: true,
      distance: 180,
      color: "#ff9aa9", // Light reddish spider lines
      opacity: 0.7,
      width: 1.3,
    },

    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },

  interactivity: {
    detect_on: "canvas",

    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },

      onclick: {
        enable: true,
        mode: "push",
      },

      resize: true,
    },

    modes: {
      grab: {
        distance: 220,
        line_linked: {
          opacity: 1,
        },
      },

      push: {
        particles_nb: 8,
      },
    },
  },

  retina_detect: true,
});

/*=========================================
PARALLAX BLOBS
=========================================*/

const blobs = document.querySelectorAll(".blob");

window.addEventListener("mousemove", (e) => {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;

  blobs.forEach((blob, index) => {
    let speed = (index + 1) * 18;

    blob.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
  });
});

/*=========================================
PARALLAX HERO
=========================================*/

const hero = document.querySelector(".hero");

window.addEventListener("mousemove", (e) => {
  let x = (window.innerWidth / 2 - e.clientX) / 40;
  let y = (window.innerHeight / 2 - e.clientY) / 40;

  hero.style.transform = `translate(${x}px,${y}px)`;
});

/*=========================================
FLOATING ANIMATION
=========================================*/

document.querySelectorAll(".tech").forEach((item, index) => {
  item.style.animation = `floatIcon ${3 + index * 0.4}s ease-in-out infinite`;
});

/*=========================================
GLOW EFFECT
=========================================*/

window.addEventListener("mousemove", (e) => {
  document.documentElement.style.setProperty("--mouse-x", e.clientX + "px");

  document.documentElement.style.setProperty("--mouse-y", e.clientY + "px");
});

/*=========================================
AUTO SCROLL REVEAL
=========================================*/

const hiddenItems = document.querySelectorAll(
  ".timeline-content,.contact-box,.certificate",
);

const reveal = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      entry.target.style.transition = "1s";
    }
  });
});

hiddenItems.forEach((item) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(80px)";

  reveal.observe(item);
});

/*=========================================
IMAGE ZOOM
=========================================*/

document.querySelectorAll(".project-image img").forEach((img) => {
  img.addEventListener("mousemove", (e) => {
    const rect = img.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;

    const y = ((e.clientY - rect.top) / rect.height) * 100;

    img.style.transformOrigin = `${x}% ${y}%`;

    img.style.transform = "scale(1.12)";
  });

  img.addEventListener("mouseleave", () => {
    img.style.transformOrigin = "center";

    img.style.transform = "scale(1)";
  });
});

/*=========================================
CONSOLE BRANDING
=========================================*/

console.log(
  "%cPortfolio Loaded Successfully 🚀",
  "color:#00e5ff;font-size:20px;font-weight:bold;",
);
/*=========================================
GSAP HERO ANIMATION
=========================================*/

gsap.registerPlugin(ScrollTrigger);

gsap.from("header", {
  y: -100,
  opacity: 0,
  duration: 1,
});

gsap.from(".hero-left h1", {
  x: -120,
  opacity: 0,
  duration: 1,
  delay: 0.3,
});

gsap.from(".hero-left h3", {
  x: -100,
  opacity: 0,
  duration: 1,
  delay: 0.6,
});

gsap.from(".hero-text", {
  x: -80,
  opacity: 0,
  duration: 1,
  delay: 0.8,
});

gsap.from(".buttons", {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: 1,
});

gsap.from(".social a", {
  y: 50,
  opacity: 0,
  duration: 0.6,
  stagger: 0.15,
  delay: 1.2,
});

gsap.from(".profile-card", {
  scale: 0.6,
  opacity: 0,
  duration: 1.2,
  delay: 0.7,
  ease: "back.out(1.7)",
});

/*=========================================
SECTION TITLE ANIMATION
=========================================*/

gsap.utils.toArray(".section-title").forEach((title) => {
  gsap.from(title, {
    scrollTrigger: {
      trigger: title,
      start: "top 85%",
    },

    opacity: 0,
    y: 70,
    duration: 1,
  });
});

/*=========================================
ABOUT SECTION
=========================================*/

gsap.from(".about-image", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 75%",
  },

  x: -120,
  opacity: 0,
  duration: 1.2,
});

gsap.from(".about-content", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 75%",
  },

  x: 120,
  opacity: 0,
  duration: 1.2,
});

/*=========================================
TIMELINE ANIMATION
=========================================*/

gsap.utils.toArray(".timeline-item").forEach((item, index) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 85%",
    },

    x: index % 2 === 0 ? -120 : 120,
    opacity: 0,
    duration: 1,
  });
});

/*=========================================
SKILL CARDS
=========================================*/

gsap.from(".skill-card", {
  scrollTrigger: {
    trigger: "#skills",
    start: "top 80%",
  },

  opacity: 0,
  y: 80,
  duration: 1,
  stagger: 0.25,
});
/*=========================================
ANIMATED COUNTERS
=========================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const counter = entry.target;
      const target = +counter.dataset.target;

      let current = 0;
      const increment = target / 80;

      const update = () => {
        current += increment;

        if (current < target) {
          counter.innerText = Math.floor(current);

          requestAnimationFrame(update);
        } else {
          counter.innerText = target;
        }
      };

      update();

      counterObserver.unobserve(counter);
    });
  },
  { threshold: 0.5 },
);

counters.forEach((counter) => {
  counterObserver.observe(counter);
});

/*=========================================
PROJECT CARD 3D TILT
=========================================*/

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 15;

    const rotateY = (x - rect.width / 2) / 15;

    card.style.transform = `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.04)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  });
});

/*=========================================
MAGNETIC PROJECT BUTTONS
=========================================*/

document.querySelectorAll(".project-btn").forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;

    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.25}px,${y * 0.25}px)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0,0)";
  });
});

/*=========================================
PROJECT STAGGER ANIMATION
=========================================*/

gsap.from(".project-card", {
  scrollTrigger: {
    trigger: "#projects",

    start: "top 80%",
  },

  y: 80,

  opacity: 0,

  duration: 1,

  stagger: 0.25,
});

/*=========================================
EXPERIENCE CARDS
=========================================*/

gsap.from(".experience-card", {
  scrollTrigger: {
    trigger: "#experience",

    start: "top 80%",
  },

  x: -100,

  opacity: 0,

  duration: 1,

  stagger: 0.25,
});
/*=========================================
CONTACT SECTION GSAP
=========================================*/

gsap.from(".contact-info", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top 80%",
  },

  x: -100,
  opacity: 0,
  duration: 1,
});

gsap.from(".contact-form", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top 80%",
  },

  x: 100,
  opacity: 0,
  duration: 1,
});

/*=========================================
CERTIFICATE CARDS
=========================================*/

gsap.from(".certificate", {
  scrollTrigger: {
    trigger: "#certifications",
    start: "top 80%",
  },

  opacity: 0,
  y: 80,
  duration: 1,
  stagger: 0.2,
});

/*=========================================
FOOTER ANIMATION
=========================================*/

gsap.from("footer", {
  scrollTrigger: {
    trigger: "footer",
    start: "top 95%",
  },

  opacity: 0,
  y: 60,
  duration: 1,
});

/*=========================================
FLOATING ORBS
=========================================*/

const orbs = document.querySelectorAll(".floating-orb");

window.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  orbs.forEach((orb, index) => {
    const speed = (index + 1) * 20;

    orb.style.transform = `translate(${x * speed}px,${y * speed}px)`;
  });
});

/*=========================================
MOUSE TRAIL
=========================================*/

const trail = [];

document.addEventListener("mousemove", (e) => {
  const dot = document.createElement("span");

  dot.className = "trail";

  dot.style.left = e.pageX + "px";
  dot.style.top = e.pageY + "px";

  document.body.appendChild(dot);

  trail.push(dot);

  setTimeout(() => {
    dot.remove();
  }, 500);
});

/*=========================================
CONTACT BUTTON EFFECT
=========================================*/

const sendBtn = document.querySelector(".send-btn");

if (sendBtn) {
  sendBtn.addEventListener("click", () => {
    sendBtn.innerHTML = '<i class="ri-check-line"></i> Message Sent';

    sendBtn.classList.add("success");

    setTimeout(() => {
      sendBtn.innerHTML = "Send Message";

      sendBtn.classList.remove("success");
    }, 2500);
  });
}

/*=========================================
PRELOADER TEXT
=========================================*/

const loaderText = document.querySelector(".loader-text");

if (loaderText) {
  const words = ["Loading", "Preparing Portfolio", "Almost Ready", "Welcome"];

  let i = 0;

  setInterval(() => {
    loaderText.textContent = words[i];

    i = (i + 1) % words.length;
  }, 700);
}

/*=========================================
SMOOTH REVEAL
=========================================*/

gsap.utils.toArray("section").forEach((sec) => {
  gsap.from(sec, {
    scrollTrigger: {
      trigger: sec,
      start: "top 85%",
    },

    opacity: 0,
    duration: 0.8,
  });
});

/*=========================================
CONSOLE MESSAGE
=========================================*/

console.log(
  "%cPortfolio Developed Successfully 🚀",

  "font-size:18px;color:#00e5ff;font-weight:bold;",
);
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  if (loader) {
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";

    setTimeout(() => {
      loader.remove();
    }, 500);
  }
});
=======
/*=========================================
AOS
=========================================*/

AOS.init({
  duration: 1000,
  once: false,
  easing: "ease-in-out",
});

/*=========================================
LOADER
=========================================*/

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";

    loader.style.visibility = "hidden";
  }, 1200);
});

/*=========================================
CUSTOM CURSOR
=========================================*/

const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  cursor2.style.left = e.clientX + "px";
  cursor2.style.top = e.clientY + "px";
});

/*=========================================
CURSOR HOVER EFFECT
=========================================*/

const links = document.querySelectorAll(
  "a,button,.btn,.btn2,.project-card,.skill-card,.experience-card,.certificate,.tech",
);

links.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    cursor.style.transform = "translate(-50%,-50%) scale(2)";

    cursor.style.background = "#ffffff";

    cursor2.style.transform = "translate(-50%,-50%) scale(1.6)";

    cursor2.style.borderColor = "#00e5ff";
  });

  item.addEventListener("mouseleave", () => {
    cursor.style.transform = "translate(-50%,-50%) scale(1)";

    cursor.style.background = "#00e5ff";

    cursor2.style.transform = "translate(-50%,-50%) scale(1)";

    cursor2.style.borderColor = "#00e5ff";
  });
});

/*=========================================
TYPING EFFECT
=========================================*/

new Typed(".typing", {
  strings: [
    "Full Stack Developer",

    "Machine Learning Enthusiast",

    "Java Developer",

    "Problem Solver",

    "Open Source Learner",
  ],

  typeSpeed: 80,

  backSpeed: 45,

  backDelay: 1500,

  loop: true,
});

/*=========================================
SCROLL PROGRESS BAR
=========================================*/

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {
  const totalHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const progress = (window.pageYOffset / totalHeight) * 100;

  progressBar.style.width = progress + "%";
});

/*=========================================
HEADER BLUR
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    header.style.background = "rgba(5,8,22,.85)";

    header.style.backdropFilter = "blur(25px)";

    header.style.boxShadow = "0 0 25px rgba(0,229,255,.08)";
  } else {
    header.style.background = "rgba(0,0,0,.15)";

    header.style.boxShadow = "none";
  }
});

/*=========================================
BUTTON RIPPLE
=========================================*/

document.querySelectorAll(".btn,.btn2").forEach((button) => {
  button.addEventListener("click", function (e) {
    const ripple = document.createElement("span");

    const rect = this.getBoundingClientRect();

    const size = Math.max(rect.width, rect.height);

    ripple.style.width = size + "px";

    ripple.style.height = size + "px";

    ripple.style.left = e.clientX - rect.left - size / 2 + "px";

    ripple.style.top = e.clientY - rect.top - size / 2 + "px";

    ripple.classList.add("ripple");

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 700);
  });
});

/*=========================================
MAGNETIC BUTTON
=========================================*/

document.querySelectorAll(".btn,.btn2").forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;

    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.15}px,${y * 0.15}px)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0,0)";
  });
});

/*=========================================
IMAGE FLOAT EFFECT
=========================================*/

const profile = document.querySelector(".profile-card");

if (profile) {
  window.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 40;

    const y = (window.innerHeight / 2 - e.clientY) / 40;

    profile.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  });
}

/*=========================================
CONSOLE MESSAGE
=========================================*/

console.log(
  "%cDesigned by Rajeswar",

  "color:#00e5ff;font-size:18px;font-weight:bold;",
);
/*=========================================
MOBILE MENU
=========================================*/

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
  nav.classList.toggle("show-menu");

  if (nav.classList.contains("show-menu")) {
    menu.classList.remove("ri-menu-3-line");
    menu.classList.add("ri-close-line");
  } else {
    menu.classList.remove("ri-close-line");
    menu.classList.add("ri-menu-3-line");
  }
});

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("show-menu");

    menu.classList.remove("ri-close-line");
    menu.classList.add("ri-menu-3-line");
  });
});

/*=========================================
SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,

        behavior: "smooth",
      });
    }
  });
});

/*=========================================
ACTIVE NAVIGATION
=========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;

    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

/*=========================================
SCROLL TO TOP BUTTON
=========================================*/

const scrollBtn = document.createElement("div");

scrollBtn.className = "scroll-top";

scrollBtn.innerHTML = '<i class="ri-rocket-fill"></i>';

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});

/*=========================================
SECTION FADE-IN
=========================================*/

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

document.querySelectorAll("section").forEach((sec) => {
  sec.classList.add("hidden-section");

  observer.observe(sec);
});

/*=========================================
PROJECT CARD HOVER
=========================================*/

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    card.style.background = `radial-gradient(circle at ${x}px ${y}px,
rgba(0,229,255,.18),
rgba(255,255,255,.05))`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.background = "rgba(255,255,255,.05)";
  });
});

/*=========================================
NAVBAR SHADOW
=========================================*/

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    header.classList.add("header-shadow");
  } else {
    header.classList.remove("header-shadow");
  }
});

/*=========================================
REVEAL CARDS
=========================================*/

const revealItems = document.querySelectorAll(
  ".skill-card,.experience-card,.project-card,.certificate,.counter-card,.info-box",
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("card-show");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

revealItems.forEach((item) => {
  item.classList.add("card-hidden");

  revealObserver.observe(item);
});
/*=========================================
PARTICLES.JS CONFIGURATION
=========================================*/
particlesJS("particles-js", {
  particles: {
    number: {
      value: 180,
      density: {
        enable: true,
        value_area: 900,
      },
    },

    color: {
      value: "#ff7b8a", // Light reddish particles
    },

    shape: {
      type: "circle",
    },

    opacity: {
      value: 0.6,
      random: true,
    },

    size: {
      value: 3,
      random: true,
    },

    line_linked: {
      enable: true,
      distance: 180,
      color: "#ff9aa9", // Light reddish spider lines
      opacity: 0.7,
      width: 1.3,
    },

    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },

  interactivity: {
    detect_on: "canvas",

    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },

      onclick: {
        enable: true,
        mode: "push",
      },

      resize: true,
    },

    modes: {
      grab: {
        distance: 220,
        line_linked: {
          opacity: 1,
        },
      },

      push: {
        particles_nb: 8,
      },
    },
  },

  retina_detect: true,
});

/*=========================================
PARALLAX BLOBS
=========================================*/

const blobs = document.querySelectorAll(".blob");

window.addEventListener("mousemove", (e) => {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;

  blobs.forEach((blob, index) => {
    let speed = (index + 1) * 18;

    blob.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
  });
});

/*=========================================
PARALLAX HERO
=========================================*/

const hero = document.querySelector(".hero");

window.addEventListener("mousemove", (e) => {
  let x = (window.innerWidth / 2 - e.clientX) / 40;
  let y = (window.innerHeight / 2 - e.clientY) / 40;

  hero.style.transform = `translate(${x}px,${y}px)`;
});

/*=========================================
FLOATING ANIMATION
=========================================*/

document.querySelectorAll(".tech").forEach((item, index) => {
  item.style.animation = `floatIcon ${3 + index * 0.4}s ease-in-out infinite`;
});

/*=========================================
GLOW EFFECT
=========================================*/

window.addEventListener("mousemove", (e) => {
  document.documentElement.style.setProperty("--mouse-x", e.clientX + "px");

  document.documentElement.style.setProperty("--mouse-y", e.clientY + "px");
});

/*=========================================
AUTO SCROLL REVEAL
=========================================*/

const hiddenItems = document.querySelectorAll(
  ".timeline-content,.contact-box,.certificate",
);

const reveal = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      entry.target.style.transition = "1s";
    }
  });
});

hiddenItems.forEach((item) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(80px)";

  reveal.observe(item);
});

/*=========================================
IMAGE ZOOM
=========================================*/

document.querySelectorAll(".project-image img").forEach((img) => {
  img.addEventListener("mousemove", (e) => {
    const rect = img.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;

    const y = ((e.clientY - rect.top) / rect.height) * 100;

    img.style.transformOrigin = `${x}% ${y}%`;

    img.style.transform = "scale(1.12)";
  });

  img.addEventListener("mouseleave", () => {
    img.style.transformOrigin = "center";

    img.style.transform = "scale(1)";
  });
});

/*=========================================
CONSOLE BRANDING
=========================================*/

console.log(
  "%cPortfolio Loaded Successfully 🚀",
  "color:#00e5ff;font-size:20px;font-weight:bold;",
);
/*=========================================
GSAP HERO ANIMATION
=========================================*/

gsap.registerPlugin(ScrollTrigger);

gsap.from("header", {
  y: -100,
  opacity: 0,
  duration: 1,
});

gsap.from(".hero-left h1", {
  x: -120,
  opacity: 0,
  duration: 1,
  delay: 0.3,
});

gsap.from(".hero-left h3", {
  x: -100,
  opacity: 0,
  duration: 1,
  delay: 0.6,
});

gsap.from(".hero-text", {
  x: -80,
  opacity: 0,
  duration: 1,
  delay: 0.8,
});

gsap.from(".buttons", {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: 1,
});

gsap.from(".social a", {
  y: 50,
  opacity: 0,
  duration: 0.6,
  stagger: 0.15,
  delay: 1.2,
});

gsap.from(".profile-card", {
  scale: 0.6,
  opacity: 0,
  duration: 1.2,
  delay: 0.7,
  ease: "back.out(1.7)",
});

/*=========================================
SECTION TITLE ANIMATION
=========================================*/

gsap.utils.toArray(".section-title").forEach((title) => {
  gsap.from(title, {
    scrollTrigger: {
      trigger: title,
      start: "top 85%",
    },

    opacity: 0,
    y: 70,
    duration: 1,
  });
});

/*=========================================
ABOUT SECTION
=========================================*/

gsap.from(".about-image", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 75%",
  },

  x: -120,
  opacity: 0,
  duration: 1.2,
});

gsap.from(".about-content", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 75%",
  },

  x: 120,
  opacity: 0,
  duration: 1.2,
});

/*=========================================
TIMELINE ANIMATION
=========================================*/

gsap.utils.toArray(".timeline-item").forEach((item, index) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 85%",
    },

    x: index % 2 === 0 ? -120 : 120,
    opacity: 0,
    duration: 1,
  });
});

/*=========================================
SKILL CARDS
=========================================*/

gsap.from(".skill-card", {
  scrollTrigger: {
    trigger: "#skills",
    start: "top 80%",
  },

  opacity: 0,
  y: 80,
  duration: 1,
  stagger: 0.25,
});
/*=========================================
ANIMATED COUNTERS
=========================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const counter = entry.target;
      const target = +counter.dataset.target;

      let current = 0;
      const increment = target / 80;

      const update = () => {
        current += increment;

        if (current < target) {
          counter.innerText = Math.floor(current);

          requestAnimationFrame(update);
        } else {
          counter.innerText = target;
        }
      };

      update();

      counterObserver.unobserve(counter);
    });
  },
  { threshold: 0.5 },
);

counters.forEach((counter) => {
  counterObserver.observe(counter);
});

/*=========================================
PROJECT CARD 3D TILT
=========================================*/

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 15;

    const rotateY = (x - rect.width / 2) / 15;

    card.style.transform = `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.04)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  });
});

/*=========================================
MAGNETIC PROJECT BUTTONS
=========================================*/

document.querySelectorAll(".project-btn").forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;

    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.25}px,${y * 0.25}px)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0,0)";
  });
});

/*=========================================
PROJECT STAGGER ANIMATION
=========================================*/

gsap.from(".project-card", {
  scrollTrigger: {
    trigger: "#projects",

    start: "top 80%",
  },

  y: 80,

  opacity: 0,

  duration: 1,

  stagger: 0.25,
});

/*=========================================
EXPERIENCE CARDS
=========================================*/

gsap.from(".experience-card", {
  scrollTrigger: {
    trigger: "#experience",

    start: "top 80%",
  },

  x: -100,

  opacity: 0,

  duration: 1,

  stagger: 0.25,
});
/*=========================================
CONTACT SECTION GSAP
=========================================*/

gsap.from(".contact-info", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top 80%",
  },

  x: -100,
  opacity: 0,
  duration: 1,
});

gsap.from(".contact-form", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top 80%",
  },

  x: 100,
  opacity: 0,
  duration: 1,
});

/*=========================================
CERTIFICATE CARDS
=========================================*/

gsap.from(".certificate", {
  scrollTrigger: {
    trigger: "#certifications",
    start: "top 80%",
  },

  opacity: 0,
  y: 80,
  duration: 1,
  stagger: 0.2,
});

/*=========================================
FOOTER ANIMATION
=========================================*/

gsap.from("footer", {
  scrollTrigger: {
    trigger: "footer",
    start: "top 95%",
  },

  opacity: 0,
  y: 60,
  duration: 1,
});

/*=========================================
FLOATING ORBS
=========================================*/

const orbs = document.querySelectorAll(".floating-orb");

window.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  orbs.forEach((orb, index) => {
    const speed = (index + 1) * 20;

    orb.style.transform = `translate(${x * speed}px,${y * speed}px)`;
  });
});

/*=========================================
MOUSE TRAIL
=========================================*/

const trail = [];

document.addEventListener("mousemove", (e) => {
  const dot = document.createElement("span");

  dot.className = "trail";

  dot.style.left = e.pageX + "px";
  dot.style.top = e.pageY + "px";

  document.body.appendChild(dot);

  trail.push(dot);

  setTimeout(() => {
    dot.remove();
  }, 500);
});

/*=========================================
CONTACT BUTTON EFFECT
=========================================*/

const sendBtn = document.querySelector(".send-btn");

if (sendBtn) {
  sendBtn.addEventListener("click", () => {
    sendBtn.innerHTML = '<i class="ri-check-line"></i> Message Sent';

    sendBtn.classList.add("success");

    setTimeout(() => {
      sendBtn.innerHTML = "Send Message";

      sendBtn.classList.remove("success");
    }, 2500);
  });
}

/*=========================================
PRELOADER TEXT
=========================================*/

const loaderText = document.querySelector(".loader-text");

if (loaderText) {
  const words = ["Loading", "Preparing Portfolio", "Almost Ready", "Welcome"];

  let i = 0;

  setInterval(() => {
    loaderText.textContent = words[i];

    i = (i + 1) % words.length;
  }, 700);
}

/*=========================================
SMOOTH REVEAL
=========================================*/

gsap.utils.toArray("section").forEach((sec) => {
  gsap.from(sec, {
    scrollTrigger: {
      trigger: sec,
      start: "top 85%",
    },

    opacity: 0,
    duration: 0.8,
  });
});

/*=========================================
CONSOLE MESSAGE
=========================================*/

console.log(
  "%cPortfolio Developed Successfully 🚀",

  "font-size:18px;color:#00e5ff;font-weight:bold;",
);
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  if (loader) {
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";

    setTimeout(() => {
      loader.remove();
    }, 500);
  }
});
>>>>>>> a887595ee6f9328199850fe2aa08c1116e5e5cff
