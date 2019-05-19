$(document).ready(function(){
    console.log('uspjesno se ucitala')
    alert('ucitala se')

    $('#button1').click(function(){
        var head = $('#head1')
        head.append(' JS')
    })

    $('#izracunaj').click(function(){
        var num1 = $('#broj1').val()
        var num2 = $('#broj2').val()

        var result = parseInt(num1) + parseInt(num2)
        console.log(result)
        $('#rezultat').val(result)
    })

    $('#button2').click(function(){
        var name = $('#name').val()
        var age = $('#godine').val()

        if(name == "" && age == ""){
            $('#error').html('Unesi oba fielda')
        }else if(name == ""){
            $('#error').html('Unesi ime')
        }else if(age == ""){
            $('#error').html('Unesi godine')
        }else {
            $('#error').html('SUper')
        }
    })

    $('#oko').click(function(){
        var password = $('#pass').attr('type')
        var text = $('#pass')
        if(password == "text"){
            text.attr('type', 'password')
        }else{
            text.attr('type', 'text')
        }
    })
        
    
})