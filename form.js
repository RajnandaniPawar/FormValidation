var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var msgError = document.getElementById('msg-error');
var btnError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contactName').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    };
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Name is required';
        return false;
    }
       nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
       return true;
};

function validatePhone(){
    var phone = document.getElementById('contactPhone').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone no. is required';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'Phone no. should be 10 digit';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'only digits please';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
};

function validateEmail(){
    var email = document.getElementById('contactEmail').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
       emailError.innerHTML = 'Email Invalid';
        console.log(email);
        return false;
    }
 
     emailError.innerHTML =  '<i class="fa-solid fa-circle-check"></i>';
     return true;
};

function validateMsg(){
    var msg = document.getElementById('contactMsg').value;
    var require = 30;
    var left = require - msg.length;

    if(left > 0){
        msgError.innerHTML = left + 'More charecter require';
        return false
    };

    msgErrorError.innerHTML =  '<i class="fa-solid fa-circle-check"></i>';
    return true;
};

function validateform(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMsg()){
        btnError.style.display  = 'block';
        btnError.innerHTML = 'Please fix this error to submit';
        setTimeout( function(){btnError.style.display = 'none'; },3000);
        return false ;
    }
};