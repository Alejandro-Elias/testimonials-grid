/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'violet':'hsl(263, 55%, 52%)',
        'darkGrey':'hsl(217, 19%, 35%)',
        'darkBlue':'hsl(219, 29%, 14%)',
        'lightGray':'hsl(0, 0%, 81%)',
        'lightBlue':'hsl(210, 46%, 95%)'        
      }
    },
  },
  plugins: [],
}

/* npx tailwindcss -i ./src/input.css -o ./src/output.css --watch */