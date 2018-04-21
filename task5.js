function check(str) {
	let round = 0;
	let square = 0;
	let figure = 0;
	for (let i = 0; i <= str.length-1; i++) {
		if ((round < 0)||(square < 0)||(figure < 0)) return false;
		if (str.charAt(i) == '(') round++;
		else if (str.charAt(i) == ')') round--;
		else if (str.charAt(i) == '[') square++;
		else if (str.charAt(i) == ']') square--;
		else if (str.charAt(i) == '{') figure++;
		else if (str.charAt(i) == '}') figure--;
		else return false;
	}
	if ((round == 0)&&(square == 0)&&(figure == 0)) return true;
	return false;
}

let str = prompt('Enter the string','');
alert(check(str));
