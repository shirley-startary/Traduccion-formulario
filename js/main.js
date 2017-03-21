function traductor(){
  var title = document.getElementById("form-signin-heading");
  var email = document.getElementById("inputEmail");
  var password = document.getElementById("inputPassword");
  var check = document.getElementsByTagName("span")[0];
  var button = document.getElementsByClassName("btn")[0];

  title.innerHTML = "Por favor inicia sesión";
  email.placeholder="Por favor escriba su Email";
  password.placeholder ="Contraseña";
  check.innerHTML = "Recordar datos";
  button.innerHTML ="Iniciar Sesión";

}

function mostrarDatos(){
  var tituloMostrarDatos = document.getElementsByTagName("h3")[0]
  tituloMostrarDatos.innerHTML="Datos del Formulario";

  var mostrarEmailDato =document.getElementsByTagName("h5")[0];
  var mostrarPassDato =document.getElementsByTagName("h5")[1];


  var email= document.getElementById("inputEmail").value;
  mostrarEmailDato.innerHTML= "El correo electronico ingresado es: </br> "+email;
  
  var pass= document.getElementById("inputPassword").value;
  mostrarPassDato.innerHTML= "La clave Ingresada es: </br>"+pass;

  // var mostrarEmail = document.getElementById("mostrar");
  // var mostrarPass=document.getElementById("mostrar");
  // var h51=document.createElement("h5");
  // var h52=document.createElement("h5");
  // h51.innerHTML="El correo electronico ingresado es: </br> "+email;
  // h52.innerHTML="La clave Ingresada es: </br>"+pass;
  // mostrarEmail.appendChild(h51);
  // mostrarPass.appendChild(h52);
}
