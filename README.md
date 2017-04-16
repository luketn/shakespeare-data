# shakespeare-data
A little JavaScript library you can import and use in your projects as an alternative to Lorem Ipsum style test data.

[![travis build](https://img.shields.io/travis/luketn/shakespeare-data.svg?style=flat-square)](https://travis-ci.org/luketn/shakespeare-data)
[![version](https://img.shields.io/npm/v/shakespeare-data.svg?style=flat-square)](http://npm.im/shakespeare-data)

## Installation
```
npm i --save shakespeare-data
```

## API
All of Shakespeare's sonnets are included, with a simple API to retrieve them:

### sonnets.all()
Retrieves all the sonnets in an array in the following structure:
```json
[{"number": 1,
  "lines":
   [ "Those lips that Love's own hand did make,",
     "Breathed forth the sound that said 'I hate',",
     "To me that languish'd for her sake:",
     "But when she saw my woeful state,",
     "Straight in her heart did mercy come,",
     "Chiding that tongue that ever sweet",
     "Was us'd in giving gentle doom;",
     "And taught it thus anew to greet;",
     "'I hate' she alter'd with an end,",
     "That followed it as gentle day,",
     "Doth follow night, who like a fiend",
     "From heaven to hell is flown away.",
     "'I hate', from hate away she threw,",
     "And sav'd my life, saying 'not you'." 
     ] 
},...
]
```

### sonnets.find(term)
Retrieves all the sonnets matching the term in an array in the same structure as all():

### sonnets.random()
Retrieves a single sonnet randomly from the list of all sonnets.


## Use it in Node!
If you're on a node server, just require it and off you go.

```javascript
var shakespeare = require('shakespeare-data');
var sonnetsContainingTruth = shakespeare.sonnets.find('truth');
```

## Use it React
If you're in the browser, import it with SystemJS and use it in your favourite JS framework.
There's an example distributed with the library in dist/index.html.

```javascript
System.import('./index.js').then(function (shakespeare) {
    const e = React.createElement;

    const sonnetItems = shakespeare.sonnets.find('beauty').map((sonnet) => {
        const lineItems = sonnet.lines.map((line) => e('li', null, line));
        return e('li', null, e('h2', null, 'Sonnet #' + sonnet.number), e('ul', null, lineItems));
    });

    ReactDOM.render(e('ul', null, sonnetItems), document.getElementById('root'));
});
```
