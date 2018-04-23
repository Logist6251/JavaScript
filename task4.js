function unit(str) {
	this.value = 1;
	this.str = str;
	this.next = null;
}

function list() {
	this.head = null;
	
	this.searchInc = function(str) {
		if (this.head == null) return false;
		let cursor = this.head;
		while (cursor != null) {
			if (cursor.str == str) {
				cursor.value++;
				return true;
			}
			cursor = cursor.next;
		}
		return false;
	}
	
	this.addOrInc = function(str) {
		if (this.head == null)
			this.head = new unit(str);
		else if (!this.searchInc(str))
		{
			let cursor = this.head;
			while (cursor.next != null)
				cursor = cursor.next;
			cursor.next = new unit(str);
		}
	}
	
	this.popularWord = function() {
		if (this.head == null) return 'Empty list';
		let cursor = this.head;
		let max = 0;
		let result;
		while (cursor != null) {
			if (cursor.value == max) result = '---';
			if (cursor.value > max) {
				result = cursor.str;
				max = cursor.value;
			}
			cursor = cursor.next;
		}
		return result;
	}
	
}

let lst = new list();
let str;

do {
	let word = '';
	str = prompt('Enter string','');
	for (let i = 0; i < str.length; i++) {
		if ((str.charAt(i) == ' ')||(str.charAt(i) == '\n')) {
			if (word != '') lst.addOrInc(word);
			word = '';
		}
		else word += str.charAt(i);		
	}
	if (word != '') lst.addOrInc(word);
} while (str != '');

alert(lst.popularWord());