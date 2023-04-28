/*Aqui se crea la función que permite definir y visualizar desde JS el MODEL*/


function imprimirContenido(){

	document.getElementById("detalle").innerHTML="<span id='cerrar' onClick='noVerModel();'>"+"<img src='img/deco/close.png' width='27' height='27' alt='logo cerrar'/>"+"</span>"+
		'<h1>'+"T&eacute;rminos Generales"+"</h1>"+"<br/>"+
		"<p>"+"Estos T&eacute;rminos y condiciones se establecen con el fin de clarificar y dar por informado el funcionamiento y objetivo de la publicaci&oacute;n de http://tigreciudad.co.nf a partir de este momento: el <strong>'Sitio Web'</strong>."+"</p>"+
		"<p>"+"Este <strong>Sitio Web</strong> es un desarrollo tem&aacute;tico, con el &uacute;nico fin de generar contenido digital de alg&uacute;n tema en particular. Se ha elegido la ciudad de Tigre por ser un atractivo tur&iacute;stico, social y colectivamente reconocido,con amplias posibilidades para el desarrollo de información relevante para el alcance de dicho objetivo."+"</p>"+
		"<p>"+"Este <strong>Sitio Web</strong> no forma, ni contituye parte alguna de otro sitio web perteneciente a Instituciones y/u Organismos p&uacute;blicos u oficiales."+"</p>"+
		"<p>"+"Si Usted desea acceder a informaci&oacute;n fidedigna deber&aacute; comunicarse con las correspondientes Instituciones y/u Organismos p&uacute;blicos u oficiales referentes al Partido de Tigre: Municipalidad, Delegaciones, Ministerios, o cualquier otra entidad oficial."+"</p>"+
		"<p>"+"No obstante, la informaci&oacute;n suministrada y publicada en este <strong>Sitio Web</strong> ha sido fielmente corroborada por todos los medios posibles al alcance de su publicación."+"</p>"+
		"<p>"+"La gesti&oacute;n de los Perfiles en Redes Sociales tienen como &uacute;nico objetivo, mostrar lugares y publicar informaci&oacute;n y trascendidos de la ciudad de Tigre, como as&iacute; tambi&eacute;n la generaci&oacute;n de contenido para la celebraci&oacute;n de d&iacute;as especiales y/o eventos importantes. Por lo tanto, bajo ning&uacute;n aspecto se asume responsabilidad alguna por informaci&oacute;n err&oacute;nea o malintencionada replicada en este sitio o en sus perfiles, s&iacute; por su aclaraci&oacute;n ante el reconocimiento de la misma y la publicación de la FE DE ERRORES correspondiente."+"</p>"+
		"<p>"+"Los is&oacute;logos, iconos y nombres comerciales publicados en este <strong>Sitio Web</strong> son marcas registradas de sus propietarios y se mencionan, muestran o visualizan con fines puramente did&aacute;cticos, informativos y/o t&eacute;cnicos por lo que este <strong>Sitio Web</strong> no asume ninguna responsabilidad ya que no infringe ning&uacute;n derecho de registro de marca."+"</p>"+
		"<p>"+"Todas las im&aacute;genes pudieron haber sido alteradas y/o modificadas digitalmente con software espec&iacute;ficos por motivos de lineamientos est&eacute;ticos u optimizaci&oacute;n de las mismas."+"<strong>"+" Su caracter es ilustrativo."+"</strong>"+"</p>"+
		"<p>"+"La Direcci&oacute;n Nacional de Protecci&oacute;n de Datos Personales &#150;PDP&#150; es el &Oacute;rgano de Control, creado en el &aacute;mbito Nacional, para la efectiva protecci&oacute;n de los datos personales. Tiene a su cargo el Registro Nacional de Bases de Datos, medio que la ley confiere para conocer y controlar a quienes tratan datos personales. En lo que a pol&iacute;tica de privacidad de datos personales se refiere, este <strong>Sitio Web</strong> declara que <strong>NO utiliza bases de datos</strong>. Ley 25.326, norma de orden p&uacute;blico que regula la actividad de las bases de datos que registran información de car&aacute;cter personal. Su objeto es garantizar a las personas el control del uso de sus datos personales."+"</p>"+
		"<p>"+"Este <strong>Sitio Web</strong> informa que implementa widgets de seguimiento y registro de experiencias de usuarios(UX) e interacciones en la interfaz de usuarios(UI) con el &uacute;nico fin de mejorarlas y que los datos <strong>no son de car&aacute;cter personal, ni son registrados en bases de datos propietarias.</strong>"+
		"<p id='revision'>"+"</p>";

	var meses=new Array("enero","febrero","marzo","abril","mayo","junio",
						"julio","agosto","septiembre","octubre","noviembre",
						"diciembre");
	var dias=new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sabado");

	var fecha=new Date();

	var ano=fecha.getFullYear();
	var mes=fecha.getMonth();
	var diaMes=fecha.getDate();
	var diaSemana=fecha.getDay();

	document.getElementById("revision").innerHTML='A los '+diaMes+' dias del mes de '+meses[mes]+' de '+ano+' se revisan y actualizan estos T&eacute;rminos y Condiciones Generales de uso y publicaci&oacute;n digital de contenidos.';
		

if(contenedor.style.visibility=="visible"){
	contenedor.style.visibility="hidden";
}else{
	contenedor.style.visibility="visible";
}

}


nodoPanel=document.getElementById("verPanel");
nodoPanel.setAttribute("onClick", "imprimirContenido();");

/*------------------Nueva función----------------------------*/


	

/*	if(document.body.scrollTop < 5000 || document.documentElement.scrollTop < 5000 && menu.stlyle.display=="block")
		{menu.style.display="none";}


	else  if(document.body.scrollTop < 3000 || document.documentElement.scrollTop < 3000 /*&& menu.stlyle.display=="none")/*
{
	menu.stlyle.display=="block";

}	

altoDisponible=document.documentElement.scrollTop;
alert("El valor de scrollTop es "+altoDisponible);

anchowrapper=document.getElementById("wrapper").width;
alert("El ancho es "+anchowrapper);
document.getElementById("nombre").blur();*/

	



/*Estudiar este caso existe inversa de lógica*/


	


/*Funcion aplicable al menu*/

/*Nodos para agregar atributos*/
nodoTwit=document.getElementById("twitter");
nodoTwit.setAttribute("data-theme", "light");
nodoTwit.setAttribute("data-aria-polite", "assertive");
nodoTwit.setAttribute("data-chrome", "transparent");
nodoTwit.setAttribute("data-link-color", "#2B7BB9");
nodoTwit.setAttribute("data-width", "350");
nodoTwit.setAttribute("data-height", "350");


