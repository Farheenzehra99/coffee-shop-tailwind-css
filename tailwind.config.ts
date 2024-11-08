import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;

// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#7a4637",
//         secondary: "#421917",
//         brandDark: "#240802",
//         dark: "#1c1c1c",
//         light: "#f0f0f0"
//       },
//       fontFamily: {
//         poppins: ["Poppins", "sans-serif"],
//         pacifico: ["Pacifico", "cursive"],
//         second2: ["Sriracha", "cursive"],
//         second3: ["Srisakdi", "system-ui"],

//       },
//       container: {
//         center: true,
//         padding: {
//           DEFAULT: "1rem",
//           sm:"3rem"
//         }
//       }
//     },
//   },
//   plugins: [],
// };
// export default config;
