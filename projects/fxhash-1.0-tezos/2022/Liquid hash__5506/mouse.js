class Mouse {
	constructor(canvas) {
		this.x = -100;
		this.y = -100;
		let rect = canvas.getBoundingClientRect();

		canvas.onmousemove = (e) => {
			this.x = (e.clientX - rect.left) * 800 / parseInt(getComputedStyle(document.querySelector('canvas')).width, 10);
			this.y = (e.clientY - rect.top) * 800 / parseInt(getComputedStyle(document.querySelector('canvas')).height, 10);
		};
		canvas.onmouseout = (e) => {
			this.x = -100;
			this.y = -100;
		};
		canvas.ontouchstart = (e) => {
			this.x = (e.touches[0].clientX - rect.left) * 800 / parseInt(getComputedStyle(document.querySelector('canvas')).width, 10);
			this.y = (e.touches[0].clientY - rect.top) * 800 / parseInt(getComputedStyle(document.querySelector('canvas')).height, 10);
		}
		canvas.ontouchmove = (e) => {
			this.x = (e.touches[0].clientX - rect.left) * 800 / parseInt(getComputedStyle(document.querySelector('canvas')).width, 10);
			this.y = (e.touches[0].clientY - rect.top) * 800 / parseInt(getComputedStyle(document.querySelector('canvas')).height, 10);
		}
		canvas.ontouchend = (e) => {
			this.x = -100;
			this.y = -100;
		}
	}
}