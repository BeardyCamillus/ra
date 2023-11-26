import { ChangeEvent, useState } from 'react'
import './App.css'

function App() {
    const [input, setInput] = useState<string>('');
    const [output, setOutput] = useState<string>('');

    const hexRegex = /^[0-9A-F]{6}[0-9a-f]{0,2}$/i;

    const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value.slice(1, 7);
        setInput(value);

        if (hexRegex.test(value)) {
            const r = parseInt(value.slice(0, 2), 16);
            const g = parseInt(value.slice(2, 4), 16);
            const b = parseInt(value.slice(4, 6), 16);
            setOutput(`rgb(${r}, ${g}, ${b})`);
        } else {
            setOutput('Ошибка!');
        }
    }

    return (
        <div className='app' style={{ backgroundColor: output === 'Ошибка!' ? '#ff0000' : output }}>
            <div className="converter-container">
                <input
                    className='color__input input'
                    type="text"
                    value={`#${input}`}
                    onChange={inputChangeHandler}
                />
                <input
                    className='color__input output'
                    type="text"
                    value={output}
                    disabled
                />
            </div>
        </div>
    )
}

export default App