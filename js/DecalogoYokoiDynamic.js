
document.addEventListener('DOMContentLoaded', function () {

    const listaPalabras = ['felicidad', 'integridad', 'extraordinario', 'energia', 'ser'];
    
    let palabraAdivinar = [];
    let palabraMostrar = [];
    let numIntentos = 5;
    let nodoLetra = document.querySelector('#letra');
    let nodoBoton = document.querySelector('#boton');
    let nodoResultado = document.querySelector('#resultado');
    let nodoIntentos = document.querySelector('#intentos');


    function prepararJuego () {
        let posAleatoriaListaPalabras = _.random(listaPalabras.length - 1);
        if(posAleatoriaListaPalabras == 0) {
            document.getElementById("imagen").src="./img/smile.png";
        } else if(posAleatoriaListaPalabras == 1) {
            document.getElementById("imagen").src="./img/integrity.png";
        } else if(posAleatoriaListaPalabras == 2) {
            document.getElementById("imagen").src="./img/extraordinary.png";
        } else if(posAleatoriaListaPalabras == 3) {
            document.getElementById("imagen").src="./img/energy.png";
        } else if(posAleatoriaListaPalabras == 4) {
            document.getElementById("imagen").src="./img/ser.png";
        }
        console.log(posAleatoriaListaPalabras);
        
        let palabraAleatoria = listaPalabras[posAleatoriaListaPalabras];
        
        palabraAdivinar = palabraAleatoria.split('');
        
        for (let letra of palabraAdivinar) {
            palabraMostrar.push('_');
        }
        
        dibujarJuego();
    }
    
    function dibujarJuego () {    
        nodoResultado.textContent = palabraMostrar.join(' ');    
        nodoIntentos.textContent = numIntentos;
    }

    function comprobarLetraUsuario () {
    
        let letraUsuario = nodoLetra.value;    
        nodoLetra.value = '';    
        nodoLetra.focus();    
        for (const [posicion, letraAdivinar] of palabraAdivinar.entries()) {   
            if (letraUsuario == letraAdivinar) {
                palabraMostrar[posicion] = letraAdivinar;
            }
        }
        
        if (!palabraAdivinar.includes(letraUsuario)) {
            numIntentos -= 1;
        }
        acabarJuego();
        dibujarJuego();
    }

    function comprobarPulsadoEnter (evento) {
        if (evento.code == 'Enter') {
            comprobarLetraUsuario();
        }
    }


    function acabarJuego () {
        if (!palabraMostrar.includes('_')) {
            alert('¡Felicidades! ¡Ganaste!');
            location.reload(true);
        }
        if (numIntentos == 0) {
            alert('¡Perdiste! Era: ' + palabraAdivinar.join(''));
            location.reload(true);
        }
    }

    nodoBoton.addEventListener('click', comprobarLetraUsuario);    
    nodoLetra.addEventListener('keyup', comprobarPulsadoEnter);

    prepararJuego(); 
});
