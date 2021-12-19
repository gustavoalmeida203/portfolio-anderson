


window.onscroll = function() {fixedHeader()};

// Get the header
var header = document.getElementById("header-container");

// Get the offset position of the navbar
var sticky = header.offsetTop;

function fixedHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("fixed-header");
  } else {
    header.classList.remove("fixed-header");
  }
} 