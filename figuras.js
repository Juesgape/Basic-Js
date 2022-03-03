//Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

//código del triángulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base; 
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();

//Código del círculo 
console.group("Círculos")

//Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

//PI
const PI = Math.PI; 
console.log("PI es " + PI)

//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
console.groupEnd();



//Interacción  con el HTML
//Cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert("El perímetro del cuadrado es de " + perimetro + "cm");
}
function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert("El área del cuadrado es de " + area + "cm^2");
}

//Triángulo

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputTrianguloLado1");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("inputTrianguloLado2");
    const value2 = Number(input2.value);

    const base = document.getElementById("inputTrianguloBase");
    const value3 = Number(base.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert("El perimetro del triángulo es: " + perimetro + "cm");
} 

function calcularAreaTriangulo() {
    const base = document.getElementById("inputTrianguloBase");
    const value1 = base.value;

    const altura = document.getElementById("inputTrianguloAltura");
    const value2 = altura.value;

    const area = areaTriangulo(value1, value2);
    alert("EL área del triángulo es de " + area + "cm^2");
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("inputRadioCirculo");
    const value = Number(input.value);

    const perimetro = perimetroCirculo(value);
    alert("El perímetro del círculo es de " + perimetro + "cm");
}

function calcularAreaCirculo() {
    const input = document.getElementById("inputRadioCirculo")
    const value = Number(input.value)

    const area = areaCirculo(value);
    alert("El área del círculo es de " + area + "cm^2")
}

function calcularAlturaTrianguloIsosceles(lado1, lado2, base) {
    if (lado1 == lado2 && lado1 != base) {
        console.log('Es un triángulo isósceles');
        const cateto = (base / 2) ** 2;
        const hipotenusa = (lado1) ** 2;
        const altura = Math.sqrt((hipotenusa) - (cateto));
        alert("La altura del tríangulo es " + altura);
    } else {
        alert("No es un triángulo isósceles");
    }
}

