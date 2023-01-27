import React, {FC, useState, useMemo} from 'react';

const Calculator: FC = () => {
    const [weight, setWeight] = useState<number>(0)
    const [height, setHeight] = useState<number>(0)

    const BMI = useMemo(() => calculateBMI(), [weight, height])

    function calculateBMI(){
        return Math.round(703 * weight / (Math.pow(height, 2)))
    }

    function changeWeight(event: React.ChangeEvent<HTMLInputElement>){
        setWeight(Number(event.target.value))
    }

    function changeHeight(event: React.ChangeEvent<HTMLInputElement>){
        setHeight(Number(event.target.value))
    }

    return (
        <div>
            <h4>Weight: {weight} lbs</h4>
            <input 
                type="range" 
                name="weight" 
                value={weight}
                onChange={changeWeight}
                min={1}
                max={1000}
                step={1} >
            </input>
            <h4>Height: {height} inches</h4>
            <input 
                type="range" 
                name="height" 
                value={height}
                onChange={changeHeight}
                min={1}
                max={1000}
                step={1} >
            </input>
            <div>
                <h4>Your BMI is:</h4>
                {BMI > 0 && <p>{BMI}</p>}
            </div>
        </div>
    );
};

export default Calculator;