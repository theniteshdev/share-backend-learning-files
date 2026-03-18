# METHODS AND PROPERTIES IN NODEJS BUFFER

## Another Way to create a Buffer
```javascript
let a = Buffer.from("Hello, World");
a.toString();
```

.toString(arg1);
arg1 = character encoding like utf-8, ucs-2 etc

.from(arg1)
arg1 = array with value in character's value or can pass string

## UCS vs UCS-2
UCS - Universal Character Set
UCS-2 - Universal Character Set 2

Both are currently not used and extient.
Maximum Character -> 65,536 characters

## BufferInstance.write();

Same as Buffer.from() but difference is BufferInstance.write() only available on instance of the buffer.

```javascript
const a = Buffer.from("Hello, World!", "utf-8");
console.log(a.toString("utf-8"))

// but

const b = Buffer.write("Apple");
// error -> Buffer.write() is not a function
console.log(b.toString());

// then how it works
const b = Buffer.alloc(8);
b.write("Apple", "utf-8");
```

## We can Send Buffer Data as response in JSON Format

Using .toJSON() method we can convert a buffer into json format and ready to send a json as response.

```javascript
const a = Buffer.from("Hello, World");
a.toJSON();
```
