function reloj()
{
	var meses=new Array("enero","febrero","marzo","abril","mayo","junio",
						"julio","agosto","septiembre","octubre","noviembre",
						"diciembre");
	var dias=new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sabado");

	var fecha=new Date();

	var ano=fecha.getFullYear();
	var mes=fecha.getMonth();
	var diaMes=fecha.getDate();
	var diaSemana=fecha.getDay();

	var hora=fecha.getHours();
	var minutos=fecha.getMinutes();
	var segundos=fecha.getSeconds();

	//Agregar formato para días del mes inferiores de 10

	if(hora<10){hora='0'+hora;}
	if(minutos<10){minutos='0'+minutos;}
	if(segundos<10){segundos='0'+segundos;}

	document.getElementById("fecha").innerHTML='<span>'+dias[diaSemana]+', '+ diaMes+' de '+meses[mes]+' de '+ano+'</span>'+'<br/>'+hora+':'+minutos+':'+segundos;


	document.getElementById("revision").innerHTML='A los '+diaMes+' dias del mes de '+meses[mes]+' de '+ano+' se revisan y actualizan estos T&eacute;rminos y Condiciones Generales de uso y publicaci&oacute;n digital de contenidos.';
	
}
	

window.onload=function(){
	setInterval(reloj, 1000);
}