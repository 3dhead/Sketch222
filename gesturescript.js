// Jessica Hillier, May 2016

var random_images_array = ['1.jpg', '2.jpg', '3.jpg'];
var Timer;
var TotalSeconds;
var thirtyMinClass = [5, 30, 30, 30, 60, 60, 90, 300, 300, 600 ];
var fifteenMinClass = [5, 30, 30, 60, 60, 120, 300, 300];
var hourMinClass = [];
var currClass = [];

function start() {
    var nodes = document.getElementsByName("classTime");
    if (nodes[0].checked){
        currClass = fifteenMinClass.slice();
    } else if (nodes[1].checked) {
        currClass = thirtyMinClass.slice();
    } else { // hour long class
       currClass = hourMinClass.slice();
    }

    //hide table
    var sTable = document.getElementById("startTable");
    sTable.style.display = "none";

    var time = currClass.slice(0,1);
    currClass = currClass.slice(1, currClass.length-1);

    //text to explain the start
	CreateTimer("timer", time);
}

function changeImage(imgAr, path) {
	var num = Math.floor( Math.random() * imgAr.length );
	var img = document.getElementById('classImage');
	img.src = path.concat(imgAr[ num ]);
}

function CreateTimer(TimerID, Time) {
	Timer = document.getElementById(TimerID);
	TotalSeconds = Time;

	UpdateTimer();
	window.setTimeout("Tick()", 1000);
}

function Tick() {
	if (TotalSeconds <= 0) {
		changeImage(random_images_array, 'images/');

        var time = currClass.slice(0,1);
        currClass = currClass.slice(1, currClass.length-1);
        CreateTimer("timer", time);
		return;
	}

	TotalSeconds -= 1;
	UpdateTimer();
	window.setTimeout("Tick()", 1000);
}

function UpdateTimer() {
	Timer.innerHTML = TotalSeconds;
}