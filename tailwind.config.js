module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  // daisyUI config (optional)
  daisyui: {
    themes: [
      {
        hark: {
          "primary": "#27FF78",
          "secondary": "#012b70",
          "accent": "#FFFFC2",
          "neutral": "#F6F6F6",
          "base-100": "#0E0E0E",
          "base-300": "#424242",
          "info": "#9ccfd8",
          "success": "#c4a7e7",
          "warning": "#f6c177",
          "error": "#b4637a",
        },
      },
    ],
  },
}
