import tailwindPlugin from 'prettier-plugin-tailwindcss'

/** @type {import("prettier").Options} */
export default {
  printWidth: 80,
  singleQuote: true,
  semi: false,
  trailingComma: 'es5',
  arrowParens: 'avoid',
  htmlWhitespaceSensitivity: 'ignore',
  endOfLine: 'auto',
  plugins: [tailwindPlugin],
  tabWidth: 2,
  useTabs: false,
}
