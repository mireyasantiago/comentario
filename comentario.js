alert("mensaje oculto");

function mostrar(){
  var texto=document.getElementById('textoEscrito').value;
      document.getElementById('previoTexto').innerHTML = texto;
}

function textoGrande(){
  document.getElementById('previoTexto').style.fontSize="210%";
}

function textoMediano(){
  document.getElementById('previoTexto').style.fontSize="105%";
}

function textoChico(){
  document.getElementById('previoTexto').style.fontSize="70%";
}

function colorT() {

   document.getElementById("previoTexto").style.color =prompt("Escriba el color que  quiere:") ;
}

function colorF() {
    document.getElementById("previoTexto").style.backgroundColor = prompt("Escriba el color que quiere:");
}





function alinearIzquierda(){
  document.getElementById('previoTexto').style.textAlign="right";
}

function centrar(){
  document.getElementById('previoTexto').style.textAlign="center";

}
function alinearDerecha(){
  document.getElementById("previoTexto").style.textAlign="justify";
}



function agregarArticulo()
{
var textarea=document.getElementById("previoTexto");
if(textarea.length>0)
{

var lis=document.createElement('li');

var text=document.createTextNode(textarea);
li.appendChild(text);
document.getElementById("lista").appendChild(li);

}

}



/*function find_li(contenido)
{
var el = document.getElementById("lista").getElementsByTagName("li");
for (var i=0; i<el.length; i++)
{
if(el[i].innerHTML==contenido)
return false;
}

}  */
