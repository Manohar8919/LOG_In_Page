function visiblility()
{
    document.getElementById("pass").removeAttribute("type")
    document.getElementById("visible").setAttribute("src","./Monkey_login1.jpeg")
    document.getElementById("visible").style.transform="rotateY(360deg)"
    document.getElementById("visible").style.transition="transform 0.3s"
}
function hide()
{
    document.getElementById("pass").setAttribute("type","password")
    document.getElementById("visible").setAttribute("src","./Monkey_login2.jpeg")
    document.getElementById("visible").style.transform="rotateY(-360deg)"
    document.getElementById("visible").style.transition="transform 0.3s"
}
var email="manu@gmail.com"
var password="123"
function authorize()
{
   var userId=document.getElementById("email").value
   var userpass=document.getElementById("pass").value
   if(userId==email && userpass == password)
   {
    var fom=document.forms
    fom[0].action="./bigboss_toys.html"
    fom[0].elements[2].type="submit"
   }
   else if(userId!=email && userpass == password)
   {
    document.getElementById("result").innerHTML="Wrong user Id Entered"
    document.getElementById("emaildiv").style.borderColor="red"
    document.getElementById("passdiv").style.borderColor="royalblue"
    document.body.style.backgroundImage="linear-gradient(75deg,red,purple)"
   }
   else if(userId==email && userpass != password)
   {
    document.getElementById("result").innerHTML="Wrong password Entered"
    document.getElementById("passdiv").style.borderColor="red"
    document.getElementById("emaildiv").style.borderColor="royalblue"
    document.body.style.backgroundImage="linear-gradient(75deg,rgb(255,0,162),red)"
   }
   else
   {
    document.getElementById("result").innerHTML="Wrong userId and Password Entered"
    document.body.style.backgroundColor="red"
    document.getElementById("passdiv").style.borderColor="red"
    document.getElementById("emaildiv").style.borderColor="red"
    document.body.style.backgroundImage="none"
   }
}