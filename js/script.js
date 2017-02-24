var timer = document.getElementById('timer');
var startBut = document.getElementById('start-button');
var resetBut = document.getElementById('reset-button');
var splitBut = document.getElementById('split-button');
var box = document.getElementById('split-timer');
var watch = new Stopwatch(timer);

startBut.addEventListener("click", function() {
	if(watch.isOn){
		watch.stop();
		startBut.textContent = 'Cont..';
		startBut.style.background = 'linear-gradient(135deg, rgba(20,167,20,1) 0%, rgba(20,167,20,1) 42%, rgba(20,167,20,1) 54%, rgba(18,146,18,1) 55%, rgba(21,173,21,1) 100%)';

	} else {
		watch.start();
		startBut.textContent = 'Pause';
		startBut.style.background = 'linear-gradient(135deg, rgba(17,109,170,1) 0%, rgba(17,109,170,1) 38%, rgba(17,109,170,1) 42%, rgba(23,113,188,1) 42%, rgba(23,113,188,1) 46%, rgba(17,109,170,1) 100%)';
	}
resetBut.addEventListener('click', function(){
		watch.reset();
		startBut.textContent = 'Start';

})
    
});

splitBut.addEventListener('click', function(){
		box = document.getElementById('timer');
		a = document.getElementById('split-timer');
		
	 	a.innerHTML += 'split ' + box.innerHTML + '<br>';
	 	a.style.fontSize = '30px'; 
	 	a.style.marginTop = '30px';
});

function Stopwatch(elem) {
	var time = 0;
	var interval;
	var offset;

	function update() {
		if(this.isOn){
			time += delta();
		}
		
		var formateTime = timeFormate(time);
		elem.textContent = formateTime;
	};
	function delta() {
		var now = Date.now();
		var timePassed = now - offset;
		offset = now;
		return timePassed;
	};
	function timeFormate(timeInMillisec) {
		var time = new Date(timeInMillisec);
		var hours = time.getUTCHours().toString();
        var minutes = time.getUTCMinutes().toString();
        var seconds = time.getUTCSeconds().toString();
		 this.millsec = time.getMilliseconds().toString();
		
		if(hours.length < 2) {
			hours = '0' + hours; 
		}
		if(minutes.length < 2) {
			minutes = '0' + minutes; 
		}
		if(seconds.length < 2) {
			seconds = '0' + seconds;
		}
		while(millsec.length < 3){
			millsec = '0' + millsec;
		}
		return hours + ' : ' + minutes + ' : ' + seconds + ' : ' + millsec;
	};
	this.isOn = false;
	this.start = function() {
		if(!this.isOn) {
			interval = setInterval(update.bind(this) ,10);
			offset = Date.now();
			this.isOn = true;
		}
	};
	this.stop =	function() {
		if(this.isOn) {
			clearInterval(interval);
			interval = null;
			this.isOn = false;
		}
	};
	this.reset = function() {
			time = 0;
			update();
	};
	// this.split = function() {
	// 	var a;
	// 	for(var i = 0; i++;){
	// 		a.document.createTextNode((i+1) + 'split')
			
	// 	}
	// };
};


