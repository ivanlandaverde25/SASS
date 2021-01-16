window.onload = () => {
    console.error("ERROR WEON :v");
    
    let number = 5;
    
    let objeto1 = {
        nombre: "Ivan Landaverde",
        edad: 20,
        sexo: "masculino",
        carrera: "Ingeniera en sistemas",
        objeto2: {
            Juegos: {
                juego1:"call of duty",
                juego2:"Clash royale",
                juego3:"Free fire",
                juego4: "Clash of clans",

            },
            categoria: "Intermedio",
        }
    };

    // confirm("hola",56);
    // alert(52);
    
    console.log(objeto1.objeto2.Juegos.juego2);
    
    number.typeOf;

    const boton = document.getElementById('boton');
    const ingresar = document.getElementById('ingresar');
    const alerta = document.getElementById('alerta');
    const cadena = document.getElementById('cadena');
    const complete = document.getElementById('complete');
    const valor = document.getElementById('valor').value;
    const numero = document.getElementById('number');
    let n;

    console.warn(valor);

    complete.addEventListener('click', function(e){
        cadena.innerHTML = "ES DONDE SE COMPLETA LA CADENA";
    });

    ingresar.addEventListener('click', function(e){
        n = prompt('Dame un numero...','Numero...');
    });

    boton.addEventListener('click', function(){
        if (n != undefined) {
            agregar(n);
        } else {
            numero.type ="text";
            numero.value="Primero debes ingresar un numero :)";
            numero.readOnly=true;
            numero.style.transform = 'scale(1.05,1.05)';
            numero.style.overflow = 'scroll';
        }
    });

    agregar = (n) => {
    
        numero.value = n;
        numero.readOnly = true;
        numero.step = .01;
        numero.style.border = '2px solid red'; 
        numero.style.boxShadow ='4px 4px 4px rgba(0,0,0,0.6)';
        numero.style.transform = 'scale(1.05,1.05)';
        numero.style.overflow = 'visible';
    }

    alerta.addEventListener('click', function(e) {
        alert("PUTO EL QUE LO LEA :v");
    });

}