const pwd_input_field = document.getElementById("password");
const password_info_tab = document.getElementById("password-info-tab-0");
const pwd_sign = document.getElementById("pwd-img");
const tooltip = document.getElementById('pwd-tooltip');

const requirement_poor =  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
const requirement_good = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
const requirement_strong = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{10,})/;
const requirement_very_strong = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{12,})/;

pwd_input_field.addEventListener('input',validatePassword);

function validatePassword(e) {
    console.log(e.target.value);
    if (e.target.value.length < 1 ) {
        tooltip.innerHTML = "6 characters or more (be tricky!)";
        password_info_tab.id = "password-info-tab-0";
        pwd_sign.src = "./img/symbol-arrow-grey.svg";

    } else if (e.target.value.length < 8 ) {
        tooltip.innerHTML = "Too short";
        password_info_tab.id = "password-info-tab-0";
        pwd_sign.src = "./img/symbol-arrow-grey.svg";   

    } else if (e.target.value.length >= 8 && 
                e.target.value.length <= 10 ) {
                    
        if (e.target.value.match(requirement_strong)) {
            tooltip.innerHTML = "Strong";
            password_info_tab.id = "password-info-tab-3";
            pwd_sign.src = "./img/symbol-ok-yellow.svg";
        } else if (e.target.value.match(requirement_good)) {
            tooltip.innerHTML = "Good";
            password_info_tab.id = "password-info-tab-2";
            pwd_sign.src = "./img/symbol-ok-yellow.svg";
        } else if (e.target.value.match(requirement_poor)) {
            tooltip.innerHTML = "Weak";
            password_info_tab.id = "password-info-tab-1";
            pwd_sign.src = "./img/symbol-ok-yellow.svg";
        } else {
            tooltip.innerHTML = "Too weak";
            password_info_tab.id = "password-info-tab-0";
            pwd_sign.src = "./img/symbol-arrow-grey.svg";
        }
                        
    } else if (e.target.value.length > 10) {
        if (e.target.value.match(requirement_very_strong)) {
            tooltip.innerHTML = "Very strong";
            password_info_tab.id = "password-info-tab-4";
            pwd_sign.src = "./img/symbol-ok-green.svg";
        } else if (e.target.value.match(requirement_strong)) {
            tooltip.innerHTML = "Strong";
            password_info_tab.id = "password-info-tab-3";
            pwd_sign.src = "./img/symbol-ok-yellow.svg";
        } else if (e.target.value.match(requirement_good)) {
            tooltip.innerHTML = "Good";
            password_info_tab.id = "password-info-tab-2";
            pwd_sign.src = "./img/symbol-ok-yellow.svg";
        } else if (e.target.value.match(requirement_poor)) {
            tooltip.innerHTML = "Weak";
            password_info_tab.id = "password-info-tab-1";
            pwd_sign.src = "./img/symbol-ok-yellow.svg";
        } else {
            tooltip.innerHTML = "Too weak";
            password_info_tab.id = "password-info-tab-0";
            pwd_sign.src = "./img/symbol-arrow-grey.svg";
        }
        
    }
    
}