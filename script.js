const btnEl = document.getElementById('btn');
const bmiInputEl = document.getElementById('bmi-result')
const weightConditionEl = document.getElementById('weight-condition')



const calculateBmi = () =>{
    const heightEl = document.getElementById('height').value / 100
    const weightEl = document.getElementById('weight').value
    const bmiValue = (weightEl / (heightEl * heightEl)).toFixed(2)
    bmiInputEl.value = bmiValue;
    if(bmiValue < 18.5){
        weightConditionEl.innerText = 'Underweight'
    }else if(bmiValue >= 18.5 && bmiValue <= 24.9){
        weightConditionEl.innerText = 'Normal weight'
    }else if(bmiValue > 24.9 && bmiValue <= 29.9){
        weightConditionEl.innerText = 'Overweight'
    }else{
        weightConditionEl.innerText = 'Obesity'
    }
}

btnEl.addEventListener('click', calculateBmi)