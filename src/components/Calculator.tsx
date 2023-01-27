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

    function changeMessage(){
        let text = ''
        if(BMI < 18.5){
            text= 'underweight'
        }else if(BMI >= 18.5 && BMI < 25){
            text='healthy'
        }else if (BMI >25.0 && BMI < 30){
            text='overweight'
        }else{
            text='obese'
        }
        return `You are ${text}`
    }

    return (
        <div className='calculation-area'>
            <div className='input-area'>
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
            </div>
            <div className='display-area'>
                <h4>Your BMI is:</h4>
                {BMI > 0 && <div className='bmi-digit'>{BMI}</div>}
                {BMI > 0 && <h4>{changeMessage()}</h4>}
            </div>
        </div>
    );
};

export default Calculator;