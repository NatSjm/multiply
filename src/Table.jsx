import { useState } from "react";

// const min = 1;
// const max = 9;

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}
const Table = () => {
	const [a, setA] = useState(getRandomInt(2, 10));
	const [b, setB] = useState(getRandomInt(2, 10));
	const [result, setResult] = useState('');
	const [message, setMessage] = useState('')

	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {

			handleClick()
		}
	};

	const handleClick = () => {
		const rightResult = a*b;
		console.log(rightResult);
		console.log(result)
		// eslint-disable-next-line
		if(rightResult == result){
			setMessage('Молодец, Лада. Давай ещё');
			setA(getRandomInt(2, 10));
			setB(getRandomInt(2, 10));
			setResult('')
		} else {
			setMessage('Не правильно.');
			setResult('');
		}

	}


	return <div className={'container'}>
		<p className={'numbers'}>{a} * {b}</p>
		<input className={'result'} value={result} onKeyDown={handleKeyPress} type={'number'} onChange={(e) => setResult(e.target.value)}/>
		<button className={'mainButton'}  onClick={handleClick}>Нажми меня, Лада</button>
		<div className={'message'}>{message}</div>
	</div>
};

export default Table;
