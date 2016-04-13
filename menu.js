(function () {
	var menu = document.getElementById('sticky-menu');
	var menuContainer = document.getElementById('sticky-menu-container');

	var bottomLimit = menuContainer.offsetHeight + menuContainer.offsetTop - menu.offsetHeight;
	var menuOffsetTop = menuContainer.offsetTop;

	var menuPositionHandler = function () {
		var scrolled = window.pageYOffset || document.documentElement.scrollTop;
		if (scrolled > menuOffsetTop) {
			if (scrolled > bottomLimit) {
				menu.style.position = 'absolute';
				menu.style.bottom = '0';
				menu.style.top = null;
			} else {
				menu.style.position = 'fixed';
				menu.style.top = '0';
				menu.style.bottom = null;
			}
		} else {
			menu.style.position = 'static';
		}
	};

	window.onscroll = menuPositionHandler;
})();