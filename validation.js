console.log("this is rehan travels, welcome programmer");

const name1 = document.getElementById('name1');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validEmail = false;
let validPhone= false;
let validUser = false;
//console.log(name,email, phone);

name1.addEventListener('blur', ()=>{   //when you click in the textarea  and then click outside of the text area then that event is known as blur

   //ss console.log("name is blurred");
    //validate the name here

    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/; //here 0-9 for numbers and a and A to z and Z for name and the limit is for 0 to 10 we need to add$ also so that the limit gets meaning
    let str = name1.value; //then we take the name value in str 
    console.log(regex,str); //we print both of them to check if we are on right path
    if(regex.test(str))   //here we test if regex's test function fulfills the given str 
    {
      //  console.log("baap ki shaadi huvi tabhi toh mai paida huva");
        name1.classList.remove('is-invalid');
        validname1 = true;
    }
    else
    {  //now we will add is invalid in our class of name so that if the name entered is wrong then the box will turn red 
        name1.classList.add('is-invalid');  //this is the syntax for dynamically adding in class 
        validname1 = false;
    }
    
})


phone.addEventListener('blur', ()=>{  

    let regex = /^[0-9]{1,12}$/; //here 0-9 for numbers and a and A to z and Z for name and the limit is for 0 to 10 we need to add$ also so that the limit gets meaning
    let str = phone.value; //then we take the name value in str 
    console.log(regex,str); //we print both of them to check if we are on right path
    if(regex.test(str))   //here we test if regex's test function fulfills the given str 
    {
       // console.log("baap ki shaadi huvi tabhi toh mai paida huva");
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else
    {  //now we will add is invalid in our class of name so that if the name entered is wrong then the box will turn red 
       phone.classList.add('is-invalid');  //this is the syntax for dynamically adding in class 
       validPhone = false;
    }
    
})


email.addEventListener('blur', ()=>{  


    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/; //here 0-9 for numbers and a and A to z and Z for name and the limit is for 0 to 10 we need to add$ also so that the limit gets meaning
    let str = email.value; //then we take the name value in str 
    console.log(regex,str); //we print both of them to check if we are on right path
    if(regex.test(str))   //here we test if regex's test function fulfills the given str 
    {
       // console.log("baap ki shaadi huvi tabhi toh mai paida huva");
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else
    {  //now we will add is invalid in our class of name so that if the name entered is wrong then the box will turn red 
        email.classList.add('is-invalid');  //this is the syntax for dynamically adding in class 
        validEmail = false;
    }
    


   // console.log("email is blurred");
})

let submit = document.getElementById('submit');
submit.addEventListener('click',  (e) =>{
  
    e.preventDefault();
   // console.log('You clicked on submit');

    let success = document.getElementById('success');
    success.classList.add('show');


      // Submit your form here
      if(validEmail && validUser && validPhone){
        let failure = document.getElementById('failure');

       // console.log('Phone, email and user are valid. Submitting the form');
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        // $('#failure').alert('close');
        $('#failure').hide();
        $('#success').show();
        
    }
    else{
      //  console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        // $('#success').alert('hide');
        $('#success').hide();
        $('#failure').show();
        }
})