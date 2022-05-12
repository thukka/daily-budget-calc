import React, { useState } from "react";
import "./App.css";

const calcDailyBudget = (saldo: string): number => {
    // hae nykyinen päivä ja kuun viimeinen päivä
    const date = new Date();
    const endOfMonth = new Date();
    endOfMonth.setMonth(date.getMonth() + 1);
    endOfMonth.setDate(0);

    // laske montako päivää on jäljellä (vika pv - kuluva pv), jos kuluva pv on sama kuin vika pv niin asetetaan 0
    let days = endOfMonth.getDate() > date.getDate() ? endOfMonth.getDate() - date.getDate() : 0;

    // lisätään yksi päivä laskuihin koska halutaan mukaan kuluva päivä
    days = days + 1;
    console.log("päiviä jäljellä: ", days);

    // palauta numerona kahden desimaalin tarkkuudella
    const dailySumma = Number(saldo) / Number(days);
    return Number(dailySumma.toFixed(2));
};

function App() {
    const [sum, setSum] = useState<string>("0");
    const dailyBudget = calcDailyBudget(sum);

    return (
        <div className="App">
            <div className="DailyBudget">
                {dailyBudget} / day
            </div>
            <input type="number" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSum(e.target.value)} />
            <br />
            <div className="Intro">
                Calculate your daily budget!
            </div>
        </div>
    );
}

export default App;