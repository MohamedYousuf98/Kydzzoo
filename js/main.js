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
      behavior: "smooth",
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

// brands
$(document).ready(function () {
  $(".brands").slick({
    centermode:true,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    dots: false,
    arrows: false,
    autoplaySpeed: 5000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
        },
      },
    ],
  });

  $(".prev-brands-arrow").click(function () {
    $(".brands").slick("slickPrev");
  });

  $(".next-brands-arrow").click(function () {
    $(".brands").slick("slickNext");
  });
});

//Curses Slider
$(document).ready(function () {
  $(".courses-slider").slick({
    slidesToShow: 3, // Default number of slides to show
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024, // For tablets and smaller desktops
        settings: {
          slidesToShow: 2, // Show 2 slides at a time for tablets
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // For mobile devices
        settings: {
          slidesToShow: 1, // Show 1 slide at a time on mobile devices
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
        },
      },
    ],
  });

  // Custom navigation
  $(".prev-events-arrow").click(function () {
    $(".courses-slider").slick("slickPrev");
  });

  $(".next-events-arrow").click(function () {
    $(".courses-slider").slick("slickNext");
  });
});

// Our Books Slider
$(document).ready(function () {
  // Initialize the slider with default settings
  function initializeSlider() {
    $(".OurBooks-slider").slick({
      dots: true,
      infinite: true,
      slidesToShow: 3, // Default: Show 3 slides at a time
      slidesToScroll: 1,
      nextArrow: $(".next-arrow-books"),
      prevArrow: $(".prev-arrow-books"),
      customPaging: function (slider, i) {
        return '<div class="dot"></div>';
      },
      dotsClass: "custom-dots",
      autoplay: false, // Enable autoplay
      autoplaySpeed: 5000, // Autoplay speed in milliseconds
    });
  }

  // Update slider settings based on window width
  function updateSliderSettings() {
    if ($(window).width() <= 768) {
      $(".OurBooks-slider").slick(
        "slickSetOption",
        {
          slidesToShow: 1, // Show one slide at a time on mobile
          autoplay: true, // Ensure autoplay is enabled
          autoplaySpeed: 5000, // Autoplay speed in milliseconds
        },
        true
      );
    } else {
      $(".OurBooks-slider").slick(
        "slickSetOption",
        {
          slidesToShow: 3, // Show three slides at a time on larger screens
          autoplay: true, // Ensure autoplay is enabled
          autoplaySpeed: 5000, // Autoplay speed in milliseconds
        },
        true
      );
    }
  }

  // Initialize the slider
  initializeSlider();

  // Update slider settings on window resize with debounce
  let resizeTimeout;
  $(window).on("resize", function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function () {
      updateSliderSettings();
    }, 200); // Adjust the debounce time as needed
  });

  // Initial update
  updateSliderSettings();
});

//event slider
$(document).ready(function () {
  // Initialize Slick Slider
  $(".events-slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false, // Disable default arrows
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 5000,
        },
      },
    ],
  });

  // Custom navigation
  $(".prev-events-arrow").click(function () {
    $(".events-slider").slick("slickPrev");
  });

  $(".next-events-arrow").click(function () {
    $(".events-slider").slick("slickNext");
  });
});

// Customer-Love Slider
$(document).ready(function () {
  // Initialize Slick Slider
  $(".CustomerLove-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Disable default arrows
    dots: true,
    dotsClass: "custom-dots-customers", // Use custom dots class
    customPaging: function (slider, i) {
      return '<div class="dot-customers"></div>'; // Custom dot
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  });

  // Custom navigation
  $(".prev-events-arrow").click(function () {
    $(".CustomerLove-slider").slick("slickPrev");
  });

  $(".next-events-arrow").click(function () {
    $(".CustomerLove-slider").slick("slickNext");
  });
});
// Vedio Modal Home
document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("videoModal");
  var videoFrame = document.getElementById("videoFrame");

  // Ensure the modal is hidden initially
  modal.style.display = "none";

  window.openVideoModal = function () {
    if (modal.style.display === "none") {
      // Only open if not already visible
      videoFrame.src = "https://www.youtube.com/embed/YOUR_VIDEO_ID";
      modal.style.display = "flex";
    }
  };

  window.closeVideoModal = function () {
    videoFrame.src = "";
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      closeVideoModal();
    }
  };
});

/* Password */
function togglePassword(fieldId) {
  const field = document.getElementById(fieldId);
  const icon = field.parentElement.querySelector(".password-toggle");

  if (field.type === "password") {
    field.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    field.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}
// Pagination
document.addEventListener("DOMContentLoaded", function () {
  const pageLinks = document.querySelectorAll(".page-number");

  pageLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      pageLinks.forEach((link) => link.classList.remove("active"));

      this.classList.add("active");
    });
  });
});

// Reset Password Popup
// Function to show the popup
function showPopup(event) {
  event.preventDefault(); // Prevent form submission
  const popup = document.getElementById("popup");
  popup.classList.remove("d-none");
  setTimeout(() => popup.classList.add("show"), 10); // Delay for transition effect
}

// Function to hide the popup
function hidePopup() {
  const popup = document.getElementById("popup");
  popup.classList.remove("show");
  setTimeout(() => popup.classList.add("d-none"), 300); // Delay to match the transition duration
}

// Popup Buy Now
// Function to show the popup
function showPopup(event) {
  event.preventDefault(); // Prevent default action
  const popup = document.getElementById("popup");
  popup.classList.remove("d-none");
  setTimeout(() => popup.classList.add("show"), 10); // Delay for transition effect
}

// Function to hide the popup
function hidePopup() {
  const popup = document.getElementById("popup");
  popup.classList.remove("show");
  setTimeout(() => popup.classList.add("d-none"), 300); // Delay to match the transition duration
}

// Add event listener to the button
document.getElementById("buy-now-btn").addEventListener("click", showPopup);
