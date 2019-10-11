var p4more=document.getElementById("p4more");
var p4transactions=document.getElementById("p4transactions");
var p4rules=document.getElementById("p4rules");
var p4support=document.getElementById("p4support");
var p4signout=document.getElementById("p4signout");
var modal9yes=document.getElementById("modal9yes");
var modal9no=document.getElementById("modal9no");
var modal9=document.getElementById("modal9");
var nrdiv=document.getElementById("nrdiv");

p4more.addEventListener('click',function1);

function function1(e)
{
    window.location.href='title.html';
}

p4signout.addEventListener('click',function2);

function function2(e)
{
    modal9.style.display='block';
}

modal9yes.addEventListener('click',function3);

function function3(e)
{
    modal9.style.display='none';
    window.location.href='index.html';
}

modal9no.addEventListener('click',function4);

function function4(e)
{
    modal9.style.display='none';
}

p4transactions.addEventListener('click',function5);

function function5(e)
{
   
    window.location.href='noresults.html';
}

p4support.addEventListener('click',function6);

function function6(e)
{
   
    window.location.href='support.html';
}

