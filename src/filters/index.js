export  const ExchangeToMoney=(amount,rate)=>{
    if(!amount||!rate) return '0.00';
    let ration=100;
    let rs=amount/rate;
    if(rs<1/ration) return rs;
    return Math.round(rs*100)/100;
}