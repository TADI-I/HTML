function register(){

    var n = document.getElementById("fname").value;
    var s = document.getElementById("fSurname").value;
    var a = document.getElementById("faddy").value;
    var c = document.getElementById("fCampus").value;
    var m = document.getElementById("fmail").value;
    var n = document.getElementById("fnumber").value;
    var f = document.getElementById("fmember").value;
    var z = document.getElementById("fship").value;

    if(z == 1){
       z = "Natesa Member"
    }
    else{
        z = "Non Member"
   }
 var msg = "First name: " + n + 
 "<br> Last Name: " + s + 
 "<br> Address: " + a + 
 "<br> Email: " + m +
 "<br> Phone Number: " + n + 
 "<br> Campus: " + c + 
 "<br> Category: " + z +
 "<br> Natesa ID: " + f + "Thank you for registering with Natesa";
    
 document.write(msg);



}