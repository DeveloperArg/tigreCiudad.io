function putBack(){
	
		capaFondo.style.background="url('img/museo-de-arte-tigre-jardin.jpg')";
		
	}

nodoFB=document.getElementById("capaFondo");
nodoFB.setAttribute("onLoad", "putBack();");
