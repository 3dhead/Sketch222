// GestureScript code
var random_images_array = ['1.jpg', '2.jpg', '3.jpg'];
var Timer;
var TotalSeconds;

function classtime()
{
    changeImage(random_images_array, 'images/');
    CreateTimer("timer", 10);
}  
 
/* function getRandomImage(imgAr, path) 
{
    path = path || 'images/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = document.createElement("img");
    img.id = "img";
    img.src = path.concat(imgAr[ num ]);
    document.body.appendChild(img);
} */

function changeImage(imgAr, path) 
{
    var num = Math.floor( Math.random() * imgAr.length );
    var img = document.getElementById('img');
    img.src = path.concat(imgAr[ num ]);
}

function CreateTimer(TimerID, Time) 
{
    Timer = document.getElementById(TimerID);
    TotalSeconds = Time;

    UpdateTimer();
    window.setTimeout("Tick()", 1000);
}

function Tick() 
{
    if (TotalSeconds <= 0) {
        changeImage(random_images_array, 'images/');
        CreateTimer("timer", 10);
        return;
    }

    TotalSeconds -= 1;
    UpdateTimer();
    window.setTimeout("Tick()", 1000);
}

function UpdateTimer() 
{
Timer.innerHTML = TotalSeconds;
}

function twentyMinClass(){
    
}

function thirtyMinClass(){
    
}

function fourtyfiveMinClass(){
    
}

function sixtyMinClass(){
    
}