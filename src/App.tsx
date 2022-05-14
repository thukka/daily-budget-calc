import React, { useState } from "react";
import "./App.css";
import { ReactComponent as GitHub_Logo } from "./assets/github.svg";
import calcDailyBudget from "./utils/calcDailybudget";

function App() {
    const [sum, setSum] = useState<string>("0");
    const dailyBudget = calcDailyBudget(sum);

    return (
        <div className="app">
            <div className="daily-budget">
                {dailyBudget} / day
            </div>
            <input type="number" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSum(e.target.value)} />
            <br />
            <div className="intro">
                Calculate your daily budget!
            </div>
            <br />
            (for the rest of the month)
            <footer>
                <GitHub_Logo className="footer-logo" />
            </footer>
        </div>
    );
}

export default App;