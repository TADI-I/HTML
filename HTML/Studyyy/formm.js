var legendOne = document.getElementsByTagName('legend');
legendOne.style.ba = "snow";
legendOne.id = 'title';

var vaAl = document.getElementsByTagName("input");

vaAl[0].addEventListener("mouseover", function(){
    vaAl[0].innerHTML = "move in";
})


function showMessage()
{
    let x = "hello ";
    let y = document.getElementById('fname').value;
    let b = document.getElementById('fsurname').value;
    let z = " how are you ?";
    let p1 = document.getElementById("fpassword");
    let p2 = document.getElementById("fpasswordConf");
    let blank = ""
    //let msg = x + y +" "+ b +z ;
    //document.getElementById("msgOutput").innerHTML = msg;

   /* if(fname != blank)
    {document.getElementById("fname").style.backgroundColor="red";}

    if(fsurname == blank)
    {document.getElementById("fsurname").style.backgroundColor="red";}

    if(fname != blank)
    {document.getElementById("fmail").style.backgroundColor="red";}

    if(fname != blank)
    {document.getElementById("fpassword").style.backgroundColor="red";}

    if(fname != blank)
    {document.getElementById("fpasswordConf").style.backgroundColor="red";}

    if(fname != blank)
    {document.getElementById("fcell").style.backgroundColor="red";}

    if(fname != blank)
    {document.getElementById("faddy").style.backgroundColor="red";}

    if(fname != blank)
    {document.getElementById("fname").style.backgroundColor="red";}
    
    //document.write(msg);
    //window.alert(msg);
    var labels = document.getElementsByTagName("label");
    labels[0].innerHTML = "this label was changed";

    labels[2].style.color ="red";

*/
   

    if(p1 != p2)
        {
            window.alert(x+ y + " " + b + " Your Passwords dont match");
           // document.getElementById("msg2").innerHTML = "You have not registered" ;
        }
    
   //else()
   // {window.alert(x+ y + " " + b + " Your Passwords match");}
   
    
}

function autoFill()
{
    let name = "Tadii"
    document.getElementById("fname").innerHTML = name;
   // name.innerHTML = "Tadii";

}

/*function numberShow()
{
   window.alert(5 + 6);
}
*/

/*function passwordValid()
{
    let x = document.getElementById("fpassword");
    let y = document.getElementById("fpasswordConf");

    if(x != y)
        {window.alert("Passwords dont match");}
    
    if(x == y )

    ;

}
*/

