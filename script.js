//Created variable hr, min and sec which indicated the value started from zero

var hr = 0;
var min = 0;
var sec = 0;

//created timer variable as if it's false that indicates the timer is stop as if it's true than timers is running.
var timer = false;

//created start function.
function start(){
    timer = true;
    stopwatch();
}


//created stop function.
function stop(){
    timer = false;
}


//created reset function.
function reset(){
     timer = false;
     hr = 0;
     min = 0;
     sec = 0;
     document.getElementById("hr").innerHTML = "00";
     document.getElementById("min").innerHTML = "00";
     document.getElementById("sec").innerHTML = "00";
}

//created stopwatch main function
/*created if condition as we put true and give setTimeout function time 10 millisecond as if check the statment is tru the function will run and it check the function repetidly at every 10 millisecon and run until false*/    
function stopwatch(){

    // if statement for sec.
    if (timer == true){
        sec = sec+1;

        // if statement for min.
        if (sec == 60){
            min = min+1;
            sec = 0;
        }

        // if statement for hr.
        if (min == 60){
            hr = hr+1;
            min = 0;
        }

        var hrString = hr;
        var minString = min;
        var secString = sec;

        if(hr < 10){
            hrString = "0" + hrString;
        }

        if(min < 10){
            minString = "0" + minString;
        }

        if(sec < 10){
            secString = "0" + secString;
        }

        document.getElementById("hr").innerHTML = hrString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;
        setTimeout("stopwatch()", 10);
    }
}