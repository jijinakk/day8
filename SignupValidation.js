function validateFirstName() {
 
    var firstname = document.getElementById('firstname').value;
    var firstNameError = document.getElementById('firstNameError');

    var firstnamePattern = /^[a-zA-Z]+$/;
    
  
     if (!firstnamePattern.test(firstname)) {

      firstNameError.textContent = 'Name should only contain alphabetic characters';
     } 
    
   }

   function validateLastName() {
 
    var lastname = document.getElementById('lastname').value;
    var lastNameError = document.getElementById('lastNameError');

    var lastnamePattern = /^[a-zA-Z]+$/;
    if (!lastnamePattern.test(lastname)) {
     
      lastNameError.textContent = 'Name should only contain alphabetic characters';
    } 
   
    } 
   
   function validateDateOfBirth() {

    var dob = document.getElementById('dob').value;
    var dobError = document.getElementById('dobError');

    var enteredDate = new Date(dob);

    var currentDate = new Date();
    if (enteredDate > currentDate) {
      dobError.textContent="you can't select future date"
      } 
    }

    function validateEmail() 
    {
  
        var email = document.getElementById('email').value;
        var emailError = document.getElementById('emailError');

        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(email))
         {
          emailError.textContent="Please enter a valid email address";
        } 
    }

    function validatePhoneNumber() {
  
        var phoneNumber = document.getElementById('phoneNumber').value;
        var phoneNumberError = document.getElementById('phoneNumberError');

          var phoneNumberPattern = /^\d{10}$/;
          if (!phoneNumberPattern.test(phoneNumber)) {
            phoneNumberError.textContent="Please enter a valid 10-digit phone number";
          
        }
      }

    

      function validateAge() {
        var ageInput = document.getElementById('age');
        var ageError = document.getElementById('ageError');
        
        var age = ageInput.value.trim();
          if (isNaN(age) || parseInt(age) <= 17) {
          ageError.textContent = 'Age below 18 are not allowed to sign up';
    
        }
      }

      function signUp() {
        
        alert('Sign-up successful!');
      }