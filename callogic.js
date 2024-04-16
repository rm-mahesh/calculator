let ta=document.querySelector("#emptytextarea");

const appendmysymbol=(symbol) =>{
    ta.value+=symbol;
}

const clearscreen=()=>{
    ta.value="";
}

const calculateexp=()=>{
    let expression=document.getElementById("emptytextarea").value;
    try{
        ta.value=eval(expression);
    }
    catch(error){
        ta.value="Error";
    }
}