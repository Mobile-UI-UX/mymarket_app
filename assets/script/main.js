
 $(document).ready(function () {
//     // console.log("ready!");
//     //  alert("sd")
// popup();
// $("#p").popup('open'); 
// $('#alert').css('visibility', '');


    // register
    $("#reg").bind( "click", function(event, ui) {
        alert("sdfs");
             const signupForm = document.querySelector('#reg-box');
            
           
            // get user info
            const user = signupForm['username'].value;
            const email = signupForm['email'].value;
            const password = signupForm['password'].value;
        
            console.log(email);
            // sign up the user
            auth.createUserWithEmailAndPassword(email, password).then(data => {
               
                console.log(data);
                // close the signup modal & reset form
                // const modal = document.querySelector('#modal-signup');
                // M.Modal.getInstance(modal).close();
                // signupForm.reset();
                $("#reg-box").trigger('reset');
            }).then(()=>{
                $("#reg-box").trigger('reset');
               
            }).catch(err => {

                alert(err)
                $('#error_div').css('visibility', '');
                signupForm.querySelector('#error').innerHTML=err.message;
               
            });
            
            // .catch(err=>{
            //    
            // });
      

        // $.mobile.changePage("../views/Login.html",{transition:"slideup"});
    });
   

   
   
});






// $("#nav_des").click(function() {
//     alert("comes here");
// //      //submit the form
// //    $.mobile.changePage("county.html",{transition:"slideup"});

//  });