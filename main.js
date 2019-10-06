var img1=document.getElementById("img1");
var img2=document.getElementById("img2");
var img3=document.getElementById("img3");
var img4=document.getElementById("img4");


$(document).ready(function(){
    img01();
});

function img01()
{
    setTimeout(img02,3000);
}
 
function img02()
{
    img1.style.display='none';
    img2.style.display='block';
    setTimeout(img03,2000);
}

function img03()
{
    img2.style.display='none';
    img3.style.display='block';
    setTimeout(img04,2000);
}

function img04()
{
    img3.style.display='none';
    img4.style.display='block';
    setTimeout(openapp,2000);
}

function openapp()
{
    img4.style.display='none';
}

