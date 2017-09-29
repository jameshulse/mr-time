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
`npm intall mr-time`
  
`yarn add mr-time`
  
### Usage
```javascript
let T = require('mr-time');
  
let oneDayInMilliseconds = T(1).days.in.milliseconds;
let twoWeeksInSeconds = T(2).weeks.in.seconds;
```