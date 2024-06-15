document.getElementById("extra").style = "display:none;"


function showMore() {
    document.getElementById("numbers").style = "display:none;"
    document.getElementById("extra").style = "display:block;"
}
function showLess() {
    document.getElementById("numbers").style = "display:block;"
    document.getElementById("extra").style = "display:none;"
}


function ac() {
    // alert('hello')
    let clear = " ";
    document.getElementById("display").value = clear;
}
function btn(no) {
    let number = display.value += no;
    document.getElementById("display").value = number;
}
function operator(op) {
    display.value += op;
    let operat = display.value;
    document.getElementById("display").value = operat;

}
function result() {
    let res = eval(display.value);
    document.getElementById("display").value = res;

    // display.value = eval(display.value )
}


// operators 

function sin() {
    let sine = Math.sin(display.value);
    document.getElementById("display").value = sine;
}

function cos() {
    let cosine = Math.cos(display.value);
    document.getElementById("display").value = cosine;
}

function tan() {
    let tangant = Math.tan(display.value);
    document.getElementById("display").value = tangant;
}
function log() {
    let logth = Math.log(display.value);
    document.getElementById("display").value = logth;
}
function exp(){
    let tangant =Math.exp(display.value);
    document.getElementById("display").value = tangant ;	
}


function square() {
    let sqr = Math.pow(display.value, 2);
    document.getElementById("display").value = sqr;
}

function cubed() {
    let cub = Math.pow(display.value, 3);
    document.getElementById("display").value = cub;
}

function sqrt2() {
    let sqroot = Math.pow(display.value, 1 / 2);
    document.getElementById("display").value = sqroot;
}

function sqrt3() {
    let cubroot = Math.pow(display.value, 1 / 2);
    document.getElementById("display").value = cubroot;
}