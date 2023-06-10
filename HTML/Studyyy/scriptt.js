function writeInfo()
{

    let x = document.getElementById('name').value;
    let y = document.getElementById('surname').value;

    let msg = "hi your name is " + x + " and your surname is " + y;

    document.getElementById("info").innerHTML = msg;
}