function goingTo(){

	location.hash="#contacto";
	document.getElementById("nombre").focus();

	if(menu.style.display=="block")
	{
		menu.style.display="none";
	}
	else if(menu.style.display=="none")
	{
		menu.style.display="block";
	}

}
nodoformCont=document.getElementById("formCont");
nodoformCont.setAttribute("onClick", "goingTo();");

