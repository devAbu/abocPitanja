$(document).ready(function(){

    function validateEmail($emailRegistracija) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test($emailRegistracija);
    }

    $('#buttonRegistracija').click(function(){

        var firstName = $('#firstName').val()
        var lastName = $('#lastName').val()
        var emailRegistracija = $('#emailRegistracija').val()
        var passwordRegistracija = $('#passwordRegistracija').val()
        var musko = $('#musko').is(':checked')
        var zensko = $('#zensko').is(':checked')
        

        if(firstName == ""){
            console.log('unesi ime')
        }else if(lastName == ""){
            console.log("unesi prezime")
        }else if(emailRegistracija == ""){
            console.log("unesi email")
        }else if(!validateEmail(emailRegistracija)){
            console.log("unesi ispravan email")
        }else if(passwordRegistracija == ""){
            console.log("unesi sifru")
        }else if(musko == false && zensko == false){
            console.log("izaberi spol")
        }else{
            console.log("odlicno")
            localStorage.setItem('email', emailRegistracija)
            localStorage.setItem('password', passwordRegistracija)
        }
        
    })

    $('#okoRegistracija').click(function () {
        var elementType = $('#passwordRegistracija').attr('type');
        console.log(elementType);
        if (elementType == "text") {
            $('#passwordRegistracija').attr('type', 'password');
        } else if (elementType == "password") {
            $('#passwordRegistracija').attr('type', 'text');
        }

    });

    $('#buttonLogin').click(function(){
        var emailLogin = $('#emailLogin').val()
        var passwordLogin = $('#passwordLogin').val()

        if(emailLogin == ""){
            console.log('unsei email login-a')
        }else if(!validateEmail(emailLogin)){
            console.log('unsei ispravan email login-a')
        }else if(passwordLogin == ""){
            console.log('unesi sifru login-a')
        }else{
            console.log('login odlican')

            var localStorageEmail = localStorage.getItem('email')
            var localStoragePassword = localStorage.getItem('password')

            if(localStorageEmail != emailLogin){
                console.log('email ne postoji')
            }else if(localStoragePassword != passwordLogin){
                console.log('sifra nije tacna')
            }else{
                console.log('localStorage odlican')
            }
        }


    })

    $('#okoLogin').click(function () {
        var elementTypeLogin = $('#passwordLogin').attr('type');
        console.log(elementTypeLogin);
        if (elementTypeLogin == "text") {
            $('#passwordLogin').attr('type', 'password');
        } else if (elementTypeLogin == "password") {
            $('#passwordLogin').attr('type', 'text');
        }
    });

    $('#buttonFeedback').click(function(){
        var name = $('#nameFeedback').val()
        var email = $('#emailFeedback').val()
        var feedback = $('#feedback').val()

        if(name == ""){
            console.log('unesi ime na poruci')
        }else if(email == ""){
            console.log('unesi email poruke')
        }else if(!validateEmail(email)){
            console.log('unesi ispravan email poruke')
        }else if(feedback == ""){
            console.log('unesi poruku')
        }else{
            console.log('odlicno')
        }
    })

    
})