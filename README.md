# bzz
> Template strings formatter for avoiding indentation side effect. Format string according minimum found identation and passed gitter. 

[![npm version](https://badge.fury.io/js/bzz.svg)](https://www.npmjs.com/package/bzz)
[![Build Status](https://travis-ci.org/dimapaloskin/bzz.svg?branch=master)](https://travis-ci.org/dimapaloskin/bzz)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

## Installation

```
npm install --save bzz
```

## API

### bzz(templateString, [defaultGitter]);

**defaultGitter** set a minimum identation for passed string. **Default:** 0

## Usage examples

```js

const bzz = require('bzz');

// the fist string's line will be removed
const str = bzz(`
    Hello
      world
`);  // <-- the last line will be removed too

console.log(str);

```
Output:
```
Hello
  world
```

---

```js

const bzz = require('bzz');

const str = bzz(` this line will be removed so not affect anything
      Meow
        Moo
      Arf-arf
`, 2);

console.log(str);

```
Output:
```
  Meow
    Moo
  Arf-arf
```

#### Author
[Dmitry Pavlovsky](http://palosk.in)
