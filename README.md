# Why does CSS use href attribute and JS use src attribute?

## CSS uses href

- The **href** (short for hyperlink reference) attribute is used to link to an external resource that the browser will fetch and apply to the document.
- It tells browser, "Here's resource you need to go and get the associate with this document".

## JavaScript uses src

- The **src** (short for source) attribute is used to embed or load a resource that needs to be executed or displayed as part of the document.

- It tells the browser, "Here's a file you need to download and execute."


### This style is to show Calculator 3D effect.

```CSS
.calculator{
    transform: perspective(70rem) rotateX(30deg);
}
```

### This is Prank Calculator

- This Calculator can prank you
- Coding
```JS
const randomValue = () => {
  const num = Math.round(Math.random() * 10);
  return num < 4 ? num : 0;
};
```
- Generates a random integer from 0 to 10 using Math.random() * 10 and Math.round().
- If the number is less than 4 or greater (4 - 10), no prank happens (returns 0).
- This means the prank occurs 40% of the time.(num < 4)
- If random num comes less than 4 than it add with calculated number and that's how prank is done. In function(displayTotal)
```JS
const total = eval(strToDisplay)+ extraValue;
```


### If Prank happen you can see effect
