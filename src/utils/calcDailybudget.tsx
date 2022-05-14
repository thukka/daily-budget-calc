const calcDailyBudget = (saldo: string): number => {
    // get current day and last day of the current month
    const date = new Date();
    const endOfMonth = new Date();
    endOfMonth.setMonth(date.getMonth() + 1);
    endOfMonth.setDate(0);

    // calculate how many days there are left (last day - current day), if current day is the same as last day set 0
    let days = endOfMonth.getDate() > date.getDate() ? endOfMonth.getDate() - date.getDate() : 0;

    // add one more because we want the current day to be included
    days = days + 1;

    // return as a number with 2 decimals
    const dailySumma = Number(saldo) / Number(days);
    return Number(dailySumma.toFixed(2));
};

export default calcDailyBudget;