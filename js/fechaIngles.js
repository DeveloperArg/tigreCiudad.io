function reloj()
{
	var meses=new Array("January","February","March","April","May","June",
						"July","August","September","October","November",
						"Decembre");
	var dias=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
	var fecha=new Date();

	var ano=fecha.getFullYear();
	var mes=fecha.getMonth();
	var diaMes=fecha.getDate();
	var diaSemana=fecha.getDay();

	/*Hora*/

	var hora=fecha.getHours();
	var minutos=fecha.getMinutes();
	var segundos=fecha.getSeconds();

	//Agregar formato para días del mes inferiores de 10

	if(hora<10){hora='0'+hora;}
	if(minutos<10){minutos='0'+minutos;}
	if(segundos<10){segundos='0'+segundos;}


/*Comienza prueba*/

var first="st";
var second="nd";
var third="rd";
var rest="th";

var elDia;

if((diaMes >= 4 <= 20) || (diaMes >= 24 <= 30))
{
	elDia=diaMes+rest;
} 
if((diaMes== 1)||(diaMes== 21) || (diaMes== 31))
{
	elDia=diaMes+first;
}
if((diaMes== 2) || (diaMes==22))
{
	elDia=diaMes+second;
}
else if ((diaMes== 3) || (diaMes== 23))
{
	elDia=diaMes+third;
}

/*document.getElementById("revision").innerHTML='A los '+diaMes+' dias del mes de '+meses[mes]+' de '+ano+' se revisan y actualizan estos T&eacute;rminos y Condiciones Generales de uso y publicaci&oacute;n digital de contenidos.';*/

/*Finaliza prueba*/
document.getElementById("fecha").innerHTML='<span>'+dias[diaSemana]+', '+ elDia+' '+meses[mes]+' '+ano+'</span>'+'<br/>'+hora+':'+minutos+':'+segundos;

	
}


window.onload=function(){
	setInterval(reloj, 1000);
}