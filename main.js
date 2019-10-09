var img1=document.getElementById("img1");
var img2=document.getElementById("img2");
var img3=document.getElementById("img3");
var img4=document.getElementById("img4");
var modal1=document.getElementById("modal1");
var modal2=document.getElementById("modal2");
var modal3=document.getElementById("modal3");
var modal3id=document.getElementById("modal3id");
var form1=document.getElementsByClassName("form1");
var form1mobile=document.getElementById("form1mobile");
var form1pass=document.getElementById("form1pass");
var form1submit=document.getElementById("form1submit");
var modal6=document.getElementById("modal6");
var form1forgotpass=document.getElementById("form1forgotpass");
var modal6submit=document.getElementById("modal6submit");
var modal6cancel=document.getElementById("modal6cancel");
var modal6mobile=document.getElementById("modal6mobile");
var modal7=document.getElementById("modal7");
var modal7confirm=document.getElementById("modal7confirm");
var modal7cancel=document.getElementById("modal7cancel");
var modal7otp=document.getElementById("modal7otp");
var modal7pass1=document.getElementById("modal7pass1");
var modal7pass2=document.getElementById("modal7pass2");
var modal8=document.getElementById("modal8");



var array = ['E','Z','S','H','O','P'];

var i=0;

function photos()
{
    img01();

    setInterval(function() {
        if(i==0)
        {
        modal2.innerHTML=`<div>
                            <p>${array[0]}</p>
                            </div>`;
        }

        else if(i==1)
        {
        modal2.innerHTML=`<div>
        <p>${array[0]}${array[1]}</p>
        </div>`;
        }

        else if(i==2)
        {
    modal2.innerHTML=`<div>
    <p>${array[0]}${array[1]}${array[2]}</p>
    </div>`;
    }

    else if(i==3)
        {
    modal2.innerHTML=`<div>
    <p>${array[0]}${array[1]}${array[2]}${array[3]}</p>
    </div>`;
    }
    
    else if(i==4)
        {
    modal2.innerHTML=`<div>
    <p>${array[0]}${array[1]}${array[2]}${array[3]}${array[4]}</p>
    </div>`;
    }
    
    else if(i==5)
        {
    modal2.innerHTML=`<div>
    <p>${array[0]}${array[1]}${array[2]}${array[3]}${array[4]}${array[5]}</p>
    </div>`;
    }
    else if(i==6)
        {
    modal2.innerHTML=`<div>
    <p>${array[0]}${array[1]}${array[2]}${array[3]}${array[4]}${array[5]}</p>
    <p>...keep shopping</p>
    </div>`;
    }
    else if(i==7)
        {
    modal2.innerHTML=`<div>
    <p>${array[0]}${array[1]}${array[2]}${array[3]}${array[4]}${array[5]}</p>
    <p>...keep shopping</p>
    <p>keep walking...</p>
    </div>`;
    }
    else if(i==8)
        {
    modal2.innerHTML=``;
    }
                            i=i+1;
    }, 750);

    






    function img01()
{
    modal2.innerHTML
    setTimeout(img02,1800);
}
 
function img02()
{
    img1.style.display='none';
    img2.style.display='block';
    setTimeout(img03,1800);
}

function img03()
{
    img2.style.display='none';
    img3.style.display='block';
    setTimeout(img04,1800);
}

function img04()
{
    img3.style.display='none';
    img4.style.display='block';
    setTimeout(openapp,1800);
}

function openapp()
{
    img4.style.display='none';
    modal1.removeAttribute("id");
    modal1.style.display='none';
    modal2.style.display='none';
}
};


form1submit.addEventListener('click',showalert1);


function clearalert1()
{
        modal3.style.display='none';
}

function showalert1(e)
{
    e.preventDefault();
    if(form1mobile.value !='8195068777' || form1pass.value !='adish' )
    {
        modal3id.innerHTML=` <p>Please fill correct mobile number and password</p>`
        modal3.style.display='block';
        setTimeout(clearalert1,2000);
    }
    else{
        window.location.href='title.html';
    }
}

form1forgotpass.addEventListener('click',showalert2);


function showalert2(e)
{
    e.preventDefault();
        modal6.style.display='block';
}

modal6submit.addEventListener('click',showalert3);
modal6cancel.addEventListener('click',clearalert32);

function showalert3(e)
{
    var num=modal6mobile.value;
    if(!num || isNaN(num) || num.length!=10)
    {
        modal6.style.display='none';
        modal3id.innerHTML=` <p>Please fill correct mobile number</p>`
        modal3.style.display='block';
        setTimeout(clearalert3,2000);
    }
    else
    {
        modal6.style.display='none';
        modal7.style.display='block';
    }

}

function clearalert3()
{
    modal3.style.display='none';
}
function clearalert32(e)
{
    modal6.style.display='none';
}



modal7confirm.addEventListener('click',showalert4);
modal7cancel.addEventListener('click',clearalert42);

function showalert4(e)
{
    var otp=modal7otp.value;
    var num1=modal7pass1.value;
    var num2=modal7pass2.value;
    if(num1!=num2 || otp.length!=4 || isNaN(otp))
    {
        modal7.style.display='none';
        modal3id.innerHTML=` <p>Please fill all the fields correctly</p>`
        modal3.style.display='block';
        setTimeout(clearalert4,2000);
    }
    else
    {
        modal7.style.display='none';
        modal8.style.display='block';
        setTimeout(clearalert4,2000);
    }

}

function clearalert4()
{
    modal3.style.display='none';
    modal8.style.display='none';
}

function clearalert42(e)
{
    modal7.style.display='none';
}





