module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: { fontFamily: {
    'Bilo': ["'Bilo'", 'italic'],
    'bilo': ["'Bilo'" , 'bold'], 
    'Bilo': ["'Bilo'", 'Regular'],
    'bil' : ["'Bilo'" , 'Medium']
  },
    extend: {},
    get extend() {
      return this._extend;
    },
    set extend(value) {
      this._extend = value;
    },
  },
  plugins: [require("daisyui")],
};
