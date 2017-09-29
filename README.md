[![Build Status](https://travis-ci.org/jameshulse/mr-time.svg?branch=master)](https://travis-ci.org/jameshulse/mr-time) [![Coverage Status](https://coveralls.io/repos/github/jameshulse/mr-time/badge.svg?branch=master)](https://coveralls.io/github/jameshulse/mr-time?branch=master) [![npm](https://img.shields.io/npm/v/mr-time.svg)](https://www.npmjs.com/package/mr-time)

# Mr. Time 👨🏻🕑

### Description
Mr. Time provides better code readibility than random numbers representing amounts of time scattered through your code.

Ever needed to provide a timeout to a function call and had to google 'How many milliseconds in 24 hours'. Your options are:

#### Bad

```javascript
setTimeout(myMethod, 86400000); // Nobody will have any idea how long this is
```

#### Better

```javascript
const TWENTY_FOUR_HOURS_IN_MILLISECONDS = 86400000; // I still had to google to get this number first...

setTimeout(myMethod, TWENTY_FOUR_HOURS_IN_MILLISECONDS);
```

#### ⭐ Best⭐

```javascript
let T = require('mr-time');

setTimeout(myMethod, T(24).hours.in.milliseconds); // No googling, easy to read, everyones happy
```

### Installation
`npm install mr-time`
  
`yarn add mr-time`
  
### Usage
```javascript
let T = require('mr-time');
  
let oneDayInMilliseconds = T(1).days.in.milliseconds; // returns 86400000
let twoWeeksInSeconds = T(2).weeks.in.seconds; // returns 1210000
```

### Upcoming

- Add month, year, decade, century, nanoseconds etc
