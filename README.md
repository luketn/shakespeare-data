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

## Use it in Angular
Import it in angular by importing it into a component and binding it with an HTML template.

Example: 
[https://luketn.github.io/shakespeare-data/](https://luketn.github.io/shakespeare-data/)

Code: [https://github.com/luketn/shakespeare-data/blob/master/example-angular/src/app/app.component.ts](https://github.com/luketn/shakespeare-data/blob/master/example-angular/src/app/app.component.ts)

Component:

```javascript
import { Component } from '@angular/core';
import { Shakespeare } from 'shakespeare-data/lib/shakespeare';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  shakespeare = new Shakespeare();

  sonnets = this.shakespeare.sonnets.all();
  search(term) {
    this.sonnets = this.shakespeare.sonnets.find(term);
  }
}
```
Template:
```html
<tbody>
  <tr *ngFor="let sonnet of sonnets">
    <td>{{sonnet.number}}</td>
    <td>
      <span *ngFor="let line of sonnet.lines">
        {{line}}<br/>
      </span>
    </td>
  </tr>
</tbody>
```


## Contributions
If you'd like to contribute to the project, note that we use semantic versioning and commitizen conventions.

These differentiate breaking and non-breaking changes clear, and update version numbers for changes accordingly.

Commitizen:
http://commitizen.github.io/cz-cli/

Semantic Release: 
https://semantic-release.gitbooks.io/semantic-release

Use the package script 'commit' to perform commits, which will invoke commitizen correctly:
```
git add .
npm run commit
```
