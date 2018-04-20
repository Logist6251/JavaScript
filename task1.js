function split(str) {
	let result = '';
	for (let i = str.length-1; i >= 0; i--)
		result += str.charAt(i);
	return result;
}

function binToDex(str) {
	let result = 0;
	let pow2 = 1;
	str = split(str);
	for (let i = 0; i <= str.length-1; i++)
		if ((str.charAt(i) == '0')||(str.charAt(i) == '1')) {
			result += str.charAt(i)*pow2;
			pow2 *= 2;
		}
		else return undefined;
	return result;
}

let str = prompt('Enter binary number','');
let result = binToDex(str);
(result == undefined) ? alert('Bad input!') : alert(result);
