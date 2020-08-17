![logo](https://raw.githubusercontent.com/artofcodelabs/artofcodelabs.github.io/master/assets/ext/loco_logo_trans_sqr-300px.png)

> Loco-JS-Core provides a logical structure for JavaScript code

# 🧐 What is Loco-JS-Core?

Loco-JS-Core is a part of the Loco framework. It has been extracted from [Loco-JS](https://github.com/locoframework/loco-js) and can be used separately. Loco-JS-Core provides a logical structure for JavaScript code. This functionality was the origin of the Loco project. That's why it received a suffix **Core**. 

Model–view–controller (usually known as MVC) frameworks like [Ruby on Rails](https://rubyonrails.org) are trendy on the back-end. The controller's action responds to the user input and converts it to commands for the model or view.  
I wanted to be sure that _"the same"_ controller's action that handles a request on the back-end is also called on the front-end side. By "the same" - I mean an action with the same name and defined in a controller with the name corresponding to the one on the server-side. Namespacing is optional.

The preceding clarification is only for the sake of understanding the connection between the front-end and back-end parts of the Loco framework. Both parts are loosely coupled in fact when it comes to this functionality. To pass controller related information to the front-end, the back-end part uses data attributes of the `<body>` HTML element. These attributes can be modified in various ways. This is why Loco-JS-Core can be used as a standalone library without a specific back-end companion.

*Visualization of the Loco framework:*

```
Loco Framework
|
|--- Loco-Rails (back-end part)
|       |
|       |--- Loco-Rails-Core (logical structure for JS / can be used separately with Loco-JS-Core)
|
|--- Loco-JS (front-end part)
        |
        |--- Loco-JS-Core (logical structure for JS / can be used separately)
        |
        |--- Loco-JS-Model (model part / can be used separately)
        |
        |--- other built-in parts of Loco-JS

        Loco-JS-UI - connects models with UI elements (a separate library)
```

# 🤝 Dependencies

🎊 Loco-JS-Core has no dependencies. 🎉

# 📥 Installation

```bash
$ npm install --save loco-js-core
```

# 👷🏻‍♂️ How does it work?

After the document is loaded, Loco-JS-Core checks the following `<body>`'s data attributes:

* data-namespace
* data-controller
* data-action

Then, it initializes given controllers and calls given methods based on their values. Example:

```html
<body data-namespace="Main" data-controller="Pages" data-action="index">
</body>
```

Loco-JS-Core will act like this (a simplified version):

```javascript
import { init } from "loco-js-core";

// all controllers are assigned to Controllers object

namespaceController = new Controllers.Main;
Controllers.Main.initialize();               // if exists
namespaceController.initialize();            // if exists

controller = new Controllers.Main.Pages;
Controllers.Main.Pages.initialize();         // if exists
controller.initialize();                     // if exists
Controllers.Main.Pages.index();              // if exists
controller.index();                          // if exists
```

What's essential is that Loco-JS-Core looks not only for instance methods but static ones as well. If some controller is not defined, Loco-JS-Core skips it. The same situation is with methods. You don't have to create controllers for every page that you have. You can use Loco-JS-Core only on desired ones. It does not want to take over your front-end. Augment with JavaScript only these pages that you want.

If the namespace controller is not defined, Loco-JS-Core skips it and assumes `Controllers.Pages` as a controller.

# 🎮 Usage

```javascript
import { init } from 'loco-js-core';

import Main from './js/controllers/main';

const Controllers = { Main };

document.addEventListener("DOMContentLoaded", function() {
  init(Controllers);
});

```

The `init` function returns an object with 3 properties: `namespaceController`, `controller` and `action`. They store instances of current controllers and the action name.

# 💀 Anatomy of the controller

*Exemplary controller:*

```javascript
// js/controllers/admin/coupons.js

import { helpers } from "loco-js-core";

import New from "views/admin/coupons/new";
import List from "views/admin/coupons/list";

class Coupons {
  // Loco-JS-Core supports static and instance methods
  static index() {
    new List().render();
  }

  new() {
    const view = new New({ planId: helpers.params.id });
    view.render();
  }
}

export default Coupons;
```

# 🔩 Merging controllers

As you can see in the `Usage` section, Loco-JS-Core must have access to all defined controllers to initialize them and to call given methods on them. Therefore, they have to be merged with an object that holds controllers and is passed to the `init` function.

_Example:_

```javascript
// js/index.js (entry point)

import { init } from 'loco-js-core';

import Admin from "./controllers/admin"; // namespace controller
import User from "./controllers/user";   // namespace controller

import Articles from "./controllers/admin/Articles";
import Comments from "./controllers/admin/Comments";

Object.assign(Admin, {
  Articles,
  Comments
});

const Controllers = { 
  Admin,
  User
};

document.addEventListener("DOMContentLoaded", function() {
  init(Controllers);
});
```

Remember to polyfill `Object.assign` or assign controllers using a different method.

# 🛠 Helpers

Loco-JS-Core exports `helpers` object that has the following properties:

* **params** (getter) - facilitates fetching params from the URL

# 👩🏽‍🔬 Tests

```bash
npm run test
```

# 📜 License

Loco-JS-Core is released under the [MIT License](https://opensource.org/licenses/MIT).

# 👨‍🏭 Author

Zbigniew Humeniuk from [Art of Code](https://artofcode.co)