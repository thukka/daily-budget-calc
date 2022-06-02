import React, { useEffect, useState } from "react";
import "./App.css";
import { ReactComponent as GitHub_Logo } from "./assets/github.svg";
import calcDailyBudget from "./utils/calcDailybudget";

function App() {
    const [sum, setSum] = useState<string>("0");
    const dailyBudget = calcDailyBudget(sum);

    useEffect(() =>{
        const checkForSum = window.localStorage.getItem("userSum");
        if (checkForSum) {
            setSum(checkForSum);
            (document.getElementById("input-sum") as HTMLInputElement).value = checkForSum;
        }
    }, []);

    const setSumToStorage = (sum: string) => {
        window.localStorage.setItem("userSum", sum);
        setSum(sum);
    };

    return (
        <div className="app">
            <div className="daily-budget">
                {dailyBudget} / day
            </div>
            <input id="input-sum" type="number" placeholder="€" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSumToStorage(e.target.value)} />
            <br />
            <div className="intro-animated">
                Calculate your daily budget!
            </div>
            <br />
            (for the rest of the month)
            <footer>
                <a href="https://github.com/thukka" target="_blank" rel="noreferrer">
                    <GitHub_Logo className="footer-logo" />
                </a>
            </footer>
        </div>
    );
}

export default App;