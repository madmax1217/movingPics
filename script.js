let rightImg = document.getElementById( 'right' )
let leftImg = document.getElementById( 'left' )
let topImg =  document.getElementById( 'top' )

let startBtn = document.getElementById( 'start' )
let stopBtn = document.getElementById( 'stop' )
let resetBtn = document.getElementById( 'reset' )
let movepic= document.getElementById('movepic')
stopBtn.onclick = stopMove;
startBtn.onclick = startMove;
resetBtn.onclick = resettMove;

let interval;

var move = true;
function startMove ()
{
interval = setInterval( function ()
    {
        if ( parseInt( window.getComputedStyle( document.getElementById( 'top' ) ).top ) < 5 )
        {
            move = true;
        }
        else if( parseInt ( window.getComputedStyle( document.getElementById( 'top' ) ).top ) > 210){
            move = false;
        }
        if ( move )
        {// down move
            topImg.style.top =
                parseInt( window.getComputedStyle( topImg ).top ) + 4 + "px";
            console.log(topImg.style.top)
            
        }
        else
        {// down move
            topImg.style.top =
                parseInt( window.getComputedStyle( topImg ).top ) - 4 + "px";

    }

    },10)
}

function stopMove ()
{
    clearInterval(interval)
}
//reset

function resettMove ()
{
    topImg.style.top=5+"px"
    
}
