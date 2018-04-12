function b() {
    const current = new Date();
    const nowYear = current.getFullYear();
    const nowMonth = current.getMonth();
    const nowDay = current.getDay();
    const secondsFromDayStart = new Date(nowYear,nowMonth,nowDay,0,0,0).getTime();
    
    let secondsFromBeginningOfTheDay = current.getTime()- secondsFromDayStart;
   
    return Math.round(secondsFromBeginningOfTheDay/1000);
}

console.log(b());

