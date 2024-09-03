/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#011aff",
        darkblue: "#01042d",
        // home screen
        orange: "#FF7B00",
        royalblue: "#2506ad",
        mudblue: "#002057",
        // about screen
        mudwhite: "#efefef",
        purple: "#7403a7",
        lightblue: "#1522ff",
        // education screen
        skywhite: "#e5ecfb",
        brightwhite: "#fcfcfc",
        navyblue: "#012a70",
        lightblack: "#070707",
        green: "#226d01",
        // skills screen
        lightpurple: "#5304b5",
        yellow: "#ffe603",
        bluegradient: "#330572",
        // work screen
        grey: "#8C8C8C",
        // experience screen
        offwhite: "#f7f7f7",
        darkblack: "#202020",
        lightorange: "#ff9f55",
        darkorange: "#f68c09",
        submithover: "#4925ed",
        // contact screen
        greyishblack: "#333333",
        // footer screen
        lightwhite: "#e6e6e6",
        mudorange: "#ffae02",
        darknavyblue: "#05011f",
        iconcolor: "#02094b",
        heartcolor: "#ea0607",

        royalblue1: "#0066cc", //primary & bright
        royalblue2: "#01478c", //secondary & dark
        royalblue3: "#0056b3",
        rednavy: "#f3010f",
        skillscurry: "#c6a651",
        lightgreen: "#42d99b",
        greenglow: "#1ff52d",
        lightgrey: "#ebecf0",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif", "Nunito"],
      },
      height: {
        sectionheight: "h-screen",
      },
    },
  },
  plugins: [],
};
