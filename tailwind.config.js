module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Kumbh Sans", "ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"]
    },
    extend: {
      colors: {
        primary: "hsl(185, 75%, 39%)"
      },
      backgroundImage: () => ({
        pattern: "url('/bg-pattern-top.svg'), url('/bg-pattern-bottom.svg')",
        "pattern-top": "url('/bg-pattern-top.svg')",
        "pattern-bottom": "url('/bg-pattern-bottom.svg')",
        "pattern-card": "url('/bg-pattern-card.svg')"
      }),
      backgroundPosition: {
        custom: "-15vw -70vh, 50vw 50vh"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
