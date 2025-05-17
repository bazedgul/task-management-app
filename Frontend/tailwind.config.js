/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 darkMode: 'class',
theme: {
  extend: {
    colors: {
      primary: "#6366F1", // Indigo
      danger: "#EF4444",  // Red for overdue
    },
  },
},
  plugins: [],
}

