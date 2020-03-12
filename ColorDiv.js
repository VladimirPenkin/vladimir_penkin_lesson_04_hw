window.onload = function () {

	let divColor = document.querySelectorAll("div");

	function createNewColor() {
		let r = Math.floor(Math.random() * 255);
		let g = Math.floor(Math.random() * 255);
		let b = Math.floor(Math.random() * 255);
		let color = 'rgb('+ r + ','+ g + ',' + b + ')';
		return color;
	}

	for (let i = 0; i < divColor.length; i++) {
		divColor[i].onmouseover = function (e) {
			let randomColor = createNewColor();
			this.style.backgroundColor = randomColor;
			this.innerHTML = randomColor;
		}
	}

	window.onbeforeunload = function(){
		return "Don't leave me!";
	};
};

