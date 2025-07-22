/**
 * @file templates.js
 * @description This file defines the CSS classes for various Shayari card templates.
 * These templates are used to style the Shayari output for different social media post sizes.
 */

// Export the templates object so it can be imported and used in other modules (e.g., main.js)
export const templates = {
  // Template 1: Pink to Purple Gradient
  1: {
    classes: "bg-gradient-to-br from-pink-200 to-purple-300 dark:from-pink-700 dark:to-purple-900 text-center font-shayari text-xl sm:text-3xl leading-relaxed flex flex-col justify-center select-text rounded-xl shadow-lg aspect-square",
  },
  // Template 2: Yellow to Red Gradient
  2: {
    classes: "bg-gradient-to-tr from-yellow-200 to-red-300 dark:from-yellow-700 dark:to-red-900 text-center font-shayari text-xl sm:text-3xl leading-relaxed flex flex-col justify-center select-text rounded-xl shadow-lg aspect-square",
  },
  // Template 3: Green to Blue Gradient
  3: {
    classes: "bg-gradient-to-tr from-green-200 to-blue-300 dark:from-green-700 dark:to-blue-900 shadow-md text-center font-shayari text-xl sm:text-3xl select-none hover:ring-4 hover:ring-purple-400 transition flex flex-col justify-center items-center rounded-xl shadow-lg aspect-square",
  },
  // Template 4: Indigo to Pink Gradient (Italic text)
  4: {
    classes: "bg-gradient-to-tr from-indigo-200 to-pink-300 dark:from-indigo-700 dark:to-pink-900 text-center font-shayari text-xl sm:text-3xl italic leading-relaxed flex flex-col justify-center select-text rounded-xl shadow-lg aspect-square",
  },
  // Template 5: Cyan to Blue Gradient (Bold text)
  5: {
    classes: "bg-gradient-to-tr from-cyan-200 to-blue-400 dark:from-cyan-700 dark:to-blue-900 shadow-md text-center font-shayari text-xl sm:text-3xl font-bold leading-relaxed flex flex-col justify-center select-text rounded-xl shadow-lg aspect-square",
  },
  // New Template 6: Subtle Border
  6: {
    classes: "bg-white dark:bg-gray-700 shadow-md text-center font-shayari text-xl sm:text-3xl select-none hover:ring-4 hover:ring-gray-400 transition flex flex-col justify-center items-center border-2 border-dashed border-indigo-400 dark:border-indigo-600 rounded-xl shadow-lg aspect-square",
  },
  // New Template 7: Text Shadow Effect
  7: {
    classes: "bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-700 dark:to-gray-900 shadow-md text-center font-shayari text-xl sm:text-3xl select-none hover:ring-4 hover:ring-purple-400 transition flex flex-col justify-center items-center text-shadow-lg text-gray-800 dark:text-gray-200 rounded-xl shadow-lg aspect-square",
  },
  // NEW TEMPLATE 8: Deep Blue with Subtle Pattern
  8: {
    classes: "bg-blue-800 dark:bg-blue-950 text-white text-center font-shayari text-xl sm:text-3xl leading-relaxed flex flex-col justify-center select-text rounded-xl shadow-lg aspect-square bg-[url('https://www.transparenttextures.com/patterns/diagmonds.png')] bg-repeat",
  },
  // NEW TEMPLATE 9: Soft Pastel with Border
  9: {
    classes: "bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-800 dark:to-pink-800 text-gray-800 dark:text-gray-100 text-center font-shayari text-xl sm:text-3xl leading-relaxed flex flex-col justify-center select-text rounded-xl shadow-lg aspect-square border-4 border-dashed border-purple-400 dark:border-pink-600",
  },
  // NEW TEMPLATE 10: Modern Minimalist with Shadow
  10: {
    classes: "bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-center font-shayari text-xl sm:text-3xl leading-relaxed flex flex-col justify-center select-text rounded-xl shadow-lg aspect-square hover:shadow-2xl transition-shadow duration-300",
  }
  
};
