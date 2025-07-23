/**
 * @file main.js
 * @description This file contains the main logic for the ShayariGenerator website,
 * including Shayari generation, copy, share, download functionalities,
 * template application, and dark mode toggle.
 */

// Import shayariData and templates from their respective modules
// IMPORTANT: These paths are relative to main.js.
// If main.js in js/ folder, then poetdata.js and templates.js are in the same folder.
import { shayariData } from './poetdata.js';
import { templates } from './templates.js';

// --- Global Variables ---
// Current selected template ID, initialized to 1 (first template)
let currentTemplate = 1;

// --- DOM Element References ---
// Selectors for form elements
const poetSelect = document.getElementById("poet");
const langSelect = document.getElementById("lang");
const generateBtn = document.getElementById("generateBtn");

// Selectors for output and action buttons
const output = document.getElementById("output");
const copyBtn = document.getElementById("copyBtn");
const shareBtn = document.getElementById("shareBtn");
const downloadBtn = document.getElementById("downloadBtn");
const shayariCard = document.getElementById("shayari-card");

// Selector for template selection area
const templateSelector = document.getElementById("templateSelector");

// Selectors for dark mode toggle (desktop)
const darkModeToggle = document.getElementById("darkModeToggle");
const htmlElement = document.documentElement; // Represents the <html> tag

// Mobile menu elements
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const mobileMenuClose = document.getElementById("mobileMenuClose");
const mobileMenu = document.getElementById("mobileMenu");
const mobileTemplatesLink = document.getElementById("mobileTemplatesLink");
const mobileDarkModeToggle = document.getElementById("mobileDarkModeToggle");


// --- Utility Functions ---

/**
 * Displays a custom alert message to the user.
 * This replaces the native `alert()` to avoid blocking the UI in an iframe.
 * @param {string} message - The message to display in the alert.
 */
function showCustomAlert(message) {
  // Create a modal container
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50';
  modal.innerHTML = `
    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-sm w-full text-center transform scale-95 transition-transform duration-200 ease-out">
      <p class="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">${message}</p>
      <button id="alertCloseBtn" class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition focus:outline-none focus:ring-2 focus:ring-indigo-400 transform hover:scale-105 active:scale-95">
        OK
      </button>
    </div>
  `;
  document.body.appendChild(modal);

  // Animate the modal in
  setTimeout(() => {
    modal.querySelector('div').classList.remove('scale-95');
    modal.querySelector('div').classList.add('scale-100');
  }, 10);

  // Close button functionality
  const alertCloseBtn = modal.querySelector('#alertCloseBtn');
  alertCloseBtn.addEventListener('click', () => {
    // Animate the modal out before removing
    modal.querySelector('div').classList.remove('scale-100');
    modal.querySelector('div').classList.add('scale-95');
    modal.classList.add('opacity-0'); // Fade out background

    modal.addEventListener('transitionend', () => {
      modal.remove();
    }, { once: true }); // Remove after transition ends
  });
}


/**
 * @function generateShayari
 * @description Generates a random shayari based on the selected poet and language
 * and displays it in the output area.
 */
function generateShayari() {
  const poet = poetSelect.value;
  const lang = langSelect.value;

  // Check if data exists for the selected poet and language
  if (!shayariData[poet] || !shayariData[poet][lang]) {
    output.innerText = "Sorry, Shayari not available for this selection.";
    return;
  }

  // Get the list of shayaris for the selection
  const shayariList = shayariData[poet][lang];
  // Generate a random index
  const randomIndex = Math.floor(Math.random() * shayariList.length);
  // Get the random shayari
  const randomShayari = shayariList[randomIndex];

  // Update the output element with the generated shayari
  output.innerText = randomShayari;
  // Focus the parent element of the output for better accessibility (screen readers)
  output.parentElement.focus();
}

/**
 * @function copyShayari
 * @description Copies the displayed shayari text to the user's clipboard.
 * Provides feedback to the user via a custom alert.
 */
function copyShayari() {
  const text = output.innerText.trim();

  // Validate if there's actual shayari to copy
  if (!text || text === "Yahan shayari dikhegi..." || text === "Sorry, Shayari not available for this selection.") {
    showCustomAlert("Please generate a Shayari first.");
    return;
  }

  // Use navigator.clipboard.writeText for modern browsers
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text)
      .then(() => {
        showCustomAlert("Shayari Copied!");
      })
      .catch(err => {
        console.error("Failed to copy Shayari using clipboard API:", err);
        // Fallback for older browsers or if clipboard API fails
        fallbackCopyTextToClipboard(text);
      });
  } else {
    // Fallback for browsers that do not support navigator.clipboard
    fallbackCopyTextToClipboard(text);
  }
}

/**
 * @function fallbackCopyTextToClipboard
 * @description Fallback function to copy text to clipboard for older browsers.
 * @param {string} text - The text to copy.
 */
function fallbackCopyTextToClipboard(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  // Make the textarea invisible
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  textArea.style.top = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showCustomAlert("Shayari Copied!");
  } catch (err) {
    console.error("Failed to copy Shayari using execCommand:", err);
    showCustomAlert("Failed to copy Shayari. Please copy manually.");
  }
  document.body.removeChild(textArea);
}


/**
 * @function shareShayari
 * @description Shares the displayed shayari text using the Web Share API.
 * Provides feedback to the user via a custom alert.
 */
function shareShayari() {
  const text = output.innerText.trim();

  // Validate if there's actual shayari to share
  if (!text || text === "Yahan shayari dikhegi..." || text === "Sorry, Shayari not available for this selection.") {
    showCustomAlert("Please generate a Shayari first.");
    return;
  }

  // Check if Web Share API is supported by the browser
  if (navigator.share) {
    navigator.share({
      title: "ShayariVerse", // Title for the share dialog
      text: text,           // The shayari text to share
      url: window.location.href // Current page URL
    })
    .then(() => console.log("Shayari Shared!"))
    .catch((error) => {
      // User might have cancelled the share operation
      if (error.name !== 'AbortError') {
        console.error("Sharing failed:", error);
        showCustomAlert("Sharing failed or was cancelled.");
      }
    });
  } else {
    // Fallback for browsers that do not support Web Share API
    showCustomAlert("Web Share API is not supported in your browser. Please copy the shayari manually.");
  }
}

/**
 * @function downloadShayari
 * @description Downloads the shayari card as a PNG image using html2canvas.
 * Temporarily resizes the card to 1080x1080 for capture, then restores original styles.
 * Provides feedback to the user via a custom alert.
 */
async function downloadShayari() {
  const text = output.innerText.trim();

  // Validate if there's actual shayari to download
  if (!text || text === "Yahan shayari dikhegi..." || text === "Sorry, Shayari not available for this selection.") {
    showCustomAlert("Please generate a Shayari first.");
    return;
  }

  // Store original styles to restore them later
  const originalStyles = {
    width: shayariCard.style.width,
    height: shayariCard.style.height,
    maxWidth: shayariCard.style.maxWidth,
    aspectRatio: shayariCard.style.aspectRatio,
    padding: shayariCard.style.padding,
    fontSize: output.style.fontSize, // Capture font size of the output element
    lineHeight: output.style.lineHeight,
    letterSpacing: output.style.letterSpacing,
    wordSpacing: output.style.wordSpacing,
    textAlign: output.style.textAlign, // Store original text-align
    direction: output.style.direction, // Store original direction
    unicodeBidi: output.style.unicodeBidi, // Store original unicode-bidi
    boxShadow: shayariCard.style.boxShadow, // Store original box-shadow
    fontFamily: output.style.fontFamily // Store original font-family
  };

  // Apply temporary styles for 1080x1080 capture
  // Use `!important` to override Tailwind's utility classes if necessary
  shayariCard.style.width = '1080px';
  shayariCard.style.height = '1080px';
  shayariCard.style.maxWidth = '1080px';
  shayariCard.style.aspectRatio = '1 / 1';
  shayariCard.style.padding = '48px'; // Corresponds to p-12 (12 * 4 = 48px)
  shayariCard.style.boxShadow = 'none'; // Remove shadow for download

  // Apply text formatting for better readability in Urdu/Arabic for download
  output.style.fontSize = '2.2rem'; // Adjusted for better fit in 1080x1080
  output.style.lineHeight = '1.4';
  // output.style.letterSpacing = '0.5px'; // letter spacing between letter
  output.style.wordSpacing = '2px';
  output.style.textAlign = 'center'; // Center align text
  // output.style.direction = 'rtl'; // Right-to-left for Urdu/Arabic
  output.style.unicodeBidi = 'embed'; // Ensure proper bidirectional text handling
  // NEW: Use a font stack known for better Arabic/Urdu rendering in html2canvas
  output.style.fontFamily = "'Scheherazade New', 'Noto Naskh Arabic', 'Lateef', 'Amiri', serif";
  output.style.textRendering = 'optimizeLegibility'; // Improve text rendering


  // Add a temporary class to ensure text scales appropriately for download
  shayariCard.classList.add('scaled-for-download');

  try {
    // Use html2canvas to render the shayariCard element as a canvas
    const canvas = await html2canvas(shayariCard, {
      backgroundColor: null, // Keep background transparent if it's not explicitly set by template
      scale: window.devicePixelRatio || 1, // Use device pixel ratio for higher resolution images
      useCORS: true // Enable CORS if you have external images (though not used here)
    });

    // Create a temporary link element
    const link = document.createElement("a");
    link.download = "shayari.png"; // Set the download filename
    link.href = canvas.toDataURL("image/png"); // Get data URL of the canvas as PNG
    document.body.appendChild(link); // Append to body (required for Firefox)
    link.click(); // Programmatically click the link to trigger download
    document.body.removeChild(link); // Remove the link after click
    showCustomAlert("Shayari Downloaded!");

  } catch (error) {
    console.error("Failed to download image:", error);
    showCustomAlert("Failed to download image. Please try again.");
  } finally {
    // Restore original styles
    shayariCard.style.width = originalStyles.width;
    shayariCard.style.height = originalStyles.height;
    shayariCard.style.maxWidth = originalStyles.maxWidth;
    shayariCard.style.aspectRatio = originalStyles.aspectRatio;
    shayariCard.style.padding = originalStyles.padding;
    shayariCard.style.boxShadow = originalStyles.boxShadow; // Restore original box-shadow

    output.style.fontSize = originalStyles.fontSize;
    output.style.lineHeight = originalStyles.lineHeight;
    output.style.letterSpacing = originalStyles.letterSpacing;
    output.style.wordSpacing = originalStyles.wordSpacing;
    output.style.textAlign = originalStyles.textAlign; // Restore original text-align
    output.style.direction = originalStyles.direction; // Restore original direction
    output.style.unicodeBidi = originalStyles.unicodeBidi; // Restore original unicode-bidi
    output.style.fontFamily = originalStyles.fontFamily; // Restore original font-family
    output.style.textRendering = ''; // Restore original text-rendering

    shayariCard.classList.remove('scaled-for-download');
  }
}

/**
 * @function applyTemplate
 * @description Applies the CSS classes of a selected template to the shayari card.
 * @param {string} templateId - The ID of the template to apply.
 */
function applyTemplate(templateId) {
  const tpl = templates[templateId];
  if (!tpl) {
    console.warn(`Template with ID ${templateId} not found.`);
    return;
  }
  // Update the className of the shayariCard with the template's classes
  // Note: The template classes now only define background, text style, etc.,
  // not fixed dimensions, which are handled by index.html for display and main.js for download.
  shayariCard.className = `relative rounded-xl shadow-lg text-center font-shayari leading-relaxed flex flex-col justify-center select-text p-8 w-full h-64 sm:h-80 md:h-96 mx-auto ${tpl.classes}`;
}

/**
 * @function setDarkMode
 * @description Toggles dark mode on or off and saves the preference to localStorage.
 * @param {boolean} enabled - True to enable dark mode, false to disable.
 */
function setDarkMode(enabled) {
  if (enabled) {
    htmlElement.classList.add("dark"); // Add 'dark' class to <html>
    localStorage.setItem("shayari-dark-mode", "true"); // Save preference
    if (darkModeToggle) { // Check if desktop toggle exists
      darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Change icon to sun (desktop)
      darkModeToggle.setAttribute("title", "Switch to Light Mode"); // Update title (desktop)
    }
    if (mobileDarkModeToggle) { // Check if mobile toggle exists before updating
        mobileDarkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode'; // Update mobile toggle text
        mobileDarkModeToggle.setAttribute("title", "Switch to Light Mode"); // Update title (mobile)
    }
  } else {
    htmlElement.classList.remove("dark"); // Remove 'dark' class from <html>
    localStorage.setItem("shayari-dark-mode", "false"); // Save preference
    if (darkModeToggle) { // Check if desktop toggle exists
      darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Change icon to moon (desktop)
      darkModeToggle.setAttribute("title", "Switch to Dark Mode"); // Update title (desktop)
    }
    if (mobileDarkModeToggle) { // Check if mobile toggle exists before updating
        mobileDarkModeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode'; // Update mobile toggle text
        mobileDarkModeToggle.setAttribute("title", "Switch to Dark Mode"); // Update title (mobile)
    }
  }
}

// --- Event Listeners ---

// Generate button click event
generateBtn.addEventListener("click", generateShayari);

// Copy button click event
copyBtn.addEventListener("click", copyShayari);

// Share button click event
shareBtn.addEventListener("click", shareShayari);

// Download button click event
downloadBtn.addEventListener("click", downloadShayari);

// Template selection event listeners
templateSelector.querySelectorAll("div[data-template]").forEach((el) => {
  // Click event for selecting a template
  el.addEventListener("click", () => {
    const selected = el.getAttribute("data-template");
    if (selected) {
      currentTemplate = selected; // Update current selected template
      applyTemplate(selected); // Apply the selected template's styles
    }
  });
  // Keyboard events for accessibility (Enter or Space key)
  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault(); // Prevent default action (e.g., scrolling)
      el.click(); // Simulate a click
    }
  });
});

// Dark mode toggle button click event (Desktop)
// Only add listener if element exists
if (darkModeToggle) {
  darkModeToggle.addEventListener("click", () => {
    const isDark = htmlElement.classList.contains("dark"); // Check current mode
    setDarkMode(!isDark); // Toggle dark mode
  });
}


// Mobile menu toggle events
if (mobileMenuToggle && mobileMenu && mobileMenuClose) { // Ensure all core mobile menu elements exist
    mobileMenuToggle.addEventListener("click", () => {
        mobileMenu.classList.add("open");
    });

    mobileMenuClose.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
    });

    // Close mobile menu when any link is clicked inside it
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });
    });

    // Dark mode toggle button click event (Mobile)
    if (mobileDarkModeToggle) { // Ensure mobile dark mode toggle exists
        mobileDarkModeToggle.addEventListener("click", () => {
            const isDark = htmlElement.classList.contains("dark");
            setDarkMode(!isDark);
            mobileMenu.classList.remove('open'); // Close menu after toggling dark mode
        });
    }
}


// --- Initialization Logic (on page load) ---
(function () {
  // Check for saved dark mode preference in localStorage
  const darkPref = localStorage.getItem("shayari-dark-mode");
  if (darkPref === "true") {
    setDarkMode(true); // Apply dark mode if preferred
  } else if (darkPref === "false") {
    setDarkMode(false); // Apply light mode if preferred
  } else {
    // If no preference, use system preference (e.g., OS dark mode setting)
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(prefersDark);
  }
  // Apply the default or previously selected template on load
  applyTemplate(currentTemplate);
  // Optional: Initial shayari generation on page load
  // generateShayari(); // Uncomment this line if I want a shayari to be generated automatically on page load
})();
