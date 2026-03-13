# JavaScript Modules

A **module** in JavaScript is basically a file that contains code which we can **export** and **import** into other files.

Not every JS file is automatically a module — it becomes a module when we use a module system like CommonJS or ES Modules.

---

## Types of Module Systems in JavaScript

1. **CommonJS (CJS)** → Old system
2. **ES Modules (ESM)** → New system (ES6)

CommonJS is mainly used in Node.js.

---

# CommonJS (CJS)

In CommonJS we use:

- `require()` → to import
- `module.exports` → to export

---

## How `require()` works

- `require` is a function.
- It takes one argument (a string).
- That string is the path of the file.

What happens internally:

1. It finds the file using the given path.
2. It runs (executes) that file.
3. It checks what is stored inside `module.exports`.
4. It returns that value.

Important:

- `require()` works **synchronously** (it blocks execution until the file is loaded).
- We usually don’t need to write the `.js` extension when requiring a file.

Example:

```js
// math.js
module.exports = function (a, b) {
  return a + b;
};
```

```js
// app.js
const add = require("./math");
console.log(add(2, 3)); // 5
```

---

# Ways to Export in CommonJS

We can export almost anything:

- function
- string
- number
- boolean
- null
- undefined
- array
- object

---

## 1️⃣ Export a single value

```js
module.exports = value;
```

Example:

```js
module.exports = 100;
```

---

## 2️⃣ Export multiple values

```js
module.exports.name = "John";
module.exports.age = 25;
```

---

## 3️⃣ Using `exports`

`exports` is just a shortcut reference to `module.exports`.

Correct way:

```js
exports.name = "John";
exports.age = 25;
```

Important:

```js
exports = "John"; ❌
```

This will NOT work because `exports` is just a reference.
If you reassign it, the link with `module.exports` breaks.

---

# Important Notes

- CommonJS is mainly used in Node.js.
- It works synchronously.
- Browsers don’t support it directly (without bundlers).
- No need to write `.js` extension when requiring local files.

---
