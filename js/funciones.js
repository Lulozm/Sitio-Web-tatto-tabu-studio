function modificarEstilo(){
	var altura = document.getElementById("formulario").style.height;
	alert(altura);
	if(altura=="0px" || altura=="" )
	{
		document.getElementById("formulario").style.height = "auto";
		document.getElementById("formulario").style.padding = "10px";
	}
	else
	{
		document.getElementById("formulario").style.height = "0px";
		document.getElementById("formulario").style.padding = "0px";
	}
}