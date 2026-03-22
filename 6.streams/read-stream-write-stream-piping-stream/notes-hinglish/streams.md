# **Node.js Streams Mastery: createReadStream & createWriteStream**

Node.js me **Streams** ek tarah ka **data ka flow** hai. Matlab, aap ek **source** se data ko **chunk-by-chunk** read ya write kar sakte ho without loading the entire data into memory. Yeh bahut efficient hai, especially **large files** ke liye.

## **1️⃣ Streams ka Overview**

Streams 4 type ke hote hain:

1. **Readable** – Data read karne ke liye (example: `fs.createReadStream`)
2. **Writable** – Data write karne ke liye (example: `fs.createWriteStream`)
3. **Duplex** – Read & Write dono kar sakta hai
4. **Transform** – Data ko read karte time transform kar sakta hai

Yahan hum **fs module ke Read & Write streams** pe focus karenge.

```js
const fs = require('fs');
```

---

## **2️⃣ fs.createReadStream**

### **Syntax**

```js
fs.createReadStream(path[, options])
```

* `path` → file ka path (string or buffer)
* `options` → optional object

#### **Options object ke properties:**

| Property        | Description                                                |
| --------------- | ---------------------------------------------------------- |
| `flags`         | File open mode (default: 'r')                              |
| `encoding`      | File encoding (default: null = Buffer)                     |
| `fd`            | File descriptor (agar aapne pehle se open file hai)        |
| `mode`          | File permission (default: 0o666)                           |
| `autoClose`     | True → close automatically after end/error (default: true) |
| `start`         | Byte position se read start (default: 0)                   |
| `end`           | Byte position pe read stop (inclusive)                     |
| `highWaterMark` | Buffer size per chunk (default: 64 KB for files)           |

---

### **Basic Example**

```js
const fs = require('fs');

const readStream = fs.createReadStream('sample.txt', { encoding: 'utf8' });

readStream.on('data', (chunk) => {
    console.log('New Chunk:', chunk);
});

readStream.on('end', () => {
    console.log('File reading completed.');
});

readStream.on('error', (err) => {
    console.log('Error:', err.message);
});
```

**Explanation**:

* `data` event → har chunk of data emit hota hai
* `end` → file ka end reach ho gaya
* `error` → agar kuch problem hoti hai

---

### **Properties of ReadStream**

| Property           | Description                             |
| ------------------ | --------------------------------------- |
| `readable`         | Boolean → stream readable hai ya nahi   |
| `readableEncoding` | Current encoding                        |
| `readableEnded`    | Boolean → stream ka end reach ho gaya   |
| `readableFlowing`  | Boolean → agar auto-flowing mode me hai |
| `path`             | File path                               |
| `bytesRead`        | Ab tak read kiye gaye bytes             |

---

### **Methods of ReadStream**

| Method                  | Description                                  |
| ----------------------- | -------------------------------------------- |
| `read([size])`          | Specific size read karna                     |
| `setEncoding(encoding)` | Buffer ko string me convert                  |
| `pause()`               | Stream ko pause karna                        |
| `resume()`              | Stream ko resume karna                       |
| `pipe(destination)`     | Read data ko directly write stream me bhejna |
| `unpipe([destination])` | Pipe ko remove karna                         |
| `destroy([error])`      | Stream ko destroy karna                      |

---

## **3️⃣ fs.createWriteStream**

### **Syntax**

```js
fs.createWriteStream(path[, options])
```

* `path` → file ka path
* `options` → optional object

#### **Options object ke properties**

| Property        | Description                                     |
| --------------- | ----------------------------------------------- |
| `flags`         | File open mode (default: 'w')                   |
| `encoding`      | Default encoding (utf8 etc.)                    |
| `fd`            | File descriptor agar pehle se open hai          |
| `mode`          | File permissions (default 0o666)                |
| `autoClose`     | True → file automatically close after finish    |
| `start`         | Byte position se write start                    |
| `highWaterMark` | Max chunk size (default 16 KB for write stream) |

---

### **Basic Example**

```js
const fs = require('fs');

const writeStream = fs.createWriteStream('output.txt');

writeStream.write('Hello, ');
writeStream.write('World!\n');
writeStream.end('This is the last line.');

writeStream.on('finish', () => {
    console.log('Writing completed.');
});

writeStream.on('error', (err) => {
    console.log('Error:', err.message);
});
```

**Explanation**:

* `write()` → chunk likhne ke liye
* `end()` → stream close & last chunk likhne ke liye
* `finish` → write complete hone ke baad trigger hota hai
* `error` → agar koi problem hoti hai

---

### **Properties of WriteStream**

| Property           | Description                           |
| ------------------ | ------------------------------------- |
| `writable`         | Boolean → stream writable hai ya nahi |
| `writableEnded`    | Stream ka end reach ho gaya           |
| `writableFinished` | Write operations complete ho gaya     |
| `path`             | File path                             |
| `bytesWritten`     | Total bytes written                   |

---

### **Methods of WriteStream**

| Method                                 | Description                |
| -------------------------------------- | -------------------------- |
| `write(chunk, encoding, callback)`     | Chunk write karna          |
| `end([chunk], [encoding], [callback])` | Last chunk + close         |
| `cork()`                               | Temporary buffer karna     |
| `uncork()`                             | Buffer flush karna         |
| `destroy([error])`                     | Stream destroy karna       |
| `setDefaultEncoding(encoding)`         | Default encoding set karna |

---

## **4️⃣ Pipe ka Magic (Read → Write)**

Streams ka sabse powerful feature hai **pipe()**:

```js
const fs = require('fs');

const readStream = fs.createReadStream('sample.txt');
const writeStream = fs.createWriteStream('copy.txt');

readStream.pipe(writeStream);

writeStream.on('finish', () => {
    console.log('File copied successfully!');
});
```

* ReadStream se directly WriteStream me data flow ho jata hai
* Bahut memory efficient

---

## **5️⃣ Advanced Tips & Tricks**

1. **Large file copy** → pipe ka use karo
2. **Pause/Resume** → backpressure handle karne ke liye
3. **Partial read/write** → `start` & `end` options
4. **Transform stream** → data modify karte hue write karna
5. **Error handling** → Always add `.on('error')`

---

### **6️⃣ Summary**

* `createReadStream` → data ko chunk by chunk read karna
* `createWriteStream` → data ko chunk by chunk write karna
* Streams → memory efficient, fast
* Pipe → read & write streams ko connect karna
* Properties & methods → flow control, error handling, partial read/write
