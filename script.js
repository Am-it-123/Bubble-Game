var timer = 60;
var s = 0;
var val ;

function Makebubble()
{
    var Bubble = "";
    for(var i = 1; i <=264 ; i++)
    {   var val = Math.floor(Math.random()*10);
        Bubble += `<div class="circle">${val}
        </div>`
    }

    document.querySelector(".bubble").innerHTML = Bubble;
}

function runtimer(){
{
    var Time =   setInterval(function(){
        timer--;
      if(timer >= 0){
            document.querySelector("#time").textContent = timer;
        }

        else
        {
            clearInterval(Time);
            document.querySelector(".bubble").innerHTML = `<h1>Game Over</h1>
            
          <h1>Score : ${s}</h1>`;
        }

    
    },1000);
}
   
}

function GetRandomHit()
{
    val = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = val;    
}

function Getscore()
{
    s +=10;
    document.querySelector("#score").textContent = s;
}
document.querySelector(".bubble").addEventListener("click",function(Details)
 {   
     var hitnumber = Number(Details.target.textContent);
     if(hitnumber === val)
     {
          Getscore();
          GetRandomHit();
          Makebubble();
     }
 }
 );




GetRandomHit();
runtimer();
Makebubble();





