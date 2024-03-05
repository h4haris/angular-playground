# Angular11ThirdPartyJsWithIEMode

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.19.

## 1. Add JS to Project and Use
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

## 2. Supporting IE 11

**NOTE:** *FROM ANGULAR V13, IE11 CAN NO LONGER BE SUPPORTED. IF YOU NEED TO SUPPORT IE11, PLEASE USE A VERSION OF ANGULAR <13***

1. Targeting ES5 in `tsconfig.json`

   *IE11 only supports ES5 or lower. Therefore, TypeScript needs to Transpile your code to ES5 compatible code.*

```bash
"compilerOptions": {
    ...
    "target": "es5"
}
```

2. Update broswerlist to support IE 11 (Note: remove `not` if present with `IE 11`)

```bash
not IE 9-10
IE 11
```

3. Polyfills

   If any of your dependencies use features from `ES6+`, you need to polyfill those. `CoreJS` is included with Angular install, and can be used for the majority of the polyfills.

   **Note: Each polyfill will increase the bundle size, so be careful when choosing which polyfills to import.**

   a. Open your `polyfills.ts` file and place the following at the top under `BROWSER POLYFILLS`:

```bash
# Add core-js support under BROWSER POLYFILLS:

# For quick win (NOT RECOMMENDED)
import 'core-js';


# or add as per need
import 'core-js/es6/symbol';
import 'core-js/es6/object';
import 'core-js/es6/function';
import 'core-js/es6/parse-int';
import 'core-js/es6/parse-float';
import 'core-js/es6/number';
import 'core-js/es6/math';
import 'core-js/es6/string';
import 'core-js/es6/date';
import 'core-js/es6/regexp';
import 'core-js/es6/map';
import 'core-js/es6/weak-map';
import 'core-js/es6/set';
import 'core-js/es6/array';
import 'core-js/es7/array'; // for .includes()
```

   b. Next add NgClass support by installing classlist.js and uncommenting import

```bash
npm install --save classlist.js

# and then uncomment the import as below

/** IE10 and IE11 requires the following for NgClass support on SVG elements */
import 'classlist.js'; // Run `npm install --save classlist.js`.
```

   c. `[OPTIONAL]` If you use **Angular Material** or the **AnimationBuilder** from `@angular/platform-browser/animations` then install dependency and uncomment import:

```bash
npm install --save web-animations-js

# and then uncomment the import as below

import 'web-animations-js';  // Run `npm install --save web-animations-js`.
```

4. [OPTIONAL] Additional Checking

   - Third-party dependencies need to support ES5

   - IE11 doesn't support CSS Custom Properties 
      - use `css-vars-ponyfill` package

   - Styling issues arising from flexbox support

      - try to use full flex property
      
   - Running DevTools in IE11 conflicts with zone.js

      - To fix, add a global `ZONE FLAG` for zone in `polyfills.ts` to execute slightly additional code.

      ```bash
      # Find the zone.js import and add the following so it looks like this:

      (window as any).__Zone_enable_cross_context_check = true;
      import 'zone.js/dist/zone'; // Included with Angular CLI.
      ```

## 3. Create project using specific angular version

Using CLI you can not create a specific angular version.

But you can install a specific version of angular CLI into a particular folder.

1. Create a new folder inside any drive. e.g. `d:\projects\demo`.

2. Open the folder in cmd

3. Now install angular specific version: 

```bash
# for angular 11 use below or use a similar command for the other version
npm install @angular/cli@11 
```

4. After installation, now create a new angular project in your specific folder.

```bash
npx ng new Project_name
```

## 4. Open IE dev tools if using IE mode in Edge browser

To debug the content of an IE mode tab, use `IEChooser` to open `Internet Explorer DevTools`, as follows:

1. In Windows, open the Run dialog. For example, press `Windows logo key + R`.

2. Enter `%systemroot%\system32\f12\IEChooser.exe`, and then click `OK`.

3. In `IEChooser`, select the entry for the IE mode tab.