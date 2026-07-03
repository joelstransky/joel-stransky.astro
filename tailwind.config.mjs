/** @type {import('tailwindcss').Config} */
import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";

export const content = ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'];
export const darkMode = 'class';
export const theme = {
  extend: {
    colors: {
      "surface-primary": "var(--surface-primary)",
      "surface-secondary": "var(--surface-secondary)",
      "surface-tertiary": "var(--surface-tertiary)",
      "surface-inverse": "var(--surface-inverse)",
      "foreground-primary": "var(--foreground-primary)",
      "foreground-secondary": "var(--foreground-secondary)",
      "foreground-muted": "var(--foreground-muted)",
      "foreground-inverse": "var(--foreground-inverse)",
      "border-primary": "var(--border-primary)",
      "border-subtle": "var(--border-subtle)",
      "accent-primary": "var(--accent-primary)",
      "accent-secondary": "var(--accent-secondary)",
      "accent-tertiary": "var(--accent-tertiary)",
    },
    fontFamily: {
      serif: ["var(--font-serif)", ..._fontFamily.serif],
      sans: ["var(--font-sans)", ..._fontFamily.sans],
      body: ["var(--font-body)", ..._fontFamily.sans],
    },
  },
};
export const plugins = [
  require('@tailwindcss/typography'),
];