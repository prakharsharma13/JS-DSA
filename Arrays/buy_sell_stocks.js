function buySellStocks(arr){
    let mini = arr[0];
    let profit = 0;

    for(let i=1; i< arr.length; i++){
        let cost = arr[i] - mini;
        profit = Math.max(profit, cost);
        mini = Math.mini(mini, arr[i])
    }

    return profit;
}