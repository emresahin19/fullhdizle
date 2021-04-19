var aktif=0;
    var pasif=null;
    slider();
                
    var down=document.createElement('div');
    down.style.top="0";
    down.innerHTML="<i class='fa fa-arrow-up'></i>";
    down.className="down";
    down.onclick=function(){slider();}
    var up=document.createElement("div");
    up.style.bottom="0";
    up.innerHTML="<i class='fa fa-arrow-down'></i>";
    up.className="up";
    up.onclick=function(){ aktif-=2; slider();}
    var anadiv=document.getElementById("slider");
    anadiv.appendChild(down);
    anadiv.appendChild(up);
                                
    anadiv.onmouseover=function(){clearTimeout(slayt_zaman);}
    anadiv.onmouseout=function(){slayt_zaman=setInterval(slider,5000);}
                
    function slider()
    {
                    
        if(aktif>=document.getElementsByClassName("slayt").length)
        { 
            aktif=0;
        }
        else if(aktif<0)
        { 
            aktif=document.getElementsByClassName("slayt").length-1; 
        }
        if(pasif!=null)
        {                
        var pasifdiv=document.getElementsByClassName("slayt")[pasif];
        pasifdiv.style.animation="uptodown2 linear 0.5s";
        pasifdiv.style.top="355px";
        }
    
        var aktifdiv=document.getElementsByClassName("slayt")[aktif];
        aktifdiv.style.animation="uptodown linear 0.5s";
        aktifdiv.style.opacity="1";
        aktifdiv.style.top="0px";
                    
        pasif=aktif;
        aktif++;
}
    var slayt_zaman=setInterval(slider,5000);

/* --------------------------------------------- */


 function myShowFunction0()                  
 { 
 if  (document.getElementById("film-0").classList.contains('film-on')==1)
     {
     document.getElementById("film-0").classList.add('film-off');
     document.getElementById("film-0").classList.remove('film-on');
     }
 else 
     {
     document.getElementById("film-0").classList.add('film-on');
     document.getElementById("film-0").classList.remove('film-off');
     }
 }


function myShowFunction1()                  
{ 
if  (document.getElementById("film-1").classList.contains('film-on')==1)
    {
    document.getElementById("film-1").classList.add('film-off');
    document.getElementById("film-1").classList.remove('film-on');
    }
else 
    {
    document.getElementById("film-1").classList.add('film-on');
    document.getElementById("film-1").classList.remove('film-off');
    }
}

 
function myShowFunction2()                  
{ 
if  (document.getElementById("film-2").classList.contains('film-on')==1)
    {
    document.getElementById("film-2").classList.add('film-off');
    document.getElementById("film-2").classList.remove('film-on');
    }
else 
    {
    document.getElementById("film-2").classList.add('film-on');
    document.getElementById("film-2").classList.remove('film-off');
    }
}

 
function myShowFunction3()                  
{ 
if  (document.getElementById("film-3").classList.contains('film-on')==1)
    {
    document.getElementById("film-3").classList.add('film-off');
    document.getElementById("film-3").classList.remove('film-on');
    }
else 
    {
    document.getElementById("film-3").classList.add('film-on');
    document.getElementById("film-3").classList.remove('film-off');
    }
}

 
function myShowFunction4()                  
{ 
if  (document.getElementById("film-4").classList.contains('film-on')==1)
    {
    document.getElementById("film-4").classList.add('film-off');
    document.getElementById("film-4").classList.remove('film-on');
    }
else 
    {
    document.getElementById("film-4").classList.add('film-on');
    document.getElementById("film-4").classList.remove('film-off');
    }
}

 
function myShowFunction5()                  
{ 
if  (document.getElementById("film-5").classList.contains('film-on')==1)
    {
    document.getElementById("film-5").classList.add('film-off');
    document.getElementById("film-5").classList.remove('film-on');
    }
else 
    {
    document.getElementById("film-5").classList.add('film-on');
    document.getElementById("film-5").classList.remove('film-off');
    }
}

 
function myShowFunction6()                  
{ 
if  (document.getElementById("film-6").classList.contains('film-on')==1)
    {
    document.getElementById("film-6").classList.add('film-off');
    document.getElementById("film-6").classList.remove('film-on');
    }
else 
    {
    document.getElementById("film-6").classList.add('film-on');
    document.getElementById("film-6").classList.remove('film-off');
    }
}

 
function myShowFunction7()                  
{ 
if  (document.getElementById("film-7").classList.contains('film-on')==1)
    {
    document.getElementById("film-7").classList.add('film-off');
    document.getElementById("film-7").classList.remove('film-on');
    }
else 
    {
    document.getElementById("film-7").classList.add('film-on');
    document.getElementById("film-7").classList.remove('film-off');
    }
}

/* --------------------------------------------- */

function searchFunction() {
    var x = document.getElementById("search-page");
    var y = document.getElementById("main-page");
    if (x.style.display === "none") 
    {
        x.style.display = "block";
        y.style.display= "none";
    } 
}

function genreFunction() {
    var z = document.getElementById("genre-page");
    var y = document.getElementById("main-page");
    if (z.style.display === "none") 
    {
        z.style.display = "block";
        y.style.display= "none";
    } 
}




