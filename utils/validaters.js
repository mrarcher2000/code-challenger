module.exports.validateRegisterInput = (
    username,
    email,
    password,
    confirmPassword
) => {
    const errors = {};
    if(username.trim() === ''){
        errors.username = 'The username cannot be left empty!'
    }
    if(email.trim() === ''){
        errors.email = 'The email cannot be left empty!'
    } else {

        //Regex found at @W3 resource https://www.w3resource.com/javascript/form/email-validation.php

        const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(!email.match(regEx)){
            errors.email = 'You have to enter a valid email address';

        }
    }

    if(password === ''){
        errors.password = 'You cant have an empty passowrd'

    } else if(password !== confirmPassword){
        errors.confirmPassword = 'The passwords have to match';
    }
    return {
        errors,
        valid: Object.keys(errors).length < 1

    };


    
};

module.exports.validateLoginInput = (username,password) => {
    const errors = {};
    if(username.trim() === ''){
        errors.username = 'The Username cannot be left empty!'
    }
    if(password.trim() === ''){
        errors.password = 'The Password cannot be left empty!'
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1

    };



}