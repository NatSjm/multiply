import {  useRef, useState } from "react";

const words = {
	insects: 'насекомые',
	beetle: 'жук',
	ant: 'муравей',
	bee: 'пчела',
	butterfly: 'бабочка',
	grasshopper: 'кузнечик',
	leaf: 'лист',
	stick: 'палочка',
	stone: 'камень',
	grass: 'трава'
}
const English = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [result, setResult] = useState('');
	const [message, setMessage] = useState('');
	const [mode, setMode] = useState('hold');
	const [total, setTotal] = useState(0);

	const inputRef = useRef(null);

	const englishWords = Object.keys(words);
	const russianWords = Object.values(words);

	const currentRussian = russianWords[currentIndex];
	const handleKeyPress = (event) => {
		if (event.key === 'Enter' && mode === 'inProgress') {
			handleClick()
		}
	};

	const handleStartClick = () => {

		setMode('inProgress');
		setTotal(0);
		setResult('');
		inputRef.current.focus()
		setCurrentIndex(0);
	}

	const handleButtonClick = () => {
		inputRef.current.focus();
		handleClick()
	}
	const handleClick = () => {
		const rightResult = englishWords[currentIndex].toLowerCase();
		// eslint-disable-next-line
		if (rightResult == result.toLowerCase()) {
			setMessage('Молодец, Лада. Давай ещё');
			setTotal((prev) => prev + 1)
		} else {
			setMessage('Не правильно. Правильный ответ - ' + rightResult);
		}
		if(currentIndex < englishWords.length - 1){
		setCurrentIndex(index => index + 1)
			setResult('')
		} else {
			setMode('hold')
		}


	}

	return <>
		<h1>Английский</h1>
		<button className={'mainButton'} disabled={mode === 'inProgress'} onClick={handleStartClick}>Начать</button>
		<p className={'numbers'}>{total}</p>

		<div className={'container'}>
			<p className={'numbers'}>{currentRussian}</p>
			<input ref={inputRef} className={'result text'} value={result} onKeyDown={handleKeyPress}
				   onChange={(e) => setResult(e.target.value)}/>
			<button disabled={mode !== 'inProgress'} className={'mainButton'} onClick={handleButtonClick}>Ответ</button>
			<div className={'message'}>{message}</div>
		</div>
	</>
};
export default English;
