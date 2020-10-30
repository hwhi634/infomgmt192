function hide(c){
    var cd = document.getElementsByClassName(c)[0];
    var value = document.getElementById(c).getAttribute("value");
    if (cd.style.display=="none"){
        cd.style.display = "block";
        document.getElementById(c).setAttribute('value', value.replace("Show", "Hide"));
    } else {
        cd.style.display = "none";
        document.getElementById(c).setAttribute('value', value.replace("Hide", "Show"));
    }
}

function snapTo(){
    var selectBox = document.getElementById("langselect");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    var cd = document.getElementsByClassName(selectedValue)[0];
    if (cd.style.display=="none"){
        hide(selectedValue);
    } 
    window.location.hash = selectedValue;
}

function level(){
    setTimeout(function(){
        var x = document.getElementsByClassName("R1");
        var p = document.getElementsByClassName("lessonPrice");
        var g = document.getElementById("language1").value;
        if(g.length <1){
            g=="1";
        }
        for (var i of p){
            i.innerHTML = "$"+Math.floor(20+(g*2));
        }
        for (var i of x){
            var f = i.textContent.split(":");
            i.innerHTML = f[0]+":"+g;
        } 
    }, 50);
}

function userLogged(){
    var c = document.getElementsByClassName('content')[0];
    var l = document.getElementsByClassName('login')[0];
    
    document.getElementById('loginspan').innerHTML = "<div id='welcome'>Welcome!, "+document.getElementById("username").value+"</div>";
    c.style.display = "block";
    l.style.display = "none";
}

function userLogin(x){
    var c = document.getElementsByClassName('content')[0];
    var l = document.getElementsByClassName('login')[0];
    var h = document.getElementsByClassName("userAction");
    c.style.display = "none";
    l.style.display = "block";
    switch(x){
        case 1:
            for (var i of h){
                i.innerHTML = "Login";
            }
        break;
        case 2:
            for (var i of h){
                i.innerHTML = "Sign Up";
            }
        break;
    }
}
var modal = document.getElementById("myModal");
function openmodal(){
    modal.style.display = "block";
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
