var modal4=document.getElementById("modal4");
var form2=document.getElementsByClassName("form2");
var form2fname=document.getElementById("form2fname");
var form2lname=document.getElementById("form2lname");
var form2mobile=document.getElementById("form2mobile");
var form2pass1=document.getElementById("form2pass1");
var form2pass2=document.getElementById("form2pass2");
var form2submit=document.getElementById("form2submit");
var modal5=document.getElementById("modal5");

form2submit.addEventListener('click',showalert2);


function clearalert2()
{
        modal4.style.display='none';
        modal5.style.display='none';
}

function showalert2(e)
{
    e.preventDefault();
    var nummob=form2mobile.value;
    if( !form2fname.value||!form2lname.value ||!form2pass2.value || !form2mobile.value || !form2pass1.value ||form2pass1.value!=form2pass2.value|| isNaN(nummob) || nummob.length!=10)
    {
        modal4.style.display='block';
        setTimeout(clearalert2,2000);
    }
    else{
        modal5.style.display='block';
        setTimeout(clearalert2,3000);
    }
}
