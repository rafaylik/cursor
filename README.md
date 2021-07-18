A custom cursor of two elements (dot and shadow) that changes its appearance when moving, clicking and hovering over elements.

## Demo

[Cursor demonstration](https://rafailyk.github.io/cursor/)

## Installing

- [Download](https://github.com/rafailyk/cursor/archive/master.zip) and unzip, or just `$ git clone https://github.com/rafailyk/cursor.git`
- Place a `cursor.css` and `cursor.js` in the directory of your application.
- Include `cursor.css` and `cursor.js` at the `head` section.
``` html
<head>

    <link rel="stylesheet" href="cursor.css">
    <script src="cursor.js"></script>

</head>
```

## Customization

- Open a `cursor.js`.
- Set cursor color (name, hex, rgb).
``` js
color: 'Salmon',
```
- Set minimum window width (pixels) for custom cursor activation.
``` js
from_: 1024,
```
- Set shadow move delay (milliseconds).
``` js
delay: 150,
```
- Set list of elements (tag, class) for various hover events.
``` js
hover: {
    text: 'p, h1',
    image: 'img, video',
    link: 'a, button'
},
```

## Browser compatibility

- Chrome: 26
- Edge: 12
- Firefox: 23
- Internet Explorer: 11
- Opera: 15
- Safari: 9

## Author and license

**Michael Rafailyk** - [rafailyk](https://github.com/rafailyk) on GitHub. Project is licensed under the MIT License - see the [LICENSE.md](./LICENSE) file for details.
