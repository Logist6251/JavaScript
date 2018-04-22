function repetedStr(str) {
	let cnd = 1;
	const frst = str.charAt(0);
	let rStr = frst;
	let chkStr = '';
	let k = 1;
	let rCnt = 0;
	
	for (let i = 1; i <= str.length-1; i++) {
		if (cnd == 1) {
			if (str.charAt(i) != frst) rStr += str.charAt(i);
			else {
				chkStr += frst;
				if (rStr == chkStr) {cnd = 3; k = 2; chkStr = '';} 
				else {cnd = 2; rCnt = 1;}
			}
		} else if (cnd == 2) {
			if (str.charAt(i) == rStr.charAt(rCnt)) {
				chkStr += str.charAt(i);
				rCnt++;
			} else {
				rStr += chkStr + str.charAt(i);
				chkStr = '';
				rCnt = 0;
				cnd = 1;
			}
			if (rStr == chkStr) {cnd = 3; k = 2; rCnt = 0; chkStr = '';}
		} else if (cnd == 3) {
			if (str.charAt(i) == rStr.charAt(rCnt)) {
				rCnt ++;
				chkStr += str.charAt(i);
			}
			else {
				for (let j = 1; j < k; j++) rStr += rStr;
				rStr += chkStr + str.charAt(i);
				chkStr = '';
				rCnt = 0;
				k = 1;
				cnd = 1;
			}
			if (rStr == chkStr) {k++; rCnt = 0; chkStr = '';}
		}
	}
	return k;
}

let str = prompt('Enter string','');
alert(repetedStr(str));