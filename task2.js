function unit(number) {
	this.value = number;
	this.next = null;
}

function list() {
	this.head = null;
	
	this.add = function(number) {
		if (this.head == null)
			this.head = new unit(number);
		else {
			let cursor = this.head;
			while (cursor.next != null)
				cursor = cursor.next;
			cursor.next = new unit(number);
		}
	}
	
	this.search = function(number) {
		if (this.head == null) return false;
		let cursor = this.head;
		while (cursor != null) {
			if (cursor.value == number) return true;
			cursor = cursor.next;
		}
		return false;
	}
	
	this.delete = function(number) {
		if (this.head == null) return false;
		if (this.head.value == number) {
			this.head = this.head.next;
			return true;
		}
		let cursor = this.head.next;
		let prUnit = this.head;
		while (cursor != null) {
			if (cursor.value == number) {
				prUnit.next = cursor.next;
				cursor = null;
				return true;
			}
			prUnit = cursor;
			cursor = cursor.next;
		}
		return false;
	}
	
	this.toStr = function() {
		if (this.head == null) 
			return '';
		let cursor = this.head;
		let result = String(cursor.value);
		while (cursor.next != null) {
			result += String(cursor.next.value);
			cursor = cursor.next;
		}
		return result;
	}
}

function numToList(number) {
	let lst = new list();
	let i = 0;
	if (number < 0) {
		lst.add(0);
		i = 1;
	}
	for (;i < String(number).length; i++) 
		lst.add(String(number).charAt(i));
	return lst;
}

function split(str) {
	let result = '';
	for (let i = str.length-1; i >= 0; i--)
		result += str.charAt(i);
	return result;
}

function reverseSum(lst1,lst2) {
	let str1 = lst1.toStr();
	let str2 = lst2.toStr();
	str1 = split(str1);
	str2 = split(str2);
	let numSum = Number(str1)+Number(str2);
	numSum = split(String(numSum));
	return numToList(numSum);
}

/*  TEST reverseSum */
let lst1 = new list();
lst1.add(2);
lst1.add(4);
lst1.add(3);

let lst2 = new list();
lst2.add(5);
lst2.add(6);
lst2.add(4);

alert(reverseSum(lst1,lst2).toStr()); // 708