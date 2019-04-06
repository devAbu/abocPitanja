console.log('stranica ucitana')

alert('javascript fajl uspjesno ucitan')

function dodaj(){
    var head = document.getElementById('head1')
    head.append(' JS')
}

function provjera(){
    var name = document.getElementById('name').value
    var godine = document.getElementById('godine').value

    if(name == ""){
        console.log('unesi ime')
        document.getElementById('error').innerHTML = 'UNESI IME'
        document.getElementById('error').style.color = 'red'
    }else if(godine == ""){
        console.log('unesi godine')
        var godine = document.getElementById('error')
        godine.innerHTML = 'Unesi godine'
        godine.style.color = 'red'
    }else if(godine == 0){
        console.log('unesi tacne godine')
        var godine = document.getElementById('error')
        godine.innerHTML = 'unesi tacne godine'
        godine.style.color = 'red'
    } else{
        var error = document.getElementById('error')
        error.innerHTML = 'Hvala VAM'
        error.style.color = 'green'

        setTimeout(function(){ error.innerHTML = ''; document.getElementById('name').value = ""; document.getElementById('godine').value = "" }, 2000);
    }
}

function sifra(){
    var sifra = document.getElementById('pass')

    if(sifra.getAttribute('type') == 'password'){
        sifra.setAttribute('type', 'text')
    } else{
        sifra.setAttribute('type', 'password')    
    }
}

function izracunaj(){
    var broj1 = document.getElementById('broj1').value
    var broj2 = document.getElementById('broj2').value

    var rezultat = parseInt(broj1) + parseInt(broj2)

    console.log(rezultat)
    var text = document.getElementById('rezultat')
    text.setAttribute('value', rezultat)
}