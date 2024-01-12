import { useEffect, useRef, useState } from "react";
import Progressbar from "./Components/Progressbar.jsx";

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
	const [message, setMessage] = useState('');
	const [mode, setMode] = useState('hold');
	const [total, setTotal] = useState(0);
	const [timeLeft, setTimeLeft] = useState(0);
	const inputRef = useRef(null);

	useEffect(() => {
		if (timeLeft > 0) {
			setTimeout(() => {
				setTimeLeft(prevTimeleft => prevTimeleft - 1);
			}, 1000)
		} else {
			setMode('hold')
		}
	}, [timeLeft])

	const handleKeyPress = (event) => {
		if (event.key === 'Enter' && mode === 'inProgress') {
			handleClick()
		}
	};

	const handleStartClick = () => {
		setTimeLeft(60);
		setMode('inProgress');
		setTotal(0);
		setResult('');
		inputRef.current.focus()
	}

	const handleButtonClick = () => {
		inputRef.current.focus();
		handleClick()
	}
	const handleClick = () => {
		const rightResult = a * b;
		// eslint-disable-next-line
		if (rightResult == result) {
			setMessage('Молодец, Лада. Давай ещё');
			setTotal((prev) => prev + 1)
		} else {
			setMessage('Не правильно. ' + a + ' * ' + b + ' = ' + rightResult);
		}
		setA(getRandomInt(2, 10));
		setB(getRandomInt(2, 10));
		setResult('')

	}


	return <>
		<h1>Умножение</h1>
		<button className={'mainButton'} disabled={mode === 'inProgress'} onClick={handleStartClick}>Начать</button>
		<p className={'numbers'}>{total}</p>
		<Progressbar completed={Math.round(timeLeft * 100 / 60)} customLabel=""/>
		<div className={'container'}>
			<p className={'numbers'}>{a} * {b}</p>
			<input ref={inputRef} className={'result'} value={result} onKeyDown={handleKeyPress} type={'number'}
				   onChange={(e) => setResult(e.target.value)}/>
			<button disabled={mode !== 'inProgress'} className={'mainButton'} onClick={handleButtonClick}>Ответ</button>
			<div className={'message'}>{message}</div>
		</div>
	</>
};

export default Table;
