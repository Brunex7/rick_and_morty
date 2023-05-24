const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPass = /\d/;

const validate = (userData) => {
    let errors = {}

    if(!regexEmail.test(userData.username)){
        errors.username = "Invalid email."
    }

    if(!userData.username){
        errors.username = "Please, enter your email."
    }

    if(userData.username.length > 35){
        errors.username = "Invalid email, it's too long."
    }

    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = "Password length must be between 6 and 10 characters."
    }

    if(!regexPass.test(userData.password)){
        errors.password = "Password must contain one number at least."
    }

    return errors
}
export default validate