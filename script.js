const texto_entrada = document.querySelector(".input-entrada");
const texto_salida = document.querySelector(".salida");

const h2 = document.querySelector(".no1");
const h3 = document.querySelector(".no2");

const btnCopiar = document.querySelector(".btn-copiar");
const mensaje_no = document.querySelector(".mensaje-no");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

let codigoAEncriptar = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

function Encriptar() {
  console.log(texto_entrada.value);

  if (texto_entrada.value == null || texto_entrada.value == "") {
    texto_salida.style.backgroundImage = "url(Img/Muñeco.png)";
    texto_salida.value = "";
    mensaje_no.style.visibility = "visible ";
    btnCopiar.style.display = "none";

    texto_entrada.focus();
  } else {
    const textoDesencriptado = encriptarMensaje(texto_entrada.value);
    texto_salida.value = textoDesencriptado;
    texto_entrada.value = "";
    texto_salida.style.backgroundImage = "none";

    mensaje_no.style.visibility = "hidden";

    btnCopiar.style.display = "flex";
  }
}

function encriptarMensaje(entrada) {
  entrada = entrada.toLowerCase();

  for (let i = 0; i < codigoAEncriptar.length; i++) {
    if (entrada.includes(codigoAEncriptar[i][0])) {
      entrada = entrada.replaceAll(
        codigoAEncriptar[i][0],
        codigoAEncriptar[i][1]
      );
    }
  }

  return entrada;
}

function Desencriptar() {
  if (texto_entrada.value == null || texto_entrada.value == "") {
    texto_salida.style.backgroundImage = "url(Img/Muñeco.png)";
    mensaje_no.style.visibility = "visible ";
    btnCopiar.style.display = "none";
    texto_salida.value = "";
    texto_entrada.focus();
  } else {
    const textoDesencriptado = desencriptarMensaje(texto_entrada.value);
    texto_salida.value = textoDesencriptado;
    texto_entrada.value = "";
    texto_salida.style.backgroundImage = "none";
    mensaje_no.style.visibility = "hidden";
    btnCopiar.style.display = "flex";
  }
}

function desencriptarMensaje(salida) {
  salida = salida.toLowerCase();
  for (let i = 0; i < codigoAEncriptar.length; i++) {
    if (salida.includes(codigoAEncriptar[i][1])) {
      salida = salida.replaceAll(
        codigoAEncriptar[i][1],
        codigoAEncriptar[i][0]
      );
    }
  }
  return salida;
}

function Copiar() {
  let contenido = document.querySelector("#resultado");
  contenido.select();
  document.execCommand("copy");
  texto_salida.value = "";
  texto_entrada.focus();
}

// //img =>
// //i=> para que tome todas las letras mayusculas y minusculas
// //g=> tome toda la oracion o linea
// //m=> tome en cuenta multiples lineas

// function Encriptar(){
//     let entrada =   document.getElementById("entrada").value.toLowerCase();

//     if(entrada != ""){
//             let encriptado=entrada.replace(/e/img,"enter");
//             encriptado=encriptado.replace(/i/img,"imes");
//             encriptado=encriptado.replace(/a/img,"ai");
//             encriptado=encriptado.replace(/o/img,"ober");
//             encriptado=encriptado.replace(/u/img,"ufat");
//             console.log(encriptado);

//             document.getElementById("resultado").innerHTML = encriptado;
//             document.getElementById("mensaje-no").innerHTML = "";
//     }else{
//         document.getElementById("mensaje-no").innerHTML = msj_no;
//         document.getElementById("resultado").innerHTML = "";
//         entrada.focus();
//     }

//     document.getElementById("btnCopiar").style.display="show";
//     document.getElementById("btnCopiar").style.display="inherit";
// }
// /*

// // Obtener referencia a botones
// // Recuerda: el punto . indica clases
// const botones = document.querySelectorAll(".botones");
// // Definir función y evitar definirla de manera anónima
// const cuandoSeHaceClick = function (evento) {
// 	// Recuerda, this es el elemento
// 	console.log("El texto que tiene es: ", this.innerText);
//     let entrada =   document.getElementById("entrada").value;
//     if(entrada != ""){

//         if (this.innerText =="Encriptar") {
//             document.getElementById("resultado").innerHTML = "";
//             entrada=entrada.replace(/e/img,"enter");
//             entrada=entrada.replace(/i/img,"imes");
//             entrada=entrada.replace(/a/img,"ai");
//             entrada=entrada.replace(/o/img,"ober");
//             entrada=entrada.replace(/u/img,"ufat");
//             console.log(entrada);

//             document.getElementById("resultado").innerHTML = entrada;

//         }  else if (this.innerText=="Desencriptar"){
//             document.getElementById("resultado").innerHTML = "";
//             entrada =   document.getElementById("entrada").value;
//             entrada = entrada.replace(/enter/img,"e");
//             entrada = entrada.replace(/imes/img,"i");
//             entrada = entrada.replace(/ai/img,"a");
//             entrada = entrada.replace(/ober/img,"o");
//             entrada = entrada.replace(/ufat/img,"u");
//             console.log(entrada);

//             document.getElementById("resultado").innerHTML = entrada;
//         }else if(this.innerText=="Copiar"){
//             document.getElementById("entrada").value = document.getElementById("resultado").value;
//             document.getElementById("resultado").value="";
//         }

//     }else{
//         alert("Debe ingresar un texto a procesar");
//         entrada.focus();
//     }

// 	// Podemos cambiar cualquier cosa, p.ej. el estilo
// 	this.style.borderColor = "blue";
// }
// // botones es un arreglo así que lo recorremos
// botones.forEach(boton => {
// 	//Agregar listener
// 	boton.addEventListener("click", cuandoSeHaceClick);
// });

// */

// function Desencriptar(){
//     let entrada =   document.getElementById("entrada").value;
//     if(entrada != ""){
//         let desencripttado = entrada.replace(/enter/img,"e");
//         desencripttado = desencripttado.replace(/imes/img,"i");
//         desencripttado = desencripttado.replace(/ai/img,"a");
//         desencripttado = desencripttado.replace(/ober/img,"o");
//         desencripttado = desencripttado.replace(/ufat/img,"u");

//         document.getElementById("resultado").innerHTML = desencripttado;
//         document.getElementById("mensaje-no").innerHTML = "";
//     }else{
//         document.getElementById("mensaje-no").innerHTML = msj_no;
//         document.getElementById("resultado").innerHTML = "";
//         entrada.focus();
//     }

// }
