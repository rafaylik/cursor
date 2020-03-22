A custom cursor of two elements (dot and shadow) that changes its appearance when moving, clicking and hovering over elements.

## Demo

[Dot and Shadow Cursor demonstration](https://rafaylik.github.io/dotandshadowcursor/)

## Installing

- [Download](https://github.com/rafaylik/dotandshadowcursor/archive/master.zip) and unzip, or just `$ git clone https://github.com/rafaylik/dotandshadowcursor.git`
- Place a `dotandshadowcursor.css` and `dotandshadowcursor.js` in the directory of your application.
- Include `dotandshadowcursor.css` and `dotandshadowcursor.js` at the `head` section.
``` html
<head>

    <link rel="stylesheet" href="dotandshadowcursor.css">
    <script src="dotandshadowcursor.js"></script>

</head>
```

## Customization

- Open a `dotandshadowcursor.js`.
- Set cursor color (name, hex, rgb).
``` js
color: 'Salmon',
```
- Set minimum window width (pixels) for custom cursor activation.
``` js
from_: 1025,
```
- Set shadow move delay (milliseconds).
``` js
delay: 250,
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

**Michael Rafaylik** - [rafaylik](https://github.com/rafaylik) on GitHub. Project is licensed under the MIT License - see the [LICENSE.md](./LICENSE) file for details.