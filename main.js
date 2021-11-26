let count=0;
let countCalculation;

const countControl=function(){
    count++;
    $("h2").text(`${(count/(60*60*10)|0)}:${(count/(60*10)|0)%60}:${((count)/10|0)%60}:${count%10}`);
}

$(document).ready(function(){
    $("#start").click(function(){
        countCalculation = setInterval(countControl,100);
        document.getElementById("start").disabled=true;
        document.getElementById("stop").disabled=false;
        document.getElementById("reset").disabled=false;
    });
    
    $("#stop").click(function(){
        clearInterval(countCalculation);
        document.getElementById("stop").disabled=true;
        document.getElementById("start").disabled=false;
    });

    $("#reset").click(function(){
        clearInterval(countCalculation);
        count=0;
        $("h2").text("0:0:0:0");
        document.getElementById("reset").disabled=true;
        document.getElementById("stop").disabled=true;
        document.getElementById("start").disabled=false;
    });
});