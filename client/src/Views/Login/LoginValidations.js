const validation = (values) => {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;


    if (!values.email === "") {
        error.email = "Coloque un email"
        }
    else if (!email_pattern.test(values.email)){
        error.email = "Email invalido"
    } else {
        error.email = ""
    }


    if (values.password === "") {
        error.password = 'Agrege un password'
    }
    else if (!password_pattern.test(values.password)) {
        error.password = 'Password Incorrectos'
    }
    else {
        error.password = ''
    }
    return error;
}

export default validation;