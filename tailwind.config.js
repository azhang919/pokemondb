export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/components/TypeCard.jsx"],
  safelist: [
    'bg-[#ff4322]', 'bg-[#aa5599]', 'bg-[#aaaa99]', 'bg-[#6666bb]', 'bg-[#fce7f3]',
    'bg-[#775544]', 'bg-[#1e3a8a]', 'bg-[#bb5544]', 'bg-[#ffcc33]', 'bg-[#77cc55]',
    'bg-[#66ccff]', 'bg-[#a855f7]', 'bg-[#ddbb55]', 'bg-[#0ea5e9]', 'bg-[#aabb22]',
    'bg-[#bbaa66]', 'bg-[#aaaabb]', 'bg-[#3399ff]'
  ],
  theme: {
    extend: {
      colors: {
        "surface-container-highest": "#e4e2e1",
        "surface-container-low": "#f6f3f2",
        "primary-container": "#4eb3d3",
        "on-background": "#1b1c1c",
        "on-tertiary-container": "#7a1000",
        "inverse-on-surface": "#f3f0f0",
        "secondary-fixed": "#ecdcff",
        "on-error": "#ffffff",
        "inverse-primary": "#72d3f4",
        background: "#fbf9f8",
        "tertiary-fixed-dim": "#ffb4a5",
        "tertiary-fixed": "#ffdad3",
        "surface-dim": "#dcd9d9",
        "on-primary": "#ffffff",
        "on-secondary-fixed-variant": "#523b78",
        "inverse-surface": "#303030",
        outline: "#6e797d",
        "surface-container-lowest": "#ffffff",
        "on-secondary-fixed": "#250b4a",
        "on-primary-container": "#004253",
        tertiary: "#ae311a",
        "primary-fixed-dim": "#72d3f4",
        "secondary-fixed-dim": "#d5baff",
        "surface-bright": "#fbf9f8",
        "on-tertiary-fixed": "#3e0400",
        "surface-container-high": "#eae8e7",
        "on-tertiary": "#ffffff",
        "on-primary-fixed-variant": "#004e60",
        "on-primary-fixed": "#001f28",
        "surface-tint": "#00677f",
        primary: "#00677f",
        "on-secondary": "#ffffff",
        "surface-variant": "#e4e2e1",
        "secondary-container": "#d3b7ff",
        "on-surface": "#1b1c1c",
        "on-tertiary-fixed-variant": "#8c1803",
        "on-error-container": "#93000a",
        "on-surface-variant": "#3e484d",
        surface: "#fbf9f8",
        "tertiary-container": "#ff836a",
        "on-secondary-container": "#5c4583",
        "surface-container": "#f0eded",
        "error-container": "#ffdad6",
        "outline-variant": "#bdc8cd",
        "primary-fixed": "#b6eaff",
        secondary: "#6a5292",
        error: "#ba1a1a",
        red: {
          500: "#ff4322"
        },
        "light-pink": {
          500: "#fce7f3"
        },
        "dark-blue": {
          500: "#1e3a8a"
        },
        slate: {
          500: "#aaaa99"
        },
        indigo: {
          500: "#6666bb"
        },
        pink: {
          500: "#aa5599"
        },
        brown: {
          500: "#775544"
        },
        "orange-brown": {
          500: "#bb5544"
        },
        yellow: {
          500: "#ffcc33"
        },
        green: {
          500: "#77cc55"
        },
        cyan: {
          500: "#66ccff"
        },
        purple: {
          500: "#a855f7"
        },
        amber: {
          500: "#ddbb55"
        },
        sky: {
          500: "#0ea5e9"
        },
        lime: {
          500: "#aabb22"
        },
        stone: {
          500: "#bbaa66"
        },
        gray: {
          500: "#aaaabb"
        },
        blue: {
          500: "#3399ff"
        },
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
      spacing: {
        unit: "4px",
        "stack-sm": "8px",
        "container-max": "1200px",
        "stack-lg": "32px",
        "table-cell-padding": "10px 12px",
        gutter: "24px",
        "stack-md": "16px",
        "margin-page": "32px",
      },
      fontFamily: {
        "headline-md": ["Fira Sans"],
        "body-lg": ["Fira Sans"],
        "section-header": ["Fira Sans"],
        "display-lg": ["Fira Sans"],
        "data-tabular": ["Fira Sans"],
        "label-caps": ["Fira Sans"],
        "body-sm": ["Fira Sans"],
      },
      fontSize: {
        "headline-md": ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        "body-lg": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "section-header": [
          "36px",
          {
            lineHeight: "1.4",
            letterSpacing: "-0.01em",
            fontWeight: "800",
          },
        ],
        "display-lg": ["36px", { lineHeight: "1.2", fontWeight: "700" }],
        "data-tabular": ["13px", { lineHeight: "1.2", fontWeight: "500" }],
        "label-caps": [
          "11px",
          { lineHeight: "1", letterSpacing: "0.05em", fontWeight: "700" },
        ],
        "body-sm": ["14px", { lineHeight: "1.5", fontWeight: "400" }],
      },
    },
  },
}
