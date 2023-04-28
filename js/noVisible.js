function nover()
{
if(menu.style.display=="block")
	{
		menu.style.display="none";
	}else{
			menu.style.display="block";
			
		}

}

nodoTool=document.getElementById("nover");
nodoTool.setAttribute("onClick", "nover();");

function novertwo()
{
if(submenu.style.display=="block")
	{
		submenu.style.display="none";
	}else{
			submenu.style.display="block";
			
		}

}

nodoSub=document.getElementById("sub");
nodoSub.setAttribute("onClick", "novertwo();");

nodoSub=document.getElementById("subtwo");
nodoSub.setAttribute("onClick", "novertwo();");

/*Funcion model*/

function noVerModel()
{
if(contenedor.style.visibility=="visible")
	{
		contenedor.style.visibility="hidden";
	}else{
			contenedor.style.visibility="visible";
			
		}

}
/*  se comentan estas líneas por que se se agrega desde JS evento y su respectivo manejador 

nodoTerm=document.getElementById("cerrar");
nodoTerm.setAttribute("onClick", "noVerModel();");

*/



/*-----------------------------------------------------------------------*/



function nofun()
	{
		alert('Este formulario utilizará su sistema de correo para su envío, sírvase configurarlo debidamente para su correcto envío.');

	/*if (!document.getElementById("nombre").value) {
		alert("debe colocar un nombre");
		return false;
	}
		if (!document.getElementById("apellido").value) {
			alert('Debe completar con su Apellido');
		return false;
		}*/


	}


nodoEnvio=document.getElementById("formulario");
nodoEnvio.setAttribute("onSubmit", "nofun();");





