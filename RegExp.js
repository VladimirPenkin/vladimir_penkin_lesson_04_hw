window.onload = function () {

// индекс - 55535 - 5 numbers
let clickBtnFirst = document.querySelector("#checknumber");
clickBtnFirst.addEventListener("click", checkNumber);

function checkNumber () {

	let text = document.querySelector("#inputtextfirst").value;
	let regExp = /\d{5}/;
	let result = text.match(regExp);

	if (!result) {
		alert("В ведённой строке нет последовательности из 5 чисел");
	} else {
		alert("В ведённой строке есть последовательность из 5 чисел: " + result);
	};

	document.querySelector("#inputtextfirst").value = "";
};

//ip адресс
let clickBtnSecond = document.querySelector("#checkip");
clickBtnSecond.addEventListener("click", checkIp);

function checkIp () {

	let text = document.querySelector("#inputtextsecond").value;
	let regExp = /^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/
	let result = text.match(regExp);

	if (!result) {
		alert("Вы ввели не корректный ip адрес!\nПопробуйте ещё раз.");
	} else {
		alert("Вы ввели ip адрес: " + result);
	};

	document.querySelector("#inputtextsecond").value = "";
};

//цены в долларах - $0.84, $2.84, $4

let clickBtnThird = document.querySelector("#checkdollar");
clickBtnThird.addEventListener("click", checkDollar);

function checkDollar () {

	let text = document.querySelector("#inputtextthird").value;
	let regExp = /^\$\d*\.\d{1,2}$|^\$\d$/;
	let result = text.match(regExp);

	if (!result) {
		alert("Вы ввели цену не в $!\nПопробуйте ещё раз.");
	} else {
		alert("Вы ввели цену: " + result);
	};

	document.querySelector("#inputtextthird").value = "";
};

//дата в виде - 30/12/2016 - день, месяц, год

let clickBtnFourth = document.querySelector("#checkdate");
clickBtnFourth.addEventListener("click", checkDate);

function checkDate () {

	let text = document.querySelector("#inputtextfourth").value;
	let regExp = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
	let result = text.match(regExp);

	if (!result) {
		alert("Вы ввели не дату!\nПопробуйте ещё раз.");
	} else {
		alert("Вы ввели дату: " + result);
	};

	document.querySelector("#inputtextfourth").value = "";
};

};



