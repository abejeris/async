// function getData() {
// 	const data = axios.get('https://swapi.dev/api/planets/').then((data) => {
// 		console.log(data);
// 	});
// 	console.log(data);
// }
// --------------------------------------------------------------------------------
// async functions

// async function greet() {
// 	return 'HELLO nu!!!';
// }

// greet().then((val) => {
// 	console.log(val);
// });

// async function add(a, b) {
// 	if (typeof a !== 'number' || typeof b !== 'number') {
// 		throw 'a and b needs to be a number';
// 	}
// 	return a + b;
// }
// add('e', 'r')
// 	.then((val) => {
// 		console.log(val);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

// --------------------------------------------------------------------------------
// await keyword

// function getPlanets() {
// 	return axios.get('https://swapi.dev/api/planets/');
// }

// getPlanets().then((res) => {
// 	console.log(res.data);
// });

// async function getPlanets() {
// 	const res = await axios.get('https://swapi.dev/api/planets/');
// 	console.log(res.data);
// }

// // ---with added catch error------------------------------
// getPlanets().catch((err) => {
// 	console.log(err, 'this is the error');
// });

// //with try catch block--------------------------------

async function getPlanets() {
	try {
		const res = await axios.get('https://swapi.dev/api/planets');
		console.log(res.data);
	} catch (e) {
		console.log('error is: ', e);
	}
}

getPlanets();
