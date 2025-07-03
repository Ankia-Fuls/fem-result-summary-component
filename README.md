# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Screenshot

![Screenshot of the completed desktop design](./design/Screenshot%20Completed%20Frontend%20Mentor%20Results%20summary%20component.png)

### Links

- Solution URL: [GitHub Repository](https://github.com/Ankia-Fuls/fem-result-summary-component)
- Live Site URL: [GitHub Pages Site](https://ankia-fuls.github.io/fem-result-summary-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- SASS Styling and functions
- JavaScript and JQuery with an async fetch function to get the data from the data.json

### What I learned

I practiced using CSS Grid to create the responsive design between mobile and desktop. 

I learned how to create functions using SASS to translate pixel values into rem instead of having to manually type it out each time. The main function I used is shown below.

```css
@use "sass:math";

@function rem($pixels, $context: 18) {
    @return (math.div($pixels, $context))*1rem;
}
```

I also learned how to import data from a data.json file using fetch and how to populate it usind JQuery. A snippet of this code is shown below.

```js
const fetchJSON = async () => {
    const response = await fetch("data.json");
    const json = await response.json();

    displayVals(json);
}
```

### Continued development

I would like to learn how to make this project more accessible in the future. I am also not 100% sure whether my gradients are correct since I had to guess based on just the images rather than a Figma design, so I would like to come back to it in the future to see if I can get it to be more accurate.

## Author

- Frontend Mentor - [@Ankia-Fuls](https://www.frontendmentor.io/profile/Ankia-Fuls)
- GitHub - [@Ankia-Fuls](https://github.com/Ankia-Fuls)
