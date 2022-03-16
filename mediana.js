function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
    }

function calcularMediana() {
    //Obtemenos los valores con los que vamos a trabajar
    const inputMediana = document.getElementById("inputMediana");
    const medianaValue = inputMediana.value;

    //Convertimos los datos tipo string a tipo número
    let arrayMediana = Array.from(medianaValue.split(","), Number);

    //Organizamos los datos de menor a mayor
    const listaOrdenada = arrayMediana.sort((numMenor, numMayor) =>
    numMenor - numMayor);

    // console.log(listaOrdenada);

    //Convertimos los valores a números enteros y sacamos la mitad de todos los valores
    const mitadLista = parseInt(listaOrdenada.length / 2);
    //console.log(mitadLista);

    function esPar(numerito) {
        if (numerito % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    let mediana;

    if (esPar(listaOrdenada.length)) {
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista];

        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
        mediana = promedioElemento1y2;
    } else {
        mediana = listaOrdenada[mitadLista];
    }
    const mostrarResultado = document.getElementById("resultadoMediana");
    mostrarResultado.innerText = "La mediana es de: " + mediana;
    }


