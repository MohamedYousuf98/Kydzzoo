  // Loader
  window.addEventListener("load", function () {
    // Hide loader
    document.getElementById("loader").style.display = "none";
    // Show content
    document.querySelector(".content").style.display = "block";
  });


   // Back to Top
  let backtotop = document.querySelector(".back-to-top");
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.classList.add("active");
    } else {
      backtotop.classList.remove("active");
    }
  };

  // Show/hide the back to top button based on scroll
  window.addEventListener("load", toggleBacktotop);
  window.addEventListener("scroll", toggleBacktotop);

  // Add smooth scroll to top behavior
  backtotop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

  

function toggleMenu() {
  const mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname;
  console.log("Current path:", currentPath);

  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach((link) => {
    const linkPath = new URL(link.href).pathname;
    console.log("Link path:", linkPath);

    link.classList.remove("active");
    if (linkPath === currentPath) {
      link.classList.add("active");
    }
  });
});
