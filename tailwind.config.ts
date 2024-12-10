/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Notosans: ["var(--font-Notosans)"],
      },
      backgroundImage: {
        'chairman-bg': "url('/slogun.png')",
        'hero-banner': "url('/hero-banner.png')",
        'meditation-left': "url('/Meditation.png')",
        'meditation-bg': "url('/Meditation-bg.png')",
        'SubscriptionPlan-bg': "url('/SubscriptionPlan-bg.png')",
        'membership-bg': "url('/membership-bg.jpg')",
        'stats-bg': "url('/stats-bg.jpg')",
        'btn-gradient': "linear-gradient(180deg, #1796D8 0%, #4E0670 100%)",
        'btn-gradient-hover': "linear-gradient(180deg, #000000 0%, #4e0670c2 100%)",
        'btn-hover': "#4E0670",
      }, 
      colors: { 
        'theme-orange': "#ED9C2E", 
        'gray-light':"#F7F7F7",
        'info-color':"#1796D8",
        'blue-color':"#002A40",

      },
      fontSize: {
        "40": '40px', 
        "32": '32px', 
        "1xl": "22px",
      },
      borderRadius: {
        '10': '10px',
        '30': '30px',    
      },
      spacing: {
        '4': '15px',
        '2.5': '10px',
        '17' : '70px'
      }, 
      boxShadow: {
        'shadow-color': '0px 0px 16px #00000029',
        'top': '0px 0px 20px rgb(0 0 0 / 6%)',
      },
      screens: {  
        'lg': '991px',
        // => @media (min-width: 1024px) { ... } 
      },
    },
  },
  plugins: [],
};






