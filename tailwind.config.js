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
      backgroundImage: () => ({
        "pattern-top": "url('/bg-pattern-top.svg')",
        "pattern-bottom": "url('/bg-pattern-bottom.svg')",
        "pattern-card": "url('/bg-pattern-card.svg')"
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
