[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/O1d7T365)
# Homework 1

## Install/Setup

You will need to install NodeJS (it comes with NPM) in order to run this homework on your computer. You can do that by downloading directly from [here](https://nodejs.org/en/download/prebuilt-installer/current). You can do it that way, or you can use a node version manager like [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating). Our recommendation is that you use `nvm`. Once you have node installed, open a terminal and navigate to this directory. 

Commands for running:
- `npm install` to install dependencies
- `npm start` runs `index.js`
- `npm test` runs tests in `main.test.js`

## Homework 1

Write a function that:
- retrieves the colors from the COLORS endpoint (use [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch))
- filters the returned colors by:
  - name contains string (case insensitive)
  - hex code (without '#')
  - it contains a complementary color whose name contains a string (case insensitive)
  - it contains a complementary color whose hex code equals a given hex code (without '#')
- assume that only one filter can be passed in at a time.

  Examples:
  - give me all the colors that contain 'Blue' in their name
  - give me all the colors with hex code '9FAC58'
  - give me all the colors that have a complementary color whose name contains 'Blue'
  - give me all the colors that have a complementary color whose hex = '9FAC58'
 
```JS
// Example
const result = await fetchColors({
  name: 'Almond',
});

// should return 
[{
  "hex": "EFDECD",
  "name": "Almond",
  ...
}];
```

NOTE: If you need some Promise practice see https://github.com/prof-tejera/es6-primer/blob/main/src/practice.js

- Only ES6 syntax allowed (convert any non ES6 syntax to ES6)
- Provide documentation in the code to make it easy to follow
- Feel free to add more unit tests

