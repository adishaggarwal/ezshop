var reportsubmit=document.getElementById("reportsubmit");
var reportback=document.getElementById("reportback");
var modal10=document.getElementById("modal10");
var reportid=document.getElementById("reportid");
var reportmessage=document.getElementById("reportmessage");

reportback.addEventListener('click',fe1);

function fe1(e)
{
    window.location.href='support.html';
}

reportsubmit.addEventListener('click',fe2);

function fe2(e)
{
    if(!reportmessage.value ||reportid.value.length!=10)
    {
        modal11.style.display='block';
        setTimeout(clearfe2,2000);
    }
    else
    {
        modal10.style.display='block';
    setTimeout(clearfe2,2000);
        
    }
}

function clearfe2()
{
    modal10.style.display='none';
    modal11.style.display='none';
}
