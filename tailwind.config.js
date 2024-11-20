// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(90deg, #141488 50%, #020024 80%,#00d4ff 100%)",
        //  'custom-gradient-2': 'linear-gradient(#FF#BBD, #FFDOFF)',
        "custom-gradient-3": "linear-gradient(135deg, #FFE8FF, #FF77ED)",
        //  'custom-gradient-4': 'linear-gradient(135deg, #FFDOFF,#FF#BBD)',
        "custom-gradient-5": "linear-gradient(100deg,#FF77ED, #FFE8FF)",
        "custom-gradient-6": "linear-gradient(100deg,#020024, #013882, #005bc7, #07a6cf)",
        'custom-gradient-7': 'linear-gradient(90deg, #1d2c9c 1%, #309ae4 73%, #075fcf 100%)',
        'custom-gradient-8': "linear-gradient(90deg, rgba(207,217,229,1) 10%, rgba(9,73,136,1) 55%, rgba(222,245,254,1) 100%)",
        'custom-gradient-9': "linear-gradient(90deg, rgba(9,73,136,0.2) 10%, rgba(222,245,254,0.2) 70%, rgba(207,217,229,0.2) 100%)",
        'custom-gradient-4': "linear-gradient(90deg, rgba(207,217,229,1) 5%, rgba(14,61,107,1) 47%, rgba(11,52,92,1) 69%, rgba(222,245,254,1) 93%)",

      },
    },
  },
  plugins: [],
};
