// function getData() {
// 	const data = axios.get('https://swapi.dev/api/planets/').then((data) => {
// 		console.log(data);
// 	});
// 	console.log(data);
// }
// --------------------------------------------------------------------------------
// async functions

async function greet() {
	return 'HELLO nu!!!';
}

greet().then((val) => {
	console.log(val);
});

async function add(a, b) {
	if (typeof a !== 'number' || typeof b !== 'number') {
		throw 'a and b needs to be a number';
	}
	return a + b;
}
add('e', 'r')
	.then((val) => {
		console.log(val);
	})
	.catch((err) => {
		console.log(err);
	});
