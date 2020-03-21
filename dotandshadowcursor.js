/*

	Dot and Shadow Cursor v1.0
	Licensed under the MIT License
	Copyright 2020 Michael Rafaylik
	rafaylik@icloud.com
	https://github.com/rafaylik/dotandshadowcursor

*/

{

	var cursor = {
		color: 'salmon', // cursor color
		from_: 1025, // minimum window width (in pixels) for custom cursor activation
		hover: {
			text: 'p, h1', // tag list for text cursor
			image: 'img, video', // tag list for image cursor
			link: 'a, button' // tag list for link cursor
		},
		dot: null,
		shadow: null,
		catch_stop: null,
		over_link: false,
		lastX: null,
		lastY: null,
		build: function() {
			cursor.dot = document.createElement('div');
			cursor.dot.classList.add('cursor-dot');
			cursor.shadow = document.createElement('div');
			cursor.shadow.classList.add('cursor-shadow');
			document.body.append(cursor.shadow);
			document.body.append(cursor.dot);
			cursor.dot.style.backgroundColor = cursor.color;
			cursor.dot.style.borderColor = cursor.color;
			cursor.shadow.style.backgroundColor = cursor.color;
			cursor.shadow.style.borderColor = cursor.color;
			cursor.hover.text = document.querySelectorAll(cursor.hover.text);
			cursor.hover.image = document.querySelectorAll(cursor.hover.image);
			cursor.hover.link = document.querySelectorAll(cursor.hover.link);
		},
		toggle: function() {
			document.documentElement.clientWidth >= cursor.from_ ? cursor.activate() : cursor.deactivate();
		},
		activate: function() {
			cursor.dot.style.display = 'block';
			cursor.shadow.style.display = 'block';
			document.body.classList.add('cursor-hide');
			window.addEventListener('mousemove', cursor.move);
			window.addEventListener('mousedown', cursor.down);
			window.addEventListener('mouseup', cursor.up);
			for (var i = 0; i < cursor.hover.text.length; i++) {
				cursor.hover.text[i].addEventListener('mouseenter', cursor.enter_text);
				cursor.hover.text[i].addEventListener('mouseleave', cursor.leave_text);
			}
			for (var k = 0; k < cursor.hover.image.length; k++) {
				cursor.hover.image[k].addEventListener('mouseenter', cursor.enter_image);
				cursor.hover.image[k].addEventListener('mouseleave', cursor.leave_image);
			}
			for (var j = 0; j < cursor.hover.link.length; j++) {
				cursor.hover.link[j].classList.add('cursor-hide');
				cursor.hover.link[j].addEventListener('mouseenter', cursor.enter_link);
				cursor.hover.link[j].addEventListener('mouseleave', cursor.leave_link);
			}
		},
		deactivate: function() {
			cursor.dot.style.display = 'none';
			cursor.shadow.style.display = 'none';
			document.body.classList.remove('cursor-hide');
			window.removeEventListener('mousemove', cursor.move);
			window.removeEventListener('mousedown', cursor.down);
			window.removeEventListener('mouseup', cursor.up);
			for (var i = 0; i < cursor.hover.text.length; i++) {
				cursor.hover.text[i].removeEventListener('mouseenter', cursor.enter_text);
				cursor.hover.text[i].removeEventListener('mouseleave', cursor.leave_text);
			}
			for (var k = 0; k < cursor.hover.image.length; k++) {
				cursor.hover.image[k].removeEventListener('mouseenter', cursor.enter_image);
				cursor.hover.image[k].removeEventListener('mouseleave', cursor.leave_image);
			}
			for (var j = 0; j < cursor.hover.link.length; j++) {
				cursor.hover.link[j].classList.remove('cursor-hide');
				cursor.hover.link[j].removeEventListener('mouseenter', cursor.enter_link);
				cursor.hover.link[j].removeEventListener('mouseleave', cursor.leave_link);
			}
		},
		set: function(element, x, y) {
			window.requestAnimationFrame(function() {
				element.style.left = x + 'px';
				element.style.top = y + 'px';
			});
		},
		move: function(e) {
			cursor.set(cursor.dot, e.clientX, e.clientY);
			if (e.clientX !== cursor.lastX && e.clientY !== cursor.lastY) {
				cursor.class_ending.add('move');
			}
			if (cursor.catch_stop) clearTimeout(cursor.catch_stop);
			cursor.catch_stop = setTimeout(function(){
				cursor.stop();
				cursor.lastX = e.clientX;
				cursor.lastY = e.clientY;
			}, 100);
			setTimeout(function() {
				if (!cursor.over_link) {
					cursor.set(cursor.shadow, e.clientX, e.clientY);
				}
			}, 250);
		},
		stop: function() { cursor.class_ending.remove('move') },
		down: function(e) {
			if (e.which == 1) {
				cursor.set(cursor.dot, e.clientX, e.clientY);
				if (!cursor.over_link) {
					cursor.set(cursor.shadow, e.clientX, e.clientY);
				}
				cursor.class_ending.add('click');
			}
		},
		up:          function() { cursor.class_ending.remove('click')       },
		enter_text:  function() { cursor.class_ending.add('hover-text')     },
		leave_text:  function() { cursor.class_ending.remove('hover-text')  },
		enter_image: function() { cursor.class_ending.add('hover-image')    },
		leave_image: function() { cursor.class_ending.remove('hover-image') },
		enter_link:  function() {
			var rect = this.getBoundingClientRect();
			var x = rect.left + ((rect.right - rect.left) / 2);
			var y = rect.top + ((rect.bottom - rect.top) / 2);
			cursor.over_link = true;
			cursor.set(cursor.shadow, x, y);
			cursor.class_ending.add('hover-link');
		},
		leave_link:  function() {
			cursor.over_link = false;
			cursor.class_ending.remove('hover-link');
		},
		class_ending: {
			add: function(c) {
				cursor.dot.classList.add('cursor-dot-' + c);
				cursor.shadow.classList.add('cursor-shadow-' + c);
			},
			remove: function(c) {
				cursor.dot.classList.remove('cursor-dot-' + c);
				cursor.shadow.classList.remove('cursor-shadow-' + c);
			}
		}
	};

	document.addEventListener('DOMContentLoaded', function(){
		cursor.build();
		cursor.toggle();
		window.addEventListener('resize', cursor.toggle);
	});

}