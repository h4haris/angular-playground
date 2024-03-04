# Angular11ThirdPartyJsWithIEMode

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.19.

## Add JS to Project and Use
1. Add JavaScript files to your project in assets

2. Place the file path in `angular.json` scripts 

    **OR**

2. Put the script tag in `index.html` to load the file

```bash
"scripts": [
   "src/assets/ExampleJS1.js"
]

# OR

<script src="assets/ExampleJS1.js"></script>
```



4. To Use Functions in the JS File

```bash
# Declare the function

import { Component } from '..'
declare function greet(): void;
@Component({
   ....
})
export class AppCompoent {
}

# Call in code

export class AppCompoent {
   constructor(){
      greet();
   }
}
```

5. `[OPTIONAL]` To add script elements in the html page of your components.


```bash
# create a script element object

# set the value of the src property to the path of the file to load. 

# add the script element to the body of the HTML page

import { Component } from '..'
declare function greet(): void;
@Component({
   ....
})
export class AppCompoent {
myScriptElement: HTMLScriptElement;
   constructor(){
      greet();
      this.myScriptElement = document.createElement("script");
      this.myScriptElement.src = ".....";
      document.body.appendChild(this.myScriptElement);
   }
}
```

