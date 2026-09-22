function appendvalue(value){
    document.getElementById("display").value+=value;

}
function cleardisplay(){
    document.getElementById("display").value="";
}
function dellast(){
    let display=document.getElementById("display");
    display.value=display.value.slice(0,-1);
}
function calculate(){
    let display=document.getElementById("display");
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="error!";
    }

}