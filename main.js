var img1=document.getElementById("img1");
var img2=document.getElementById("img2");
var img3=document.getElementById("img3");
var img4=document.getElementById("img4");
var modal1=document.getElementById("modal1");
var modal2=document.getElementById("modal2");
var modal3=document.getElementById("modal3");
var form1=document.getElementsByClassName("form1");
var form1mobile=document.getElementById("form1mobile");
var form1pass=document.getElementById("form1pass");
var form1submit=document.getElementById("form1submit");

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


form1submit.addEventListener('click',showalert);
window.addEventListener('click',clearalert);

function clearalert(e)
{
    if(e.target==modal3)
    {
        modal3.style.display='none';
    }
}

function showalert(e)
{
    e.preventDefault();
    if(form1mobile.value !='8195068777' || form1pass.value !='adish' )
    {
        modal3.style.display='block';
    }
    else{
        window.location.href='title.html';
    }
}


