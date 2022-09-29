// https://zhuanlan.zhihu.com/p/137184533

module.exports = {
  content: ["./src/**/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}", "./src/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    screens: {
      // break point from antdesign / bootstrap
      // https://ant.design/components/grid-cn/#Col
      xs: "480px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1600px",
    },
    extend: {
      colors: {
        theme: "#20a679",
      },
    },
  },
  plugins: [],
}
