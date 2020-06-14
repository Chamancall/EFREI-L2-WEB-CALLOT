var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");

function Page(){
	if (table == 1) {
    	one.classList.add("active");
    } else if (table == 2) {
    	two.classList.add("active");
    } else if (table == 3) {
    	three.classList.add("active");
    } else if (table == 4) {
    	four.classList.add("active");
    } else if (table == 5) {
    	five.classList.add("active");
    } else if (table == 6) {
    	six.classList.add("active");
    } else if (table == 7) {
    	seven.classList.add("active");
    }
}

window.onload = Page();

var muse = document.getElementById("myAudio"); 
var sunny = document.getElementById("sun");

function Music(){
    muse.style.display = "none";
}

window.onload = Music();

sunny.onclick = function(){
  if (muse.paused) {
        muse.play();
        }
    else  {
        muse.pause(); 
        }
}