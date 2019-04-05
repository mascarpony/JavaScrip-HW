# JavaScrip-HW

1. Write a function to converts a specified number to an array of digits.
```
// 1234 => [1, 2, 3, 4]
```

2. Write a function to filter out the non-unique values in an array.
```
// [1, 2, 8, 2] => [1, 2, 8]
```

3. Write a function to remove the key-value pairs corresponding to the given keys from an object. 
```
// {a: 5, b:3, c:8}, [‘a’, ‘c’] => {b: 3}
```

4. Write a function to remove falsey values from an given array.
```
// [2, 0, false, ‘key’] => [2, ‘key’]
// notice which values are false
```

5. Write a function to perform a deep comparison between two values to determine if they are equivalent.
```
// 2, 4 => false
// { a: { b: 2} },  { a: { b: 2} } => true
// { a: { b: 2} },  { a: { c: 2} } => false
// notice that objects with equal fields not equal each other by default (why does this happens?)
```

6. Write a function to capitalize the first letter of each word of a given string.
```
// ‘luke, i'm your father’ => ‘Luke, I'm Your Father’
```

7. Write a function that prints in console numbers from given to zero each second.
```
// (2) =>
// 2
// 1
// 0
```

8. Write a function which concatenates two objects in a new one.
```
// {a: 8, b: 3}, {d: 1, b: null, kosmo: ‘stars’} => {a: 8, d: 1, b: null, kosmo: ‘stars’}
// look at the method Object.create or at the spread operator
```

9. Write a function which returns the current date and time in this format: DD.MM.YY hh:mm
```
// () => 5.4.19 7:20
// you can use external library
```
