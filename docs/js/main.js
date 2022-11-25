const form = document.forms.notification;
const email = document.forms.notification.email;
const error = document.querySelector('.error');
const submitBtn = document.getElementById('submit');

form.onsubmit = function() {
    
    if (!email.value.includes('@gmail.com') || email.value == "") {
        
        email.style.border = '2px solid var(--Light-Red)';
        error.innerHTML = 'Please provide a valid email address';
                                
        return false;
     
    }
    
    return true;
}


email.onfocus = function() {
        
    email.style.border = '';
    error.innerHTML = '';
    error.style.margin = '0';
}

function screenSize() {
    
    if (window.matchMedia("(max-width: 700px)").matches) {
        error.style.textAlign = 'center';
        
        email.after(error);
    }
}

screenSize();