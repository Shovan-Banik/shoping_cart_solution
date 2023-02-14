function inputFieldId(id){
    const inputField=document.getElementById(id);
    const inputFieldString=inputField.value;
    const inputFieldNumber=parseInt(inputFieldString);
    return inputFieldNumber;
}
function elementFieldId(id){
    const elementField=document.getElementById(id);
    const elementFieldString=elementField.innerText;
    const elementFieldNumber=parseInt(elementFieldString);
    return elementFieldNumber;
}
function setInputValue(id,number){
    const updateInput=document.getElementById(id).value=number;
    return updateInput;
}
function setElementValue(id,number){
    const updateElement=document.getElementById(id).innerText=number;
    return updateElement;
}
function subTotal(){
    const totalPhonePrice=elementFieldId('phone-price');
    const totalCasePrice=elementFieldId('case-price');
    const subTotalPrice=totalCasePrice+totalPhonePrice;
    setElementValue('sub-total',subTotalPrice);
    const totalTaxString=(subTotalPrice*0.1).toFixed(2);
    const totalTax=parseFloat(totalTaxString);
    setElementValue('tax',totalTax);
    const totalPriceForAll=subTotalPrice+totalTax;
    setElementValue('final-total',totalPriceForAll);
}