/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontSize: {
		'display-lg': ['clamp(2.5rem, 1.9rem + 2.4vw, 4rem);', {lineHeight: '110%', letterSpacing: '-2.5%'}],
		'display-md': ['clamp(2rem, 1.5rem + 2vw, 3.25rem);', {lineHeight: '110%', letterSpacing: '-2.5%'}],

		'heading-lg': ['clamp(1.5rem, 1.3rem + 0.8vw, 2rem);', {lineHeight: '130%', letterSpacing: '-2%'}],
		'heading-md': ['clamp(1.25rem, 1.05rem + 0.8vw, 1.75rem);', {lineHeight: '130%', letterSpacing: '-2%'}],

		'body': ['clamp(1.125rem, 0.975rem + 0.6vw, 1.5rem);', {lineHeight: '150%', letterSpacing: '0%'}],
},
    extend: {}
  },
  plugins: []
};