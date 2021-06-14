var navLinks=document.getElementById("nav-links");
function showMenu(){
                    navLinks.style.right="0px";
                    }
function hideMenu(){
                    navLinks.style.right="-200px";
                    }

function validation()
{
// store the value that user enter in variables

var fname = document.getElementById('fname').value;
var lname =  document.getElementById('lname').value;
var password = document.getElementById('password').value;
var form = document.getElementById('form');
var conpass = document.getElementById('conpass').value;
var mail = document.getElementById("email").value;
var phone = document.getElementById("phone").value;
var flag=0;
var passFlag=0;

if(fname==""){
document.getElementById("error9").innerHTML = "First Name is required!";
document.getElementById("fname").style.borderColor = "red"
flag++;
}


else if(fname.length<3)
{
document.getElementById("error9").innerHTML = "First Name must be 3 letters or more";
document.getElementById("fname").style.borderColor = "red"
flag++;
}
else
{
document.getElementById("error9").innerHTML = "";
document.getElementById("fname").style.borderColor = "green"
}
// -------------------------------------------------------------------
if(lname==""){
document.getElementById("error10").innerHTML = "Last Name is required!";
document.getElementById("lname").style.borderColor = "red"
flag++;
}
else if(lname.length<3)
{
document.getElementById("error10").innerHTML = "Last Name must 3 letters or more";
document.getElementById("lname").style.borderColor = "red"
flag++;
}
else
{
document.getElementById("error10").innerHTML = "";
document.getElementById("lname").style.borderColor = "green"
}
if(mail==""){
document.getElementById("error01").innerHTML = "Email is required!";
document.getElementById("email").style.borderColor = "red"
flag++
}
else if (!mail.match(/^[a-zA-z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/))
{
document.getElementById("error01").innerHTML = "Enter valid Email";
document.getElementById("email").style.borderColor = "red"
flag++
}
else
{
document.getElementById("error01").innerHTML = "";
document.getElementById("email").style.borderColor = "green"
}
if(phone=="")
{
document.getElementById("error02").innerHTML = "Phone number is required! ";
document.getElementById("phone").style.borderColor = "red"
flag++  
}
else if (!phone.match(/^01[0-2,5]\d{8}$/))
{
document.getElementById("error02").innerHTML = "Enter valid number ";
document.getElementById("phone").style.borderColor = "red"
flag++
}
else
{
document.getElementById("error02").innerHTML = "";
document.getElementById("phone").style.borderColor = "green"
}

if(password.search(/[ ]/)!=-1)
{
document.getElementById("error1").innerHTML = "password must not include space, ";
passFlag++;
flag++;
}
else
{ 
document.getElementById("error1").innerHTML = "";
}
// limit the lenght of the  pass
if(password.length != 8 )
{
document.getElementById("error2").innerHTML = "Password must be 8 charcters ";
flag++;passFlag++;
}
else
{
document.getElementById("error2").innerHTML = "";
}
// must enclud numbers
if(password.search(/[0-9]/)==-1)
{
document.getElementById("error3").innerHTML = "password must incluce at least a number, ";
flag++;passFlag++;
}
else
{
document.getElementById("error3").innerHTML = "";
}
//not to accept without upper characters
if(password.search(/[A-Z]/)==-1)
{
document.getElementById("error4").innerHTML = "password must include at least 1 upper character, ";
flag++;passFlag++;
}
else
{
document.getElementById("error4").innerHTML = "";
}
// not to accept without lower characters
if(password.search(/[a-z]/)==-1)
{
document.getElementById("error5").innerHTML = "password must include at least 1 lowwer character, ";
flag++;passFlag++;
}
else{
document.getElementById("error5").innerHTML = "";
}
// not accept without special characters
if(password.search(/[!\@\#\$\%\^\&\*\(\)\_\-\=\+\<\>\,\?]/)==-1)
{
flag++;passFlag++;
document.getElementById("error6").innerHTML = "password must include 1 special character, ";
}
else
{
document.getElementById("error6").innerHTML = "";
}
var first=password.substr(0,1);
if(!(first.match(/[A-Z]/)))
{
document.getElementById("error7").innerHTML = "first letter should be upper case, ";
flag++;passFlag++;
}
else
{
document.getElementById("error7").innerHTML = "";
}
if(conpass != password)
{
document.getElementById("error8").innerHTML = "passward is not matching.";
document.getElementById("error03").innerHTML = "passward is not matching.";
flag++;passFlag++;
}
else
{ 
document.getElementById("error8").innerHTML = "";      
document.getElementById("error03").innerHTML = "";
}
if(passFlag===0)
{
document.getElementById("password").style.borderColor = "green";
document.getElementById("conpass").style.borderColor = "green";
}
else
{
document.getElementById("password").style.borderColor = "red";
document.getElementById("conpass").style.borderColor = "red";
}   
if (flag>0) 
{
return false;
}
else
{
alert("Thank you "+fname+" "+lname+"! for joinning us.");
}


}
