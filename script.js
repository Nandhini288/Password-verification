document.addEventListener('keyup', function (){
    var form = document.getElementById("form");
    var userName = document.getElementById("username");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var repassword = document.getElementById("repassword");
    var submit = document.getElementById("submit");

    var errorName = document.getElementById('error_name');
    var errorEmail = document.getElementById('error_email');
    var errorPass = document.getElementById('error_pass');
    var errorRePass = document.getElementById('error_repass');

function validateName (){
    if(userName.value == "" || userName.value == null){
        errorName.textContent = "Enter Name";
        errorName.style.display = 'block';
        userName.style.border = "1px solid red";
        return true;
    }else{
        errorName.style.display = 'none';
        userName.style.border = '1px solid lightseagreen'
        return false;
    }
};

function validateEmailInput() {
    const emailInput = email.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (emailRegex.test(emailInput)) {
      errorEmail.textContent = ""; // Email is valid
      email.style.border = '1px solid lightseagreen'
      return false;
    } else {
      errorEmail.textContent = "Please enter a valid email address.";
      email.style.border = "1px solid red";
      return true;
    }
  }

function validatePass (){
    if(password.value.length < 6){
        errorPass.textContent = "Password must be minimum 6 characters";
        errorPass.style.display = 'block';
        password.style.border = "1px solid red";
        return true;
    }else{
        errorPass.style.display = 'none';
        password.style.border = '1px solid lightseagreen'
        return false;
    }
}

function validateRePass() {
    if(repassword.value === password.value){
        errorRePass.style.display = 'none';
        repassword.style.border = '1px solid lightseagreen'
        return false;
    }else{
        errorRePass.textContent = "Password not matched";
        errorRePass.style.display = 'block';
        repassword.style.border = "1px solid red";
        return true;
    }
}

function validateForm (){
    var Name = validateName();
    var EmailInput = validateEmailInput()
    var Pass = validatePass();
    var rePass = validateRePass();

    submit.disabled = (Name || Pass || EmailInput || rePass);
    
}
userName.addEventListener('input', validateForm);
email.addEventListener('input', validateForm);
password.addEventListener('input', validateForm);
repassword.addEventListener('input', validateForm);

validateForm();
});


function validate(){
    console.log("hello")
    var userName = document.getElementById("username");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
        
    alert("Name: " + userName.value + "\n" + "Email: " + email.value + "\n" + "Your Registration is Successfull" )
        
    }
