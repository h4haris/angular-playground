# Angular11ThirdPartyJsWithIEMode

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.19.

1. Add JavaScript files to your project in assets
2. Place the file path in `angular.json` scripts **OR**
3. Put the script tag in `index.html` to load the file

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

