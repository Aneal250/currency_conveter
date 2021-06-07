

const inserted = document.getElementById("naira");
inserted.addEventListener("input", converter);

function converter(e){
    let converted = e.target.value; 
    document.getElementById("dollar").innerHTML =  converted * 411;
    document.getElementById("pounds").innerHTML =  converted * 581;
    document.getElementById("euro").innerHTML =   converted * 500;
}





