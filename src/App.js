import Component from './component.js';
import { useState, useEffect} from 'react';

function App() {
    const [tipPercent, setTipPercent] = useState(undefined);
    const [numberOfPeople, setNumberOfPeople] = useState(undefined);
    const [bill, setBill] = useState(undefined);

    const handleTipPercent = (e) => {
        const btn = e.target;
        setTipPercent(btn.innerText.slice(0, btn.innerText.length - 1));
    }

    const handleCustomTipPercent = (e) => {
        console.log(e.target);
        if(isNaN(+e.target.value)) {
            e.target.value = e.target.value.slice(0, e.targe.value.length - 1);
        }else {
            setTipPercent(e.target.value);
        }
    }

    const handleBillText = (e) => {
        if(isNaN(+e.target.value)) {
            e.target.value = e.target.value.slice(0, e.target.value.length - 1);
        }else {
            setBill(e.target.value);
        }
    }

    const handlePeople = (e) => {
        if(isNaN(+e.target.value)) {
            e.target.value = e.target.value.slice(0, e.target.value.length - 1);
        }else {
            setNumberOfPeople(e.target.value);
        }
    }

    useEffect(() => {
        console.log(tipPercent, numberOfPeople, bill);
        console.log("-------");
        if(tipPercent && numberOfPeople && bill) {
            let tipPerPerson = document.querySelector(".amountDisplay");
            let currentTip = Math.trunc((((tipPercent/100)*bill)/numberOfPeople)*100)/100;
            tipPerPerson.innerText = "$" + Math.trunc((((tipPercent/100)*bill)/numberOfPeople)*100)/100;

            let totalTip = document.querySelector(".totalAmountDisplay");
            totalTip.innerText = "$" + Math.trunc(((bill / numberOfPeople) + currentTip) * 100) / 100;
        }
    }, [tipPercent, numberOfPeople, bill])

    return <Component handleTipPercent={handleTipPercent} handleBillText={handleBillText} handlePeople={handlePeople} handleCustomTipPercent={handleCustomTipPercent}/>;
}

export default App;
