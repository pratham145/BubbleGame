var rn;
var  score=0;
function makebubbles(){
    let clutter = ""
    for(let i=0;i<=132;i++){
        
        let rn = Math.floor(Math.random()*5)+1
        clutter += `  <div class="bubble" >${rn}</div>`
        document.querySelector(".pbtm").innerHTML = clutter
    }
}


function runtime(){
   var timer = 61;
    var  timerr;
    setInterval(
timerr =  function(){
if(timer>0){
timer--;
document.querySelector(".time").textContent = timer;
}
else{
    clearInterval(timerr)
   document.querySelector(".pbtm").innerHTML = `<h1>Game Over!</h1>.`
   
}
    },1000)
}

function hit(){
    rn = Math.floor(Math.random()*5)+1
    document.querySelector(".hit").textContent = rn
 }


function increasescore(){
 
    score += 10
    document.querySelector(".score").textContent = score
    console.log(score.textContent)
  
}

document.querySelector(".pbtm").addEventListener("click",(a)=>{
    var clicked =Number(a.target.textContent)
  if(clicked == rn){
    
    increasescore();
makebubbles();
hit();
  }
})

makebubbles();
runtime();
hit();
