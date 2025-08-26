const logInBtn = document.getElementById('loginBtn');
logInBtn.addEventListener('click', function(e){
    e.preventDefault();

    
    const mobileNumber = '01710255313';
    const pinNumber = '1234';
    

    const mobileNumberValue = document.getElementById('mobileNumber').value;
    const pinNumberValue = document.getElementById('pinNumber').value;


    
    if(mobileNumberValue === mobileNumber && pinNumberValue ===  pinNumber){
        window.location.href = 'home.html';
    }
    else{
        const errorMessage = document.getElementById('error-message');
        errorMessage.innerText = 'Invalid mobile number or pin. Please try again.';
    }
});