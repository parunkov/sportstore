'use strict';
;
(function() {
	var footerForm = document.querySelector(".footer-form");
	var footerFormBtn =footerForm.querySelector(".btn");

	footerFormBtn.addEventListener("click", function(event) {
		event.preventDefault();
	});

	let now = new Date();
	let newDay = now.getDate() + 1;
	let endDate = now;
	endDate.setDate(newDay);
	endDate.setHours(0, 0, 0, 0);

	let timer = document.querySelectorAll('.offer-clock h2');


	let viewTime = function() {
		let now = new Date();
		let timerValue = endDate - now;
		let addNull = function (value) {
			let string = String(value);
			if (string.length < 2) {
				string = '0' + string;
			}
			return string;
		}
		let hours = Math.floor(timerValue/60/60/1000);
		let minutes = Math.floor(timerValue/60/1000) - hours * 60;
		let seconds = Math.floor(timerValue/1000) - hours * 60 * 60 - minutes * 60;
		timer[0].textContent = addNull(hours);
		timer[1].textContent = addNull(minutes);
		timer[2].textContent = addNull(seconds);
	}
	setInterval(viewTime, 1000);		

})();

// Animation

(function() {
	let offerText = document.querySelector('.offer-text');
	// offerText.classList.add('offer-text-active');

	let isScroll = false;
	let isFullyVisible = function(el) {
		let elementBoundary = el.getBoundingClientRect();
		// console.log(elementBoundary);
		let top = elementBoundary.top;
		let bottom = elementBoundary.bottom;

		return((top >= 0) && (bottom <= window.innerHeight));
	}

	let animation = function() {
		// console.log(isFullyVisible(offerText));
		if (isFullyVisible(offerText)) {
			offerText.classList.add('offer-text-active');
		}
	}
	let onScroll = function(e) {
		// console.log('scroll');
		if (isScroll == false) {
			window.requestAnimationFrame(function() {
				animation();
				isScroll = false;
			});
		}
		isScroll = true;
	}
	document.addEventListener('scroll', onScroll);
})();