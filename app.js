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

// async function getPlanets() {
// 	try {
// 		const res = await axios.get('https://swapi.dev/api/planets');
// 		console.log(res.data);
// 	} catch (e) {
// 		console.log('error is: ', e);
// 	}
// }

// getPlanets();

// ----------------------------------------------------------------------------
// multiple await examples
// sequential example

// async function getPokemon() {
// 	try {
// 		const res1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
// 		const res2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
// 		const res3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
// 		console.log(res1.data.name);
// 		console.log(res2.data.name);
// 		console.log(res3.data.name);
// 	} catch (e) {
// 		console.log(e);
// 	}
// }
// getPokemon();

// -----------------------------------------------------------------------
// parallel example

async function getPokemon() {
	const res1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
	const res2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
	const res3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
	console.log(res1);
	const poke1 = await res1;
	const poke2 = await res2;
	const poke3 = await res3;
	console.log(poke1.data);
	console.log(poke2.data);
	console.log(poke3.data);
}
getPokemon();
