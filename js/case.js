function setTotalPrice(newCaseNumber){
    const newUpdateNumber=setInputValue('number-case-field',newCaseNumber);
    const newPrice=newUpdateNumber*59;
    setElementValue('case-price',newPrice);
}


document.getElementById('btn-case-plus').addEventListener('click',function(){
    const numberCaseField=inputFieldId('number-case-field');
    const newCaseNumber=numberCaseField+1;
   setTotalPrice(newCaseNumber);
   subTotal();
})

document.getElementById('btn-case-minus').addEventListener('click',function(){
    const numberCaseField=inputFieldId('number-case-field');
    const newCaseNumber=numberCaseField-1;
    setTotalPrice(newCaseNumber);
    subTotal();
   
})
