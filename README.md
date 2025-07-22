ShayariVerse – AI + Classic Shayari Generator
ShayariVerse is a web application that allows users to generate classic shayaris from various renowned poets in multiple languages (Urdu, Hindi, English, Arabic). Users can select a poet and language, generate a random shayari, customize its appearance using different templates, and then copy, share, or download it as an image suitable for social media.

Table of Contents
Features

Folder Structure

Getting Started

Prerequisites

Installation

Running Locally

Usage

Customization

Adding New Shayaris

Adding New Templates

Styling

SEO Best Practices

Contributing

License

Contact

Features
Shayari Generation: Generate random shayaris from a curated list of famous poets.

Multi-language Support: Shayaris available in Urdu, Hindi, English, and Arabic.

Customizable Templates: Choose from various visual templates to style your shayari card.

Copy to Clipboard: Easily copy the generated shayari text.

Share Functionality: Share shayaris directly to social media platforms (if supported by browser).

Download as Image: Download the shayari card as a high-resolution PNG image (ideal for Instagram posts).

Dark Mode: Toggle between light and dark themes for comfortable viewing.

Responsive Design: Optimized for seamless experience across desktop, tablet, and mobile devices.

SEO Friendly: Implemented meta tags and structured content for better search engine visibility.

Folder Structure
shayari-generator/
│
├── public/
│   ├── index.html                # Main website file
│   └── privacy-policy.html       # Privacy policy page
│
├── CSS/
│   └── style.css                 # All your custom styles
│
├── js/
│   ├── main.js                   # Main logic (generate, copy, share, download, dark mode)
│   ├── poetdata.js               # Shayari database (per poet/language)
│   └── templates.js              # Shayari templates (classes for styling)
│
├── README.md                     # Project overview, development guide
├── robots.txt                    # SEO crawling rules
└── sitemap.xml                   # Sitemap for Google indexing
└── logo/                         # Website logo, social media logos (e.g., YouTube, WhatsApp, Twitter)
    ├── website_logo.png
    ├── youtube_logo.png
    └── whatsapp_logo.png
    └── twitter_logo.png
    └── instagram_logo.png
    └── facebook_logo.png

Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
You only need a modern web browser to run this project. No special server setup is required as it's a client-side application.

Installation
Clone the repository (or download the files):

git clone https://github.com/your-username/shayari-generator.git
cd shayari-generator

(Replace https://github.com/your-username/shayari-generator.git with your actual repository URL if you host it on GitHub).

Create the folder structure:
Ensure your local project directory matches the Folder Structure described above.

Place the files:
Copy the index.html and privacy-policy.html into the public/ directory.
Copy style.css into the CSS/ directory.
Copy main.js, poetdata.js, and templates.js into the js/ directory.
Create the logo/ directory and place your logo files there.

Running Locally
Simply open the public/index.html file in your web browser.

# From the project root directory
open public/index.html
# Or
start public/index.html

Usage
Select Poet: Choose your desired poet from the "Select Poet" dropdown.

Select Language: Choose the language for the shayari from the "Select Language" dropdown.

Generate Shayari: Click the "Generate Shayari" button to display a random shayari in the output area.

Choose Template: Scroll through the "Choose a Template" section and click on any template preview to apply its style to the generated shayari.

Actions:

Copy: Click the "Copy" button to copy the shayari text to your clipboard.

Download: Click the "Download" button to save the shayari card as a PNG image.

Share: Click the "Share" button to use your device's native sharing options (if supported).

Dark Mode: Click the moon/sun icon in the header to toggle between dark and light modes.

Customization
Adding New Shayaris
To add more shayaris:

Open js/poetdata.js.

Locate the shayariData object.

You can add new shayaris to existing poets and languages, or add entirely new poets and their shayaris.

Example (Adding to existing):

// inside ghalib.urdu array
"ایک مدت سے تری یاد بھی آئی نہ ہمیں\nاور ہم بھول گئے ہوں تجھے، ایسا بھی نہیں"

Example (Adding a new poet):

// After faiz object
newPoet: {
  urdu: [
    "New Urdu Shayari 1",
    "New Urdu Shayari 2"
  ],
  hindi: [
    "New Hindi Shayari 1",
    "New Hindi Shayari 2"
  ],
  // ... other languages
},

If you add a new poet, remember to update the <select id="poet"> dropdown in public/index.html with a new <option> tag for the new poet.

Adding New Templates
To add more visual templates:

Open js/templates.js.

Locate the templates object.

Add a new key-value pair to the templates object. The key should be a unique number, and the value should be an object containing a classes property with Tailwind CSS classes.

Example:

// After template 5
6: {
  classes: "bg-gradient-to-br from-purple-400 to-indigo-600 dark:from-purple-900 dark:to-indigo-950 text-center font-shayari text-xl sm:text-3xl leading-relaxed min-h-[1080px] flex flex-col justify-center select-text p-12 rounded-xl shadow-lg max-w-[1080px] mx-auto aspect-square",
},

Add a corresponding <div> element in the <div id="templateSelector"> in public/index.html with data-template attribute matching your new template's key. You can use a placeholder shayari for its preview.

Styling
All custom CSS is located in CSS/style.css. You can modify this file to change the appearance of the website. For general styling, leverage Tailwind CSS classes directly in your HTML.

SEO Best Practices
Meta Tags: public/index.html includes comprehensive meta tags (description, keywords, author, robots, canonical) to help search engines understand your content.

Semantic HTML: The HTML structure uses semantic tags (<header>, <main>, <section>, <footer>, <nav>) for better readability by search engines and accessibility tools.

Responsive Design: The website is built with a mobile-first approach using Tailwind CSS, ensuring it looks good and functions well on all devices, which is crucial for SEO.

robots.txt: Controls which parts of your site search engine crawlers can access.

sitemap.xml: Provides a roadmap of your site's content to search engines, helping them crawl and index your pages more efficiently.

Descriptive Titles: Each page has a clear and descriptive <title> tag.

Image Alt Text: All <img> tags have descriptive alt attributes.

Contributing
Feel free to fork this repository, make improvements, and submit pull requests. Any contributions are welcome!

License
This project is open-source and available under the MIT License.

Contact
For any questions or feedback, please reach out to:
[Your Name/Team Name]
Email: [your-email@example.com] (e.g., support@shayariverse.com)