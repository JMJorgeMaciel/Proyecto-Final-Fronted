

     // MENU MOBILE
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {

  mobileMenu.classList.toggle("hidden");

  if (!mobileMenu.classList.contains("hidden")) {

    mobileMenu.classList.add("flex", "flex-col");

    gsap.fromTo(mobileMenu,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.4 }
    );

  } else {

    mobileMenu.classList.remove("flex", "flex-col");

  }

});




// ---------------------------------------------------------

gsap.registerPlugin(ScrollTrigger);

// 🔹 HERO (entrada cinematográfica)
gsap.from("#inicio h2", {
  opacity: 0,
  y: 100,
  duration: 1.2,
  ease: "power4.out"
});

gsap.from("#inicio p", {
  opacity: 0,
  y: 60,
  duration: 1,
  delay: 0.3,
  ease: "power3.out"
});

gsap.from("#inicio a", {
  opacity: 0,
  scale: 0.8,
  duration: 0.8,
  delay: 0.6,
  ease: "back.out(1.7)"
});

// 🔹 REVEAL SUAVE POR SECCIONES  -------------------
gsap.utils.toArray("section").forEach(section => {
  gsap.from(section.querySelectorAll("h3, p, img"), {
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out",
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    }
  });
});
// 🔹 PARALLAX EN IMÁGENES (PRO)
gsap.utils.toArray("img").forEach(img => {
  gsap.to(img, {
    y: -40,
    ease: "none",
    scrollTrigger: {
      trigger: img,
      scrub: true
    }
  });
});

// 🔹 CARDS HOVER PREMIUM
document.querySelectorAll(".bg-gray-800").forEach(card => {

  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      y: -10,
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out"
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      y: 0,
      scale: 1,
      duration: 0.3
    });
  });

});

// 🔹 BOTÓN WHATSAPP FLOAT
gsap.from("a[href*='wa.me']", {
  scale: 0,
  duration: 0.6,
  ease: "back.out(2)",
  delay: 1
});

// 🔹 NAVBAR APARECE AL SCROLL
gsap.from("header", {
  y: -80,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out"
});

// 🔹 MENÚ MOBILE




gsap.utils.toArray(".solution-card").forEach(card => {
  gsap.from(card, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
    }
  });
});