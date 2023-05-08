const box=document.querySelector(".container");
let sq=document.querySelector(".square")
let pos=50

document.body.addEventListener("keyup", e=>{
    if(e.key=="ArrowRight"){
        goRight();
        
    }
})
function goRight(){
    let marLeft = sq.style.marginLeft ? parseInt(sq.style.marginLeft) : 0
    console.log(marLeft);
    if(marLeft+pos<=box.clientWidth- sq.clientWidth){
        sq.style.marginLeft=marLeft + pos + "px"
        console.log(sq.style.marginLeft);
    }
    else{
        box.style.marginLeft=box.clientWidth-box.clientWidth+"px"
       console.log(box.style.marginLeft); 
    }
    
}
document.body.addEventListener("keydown", e=>{
    if(e.key=="ArrowUp"){
        goTop();
    }
})
function goTop(){
    let marTop = sq.style.marginTop ? parseInt(sq.style.marginTop) : 0
    console.log(marTop);
    if(marTop+pos<=box.clientWidth- sq.clientWidth){
        sq.style.marginTop=marTop + pos + "px"
        console.log(sq.style.marginTop);
    }
    else{
        box.style.marginTop=box.clientWidth-box.clientWidth+"px"
        console.log(box.marginTop);
    }
   
}
document.body.addEventListener("keydown", e=>{ 
    if(e.key=="ArrowDown"){
     goDown();
    }
})
function goDown(){
    let marDown = sq.style.marginDown ? parseInt(sq.style.marDown) : 0
    console.log(marDown);
    if(marDown+pos <= box.clientWidth- sq.clientWidth){
        sq.style.marginDown=marDown + pos + "px"
        console.log(sq.style.marginDown);
    }
    else{
        box.style.marginDown=box.clientWidth-box.clientWidth+"px"
        console.log(box.style.marginDown);
    }
    
}
document.body.addEventListener("keydown", e=>{ 
    if(e.key=="ArrowLeft"){
        goLeft();
    }
})
function goLeft(){
    let marRight = sq.style.marginRight ? parseInt(sq.style.marRight) : 0
    console.log(marRight);
    if(marRight+pos<=box.clientWidth- sq.clientWidth){
        sq.style.marginRight=marRight + pos + "px"
        console.log(sq.style.marginRight);
    }
    else{
        box.style.marginRight=box.clientWidth-box.clientWidth+"px"
        console.log(box.style.marginRight);
    }
    
}