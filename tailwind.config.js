// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(135deg, #141488, #020024,#00d4ff)",
        //  'custom-gradient-2': 'linear-gradient(#FF#BBD, #FFDOFF)',
        "custom-gradient-3": "linear-gradient(135deg, #FFE8FF, #FF77ED)",
        //  'custom-gradient-4': 'linear-gradient(135deg, #FFDOFF,#FF#BBD)',
        "custom-gradient-5": "linear-gradient(100deg,#FF77ED, #FFE8FF)",
        "custom-gradient-6": "linear-gradient(100deg,#020024, #013882, #005bc7, #07a6cf)",
        'custom-gradient-7': 'linear-gradient(90deg, #1d2c9c 1%, #309ae4 73%, #075fcf 100%)',
      },
    },
  },
  plugins: [],
};
