// SECTION 1: DOM Elements Selection
// Grab all elements needed for mouse tracking and interactions
const pointer = document.querySelector(".pointer");
const cursorBox = document.querySelector(".cursor-box");
const heroSection = document.querySelector(".hero");
const menuBtn = document.querySelector(".menuBtn");
const fixedMenu = document.querySelector(".fixed-menu");

// Flag to track whether the full-screen menu is open or closed
let isMenuOpen = false;

// SECTION 2: Custom Mouse Pointer & Video Hover Tracker
// Listen to mouse movement across the screen
document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  // Move the custom blue dot cursor smoothly with hardware acceleration
  pointer.style.transform = `translate(${x - 10}px, ${y - 10}px)`;

  // Check if mouse is currently inside the Hero section boundaries
  const heroBounds = heroSection.getBoundingClientRect();
  const isInsideHero = 
    x >= heroBounds.left &&
    x <= heroBounds.right &&
    y >= heroBounds.top &&
    y <= heroBounds.bottom;

  // Toggle visible elements based on cursor position
  if (isInsideHero) {
    // Hide default blue dot pointer and display floating video preview box
    pointer.style.opacity = "0";
    cursorBox.style.opacity = "1";

    // Position video box slightly offset relative to cursor pointer
    cursorBox.style.transform = `translate(${x + 20}px, ${y + 20}px)`;
  } else {
    // Show normal blue dot pointer and hide video preview box
    pointer.style.opacity = "1";
    cursorBox.style.opacity = "0";
  }
});

// SECTION 3: Fullscreen Navigation Menu Toggle
// Slide down/up full menu overlay on 'MENU' button click
menuBtn.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen; // Toggle Boolean status

  if (isMenuOpen) {
    fixedMenu.style.top = "0%";
    menuBtn.textContent = "CLOSE";
  } else {
    fixedMenu.style.top = "-100%";
    menuBtn.textContent = "MENU";
  }
});