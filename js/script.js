var status = 0;
var time = 0;

function start(){
	status = 1;
	document.getElementById('startButton').disabled = true;
	timer();
}
function stop(){
	status = 0;
	document.getElementById('startButton').disabled = false;
}
function reset(){
	status = 0;
	timer = 0;
	document.getElementById('startButton').disabled = false;
	document.getElementById('timer--box').innerHTML = '00:00:00'
}
function timer(){
	if(status == 1){
		setTimeout(function(){
			time++;
			var hou = Math.floor(time/100/3600);
			var min = Math.floor(time/100/60);
			var sec = Math.floor(time/100);
			var mSec = time % 100 *10;
			if(hou < 10){
				hou = '0' + hou;
			}
			if(min < 10){
				min = '0' + min;
			}
			if(sec >= 60){
				sec = sec % 60;
			}
			if(sec < 10){
				sec = '0' + sec;
			}
			if(mSec >= 100){
				mSec = mSec % 1000;
			}
			if(mSec < 100){
				mSec = '0' + mSec;
			}

			document.getElementById('timer--box').innerHTML = hou + ':' +min + ':' + sec + ':' + mSec;
			timer();
		}, 10)
	}
}



// //объявляем переменные
// var base = 60; 
// var clocktimer,dateObj,dh,dm,ds,ms; 
// var readout=''; 
// var h=1,m=1,tm=1,s=0,ts=0,ms=0,init=0; 
// //функция для очистки поля
 
// //функция для старта секундомера
// function StartTIME() { 
// 	var cdateObj = new Date(); 
// 	var t = (cdateObj.getTime() - dateObj.getTime())-(s*1000); 
// 	if (t>999) { s++; } 
// 	if (s>=(m*base)) { 
// 		ts=0; 
// 		m++; 
// 	} else { 
// 		ts=parseInt((ms/100)+s); 
// 		if(ts>=base) { ts=ts-((m-1)*base); } 
// 	} 
// 	if (m>(h*base)) { 
// 		tm=1; 
// 		h++; 
// 	} else { 
// 		tm=parseInt((ms/100)+m); 
// 		if(tm>=base) { tm=tm-((h-1)*base); } 
// 	} 
// 	ms = Math.round(t/10); 
// 	if (ms>99) {ms=0;} 
// 	if (ms==0) {ms='00';} 
// 	if (ms>0&&ms<=9) { ms = '0'+ms; } 
// 	if (ts>0) { ds = ts; if (ts<10) { ds = '0'+ts; }} else { ds = '00'; } 
// 	dm=tm-1; 
// 	if (dm>0) { if (dm<10) { dm = '0'+dm; }} else { dm = '00'; } 
// 	dh=h-1; 
// 	if (dh>0) { if (dh<10) { dh = '0'+dh; }} else { dh = '00'; } 
// 	readout = dh + ':' + dm + ':' + ds + '.' + ms; 
// 	document.MyForm.stopwatch.value = readout; 
// 	clocktimer = setTimeout("StartTIME()",1); 
// } 
// //Функция запуска и остановки
// function StartStop() { 
// 	if (init==0){ 
// 		ClearСlock();
// 		dateObj = new Date(); 
// 		StartTIME(); 
// 		init=1; 
// 	} else { 
// 		clearTimeout(clocktimer);
// 		init=0;
// 	} 
// }
//  function ClearСlock() { 
// 	clearTimeout(clocktimer); 
// 	h=1;m=1;tm=1;s=0;ts=0;ms=0; 
// 	init=0;
// 	readout='00:00:00.00'; 
// 	document.MyForm.stopwatch.value=readout; 
// }