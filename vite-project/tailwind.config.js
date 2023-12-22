/** @type {import('tailwindcss').Config} */
export default {
  content: [],

  theme: {
    extend: {
      backgroundColor: {
        var: "blue",
        backgroundObjectGradient: "rgba(172, 172, 247, 0.60)",
        connectButton: "#9747FF",
        hoverConnectButton: "#7777B5",
        hoverNavLinks: "#AF73FD"
      },
      colors: {
        hoverNavLinks: "#AF73FD"
      },
      boxShadow: {
        buttonShadow: "0px 4px 4px 0px #88A7FF"
      },
      keyframes: {
        "loop-scroll-mobile": {
          from: { transform: "translateX(200%)" },
          to: { transform: "translateX(-200%)" }
        },
        "loop-scroll-desktop": {
          from: { transform: "translateX(110%)" },
          to: { transform: "translateX(-110%)" }
        }
      },
      animation: {
        "loop-scroll-mobile": "loop-scroll-mobile 10s linear infinite",
        "loop-scroll-desktop": "loop-scroll-desktop 20s linear infinite"
      },
    },
  },
  variants: {
    display: ['responsive', 'group-hover', 'group-focus'],
   },
  plugins: [],
}

