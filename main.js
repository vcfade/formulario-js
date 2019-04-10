window.onload = function f(){document.getElementById("alert").style.display="none";};
function paintBG(elem){
    elem.style.backgroundColor ="#f8d7da";
}
function restBG(elem){
    elem.style.backgroundColor ="#ffffff";
    alert(elem)
}
 

/*document.querySelector("#cardNumber").onblur = restaurar(){
    if (document)
}*/

const form=document.getElementById("form");

form.addEventListener('submit', function (e){
    
   var valid= true;
    /************************** COMPROBACION DE CARD NUMBER     ****************************/
    let card = document.getElementById("cardNumber").value;
     if(document.querySelector("#cardNumber").value === ""){
        paintBG(document.querySelector("#cardNumber"));
        document.getElementById("alert").style.display="block";
        valid=false;
    }
    else if(validator.isCreditCard(card)== false){
        //alert('ingrese numero de tarjeta correcta')
        document.getElementById("alert").style.display="block";
        var p = document.createElement("p");
        var textNode =document.createTextNode("Ingrese numero de tarjeta valido")
        p.appendChild(textNode)
        document.getElementById("alert").appendChild(p);
        valid=false;
    }
    
     /************************** COMPROBACION DE FIRST NAME     ****************************/
    let name = document.getElementById("firstName").value;
     if(document.querySelector("#firstName").value === ""){
        paintBG(document.querySelector("#firstName"));
        document.getElementById("alert").style.display="block";
        valid=false;
    }
    else if(validator.isAlpha(name ,'en-US') == false){
        document.getElementById("alert").style.display="block";
        var p = document.createElement("p");
        var textNode =document.createTextNode("Ingrese su nombre correctamente")
        p.appendChild(textNode)
        document.getElementById("alert").appendChild(p);
        valid=false;
    }
     /************************** COMPROBACION DE CVC     ****************************/
     let cvc = document.getElementById("CVCnumber").value;
     if(document.querySelector("#CVCnumber").value === ""){
        paintBG(document.querySelector("#CVCnumber"));
        document.getElementById("alert").style.display="block";
        valid=false;
    }
    /************************** COMPROBACION DE LAST NAME     ****************************/
    let lastName = document.getElementById("lastName").value;
     if(document.querySelector("#lastName").value === ""){
        paintBG(document.querySelector("#lastName"));
        document.getElementById("alert").style.display="block";
        valid=false;
    }
    else if(validator.isAlpha(lastName ,'en-US') == false){
        document.getElementById("alert").style.display="block";
        var p = document.createElement("p");
        var textNode =document.createTextNode("Ingrese su Apellido correctamente")
        p.appendChild(textNode)
        document.getElementById("alert").appendChild(p);
        valid=false;
    }
    /************************** COMPROBACION DE AMOUNT     ****************************/
    let amount = document.getElementById("Cantidad").value;
     if(document.querySelector("#Cantidad").value === ""){
        paintBG(document.querySelector("#Cantidad"));
        document.getElementById("alert").style.display="block";
        valid=false;
    }
    else if(validator.isCurrency(amount) == false){
        document.getElementById("alert").style.display="block";
        var p = document.createElement("p");
        var textNode =document.createTextNode("Ingrese una cantidad de dinero correctamente")
        p.appendChild(textNode)
        document.getElementById("alert").appendChild(p);
        valid=false;
    }
    /************************** COMPROBACION DE CITY     ****************************/
     let city = document.getElementById("inputCity").value;
     if(document.querySelector("#inputCity").value === ""){
        paintBG(document.querySelector("#inputCity"));
        document.getElementById("alert").style.display="block";
        valid=false;
    }
    /************************** COMPROBACION DE STATE     ****************************/
     let state = document.getElementById("inputState").value;
     if(document.querySelector("#inputState").value === ""){
        paintBG(document.querySelector("#inputState"));
        document.getElementById("alert").style.display="block";
        valid=false;
    }
    /************************** COMPROBACION DE ZIP     ****************************/
     let zip = document.getElementById("inputZip").value;
     if(document.querySelector("#inputZip").value === ""){
        paintBG(document.querySelector("#inputZip"));
        document.getElementById("alert").style.display="block";
        valid=false;
    }
    
     if( valid == false){
        e.preventDefault();
    }
})
