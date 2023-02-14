function totalPhonePrice(newPhoneNumber){
    const updatePhoneNumber=setInputValue('number-phone-field',newPhoneNumber);
    const phonePrice=updatePhoneNumber*1219;
    setElementValue('phone-price',phonePrice);
}
document.getElementById('btn-phone-plus').addEventListener('click',function(){
    const phoneNumberField=inputFieldId('number-phone-field');
    const newPhoneNumber=phoneNumberField+1;
    totalPhonePrice(newPhoneNumber);
    subTotal();
})
document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const phoneNumberField=inputFieldId('number-phone-field');
    const newPhoneNumber=phoneNumberField-1;
    totalPhonePrice(newPhoneNumber);
    subTotal();
})