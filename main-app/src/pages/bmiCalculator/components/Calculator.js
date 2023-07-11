import { useEffect, useMemo, useState } from 'react';
import './Calculator.scss'

const Calculator = () => {
    const [weight, setWeight] = useState(40);
    const [height, setHeight] = useState(140);
    const [text, setText] = useState('');

    const output = useMemo(() => {
        const calculatedHeight = height / 100;
        return (weight / (calculatedHeight * calculatedHeight)).toFixed(1);
    })

    useEffect(() => {
    let calculatedText = '';

    if (output < 18.5) {
        calculatedText = 'You should gain weight! Weight is not enough to be healthy!';
    } else if (output >= 18.5 && output <= 24.9) {
        calculatedText = 'You did well, your weight is normal!';
    } else if (output >= 25.0 && output <= 29.9) {
        calculatedText = 'You are overweight! Control your diet and exercise!';
    } else if (output >= 30) {
        calculatedText = 'You are overweight, you need to lose weight! Love yourself, life is wonderful!';
    } else {
        calculatedText = ''
    }

    setText(calculatedText);
    }, [output]);

    return (
            <div className="container">
                <p>Weight: {weight} kg</p>
                <input type="range" step="1"
          min="40"
          max="220" onChange={(e) => setWeight(e.target.value)}/>
                <p>Height: {height} sm</p>
                <input type="range" step="1"
          min="140"
          max="220" onChange={(e) => setHeight(e.target.value)}/>

                <h4>Your BMI is</h4>
            <div className="bmi">{output}</div>
            <span>{text}</span>
            
        </div>
    )
}

export default Calculator;