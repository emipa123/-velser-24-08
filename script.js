const info = document.querySelector("h3");
console.log(info);

const text = document.querySelector("p");
console.log(text);

const image = document.querySelector("img");
console.log(image);

const footer = document.querySelector("footer");
console.log(footer);

const overskrift = document.querySelector("h1");
console.log(overskrift);

// pseudo selector
// Query selector for the first article element
const article1Element = document.querySelector(".grid1-1 article:first-child");
console.log(article1Element);
// Query selector for the second article element
const article2Element = document.querySelector(".grid1-1 article:last-child");
console.log(article2Element);

// nærmeste søskende
// Query selector for the first article element
const article3Element = document.querySelector("main > .grid1-1 > article:first-child");
console.log(article3Element);
// Query selector for the second article element
const article4Element = document.querySelector("main > .grid1-1 > article:first-child + article");
console.log(article4Element);
