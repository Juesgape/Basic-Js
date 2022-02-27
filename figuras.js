//Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm")

function perimetroCuadrado(lado) {
    return lado * 4;
}
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm")

function areaCuadrado(lado) {
    return lado * lado;
}
//console.log("El área del cuadrado es: " + areaCuadrado + "cm^2")
console.groupEnd();

//Código del triángulo
/*console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
"Los lados del triángulo miden " 
+ ladoTriangulo1 
+ "cm, " 
+ ladoTriangulo2 
+ "cm, " 
+ baseTriangulo 
+ "cm"
);

const alturaTriangulo = 5.5;
console.log("La altura del triángulo es de " + alturaTriangulo + "cm")
*/
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base; 
}
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm")

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
// console.log("El area del triángulo es de " + areaTriangulo + "cm^2")
console.groupEnd();

//Código del círculo 
console.group("Círculos")

//Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es " + radioCirculo + "cm")

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