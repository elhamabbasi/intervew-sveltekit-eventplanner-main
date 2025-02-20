import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'alaska-blue': '#01426A', // Adding Alaska Airline color
				'alaska-on-light': '#0074c8', // Adding default color on light theme
			},
		},
	},

	plugins: [daisyui, typography, forms]
} satisfies Config;
