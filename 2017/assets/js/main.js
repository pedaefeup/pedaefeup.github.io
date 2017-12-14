/*
	Tessellate by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		wide: '(max-width: 1680px)',
		normal: '(max-width: 1280px)',
		narrow: '(max-width: 1000px)',
		mobile: '(max-width: 736px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Scrolly links.
			$('.scrolly').scrolly();

		// Prioritize "important" elements on narrow.
			skel.on('+narrow -narrow', function() {
				$.prioritize(
					'.important\\28 narrow\\29',
					skel.breakpoint('narrow').active
				);
			});

//This might be shitty

		// Menu.
			var $menu = $('#menu');

			$menu._locked = false;

			$menu._lock = function() {

				if ($menu._locked)
					return false;

				$menu._locked = true;

				window.setTimeout(function() {
					$menu._locked = false;
				}, 350);

				return true;

			};

			$menu._show = function() {

				if ($menu._lock())
					$body.addClass('is-menu-visible');

			};

			$menu._hide = function() {

				if ($menu._lock())
					$body.removeClass('is-menu-visible');

			};

			$menu._toggle = function() {

				if ($menu._lock())
					$body.toggleClass('is-menu-visible');

			};

			$menu
				.appendTo($body)
				.on('click', function(event) {

					event.stopPropagation();

					// Hide.
						$menu._hide();

				})
				.find('.inner')
					.on('click', '.close', function(event) {

						event.preventDefault();
						event.stopPropagation();
						event.stopImmediatePropagation();

						// Hide.
							$menu._hide();

					})
					.on('click', function(event) {
						event.stopPropagation();
					})
					.on('click', 'a', function(event) {

						var href = $(this).attr('href');

						event.preventDefault();
						event.stopPropagation();

						// Hide.
							$menu._hide();

						// Redirect.
							window.setTimeout(function() {
								window.location.href = href;
							}, 350);

					});

			$body
				.on('click', 'a[href="#menu"]', function(event) {

					event.stopPropagation();
					event.preventDefault();

					// Toggle.
						$menu._toggle();

				})
				.on('keydown', function(event) {

					// Hide on escape.
						if (event.keyCode == 27)
							$menu._hide();

				});
//it was wasn't it?
	});

})(jQuery);