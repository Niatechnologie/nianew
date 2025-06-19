$(function(){
  var Time_l;
  var tabcouleur=new Array();
  tabcouleur[0]="#FF9600";
  tabcouleur[1]="#0B9F00";
  var i=0;
  
  Time_l=new TimelineLite();
      
  //Math.random()
  Time_l.add(TweenLite.from("#red_path,#black_path", 4.0, {drawSVG:"50% 50%",delay:1.5})); 	 
  Time_l.add(TweenLite.to("#red_path",2.1, {fill:"#ff0000",stroke:"none"}));
  Time_l.add(TweenLite.to("#black_path",2.1, {fill:"#ffffff",stroke:"none"}));

  Time_l.add(TweenLite.to("#red_path,#black_path",2.7, {fill:"rgba(0, 203, 202, .4)",opacity:0,stroke:"none",delay:0.5,onComplete:function() {
      TweenLite.delayedCall(2, rejouer);
   }}));	
  
  function rejouer(){
    Time_l.restart();  
  } 
  
  // var menu=document.querySelector('.main-menu-small');
  // var bars=document.querySelector(".bars");
  //    bars.addEventListener("click",(e)=>{
  //      // alert("je suis la bars");
  //    menu.style.display='initial';


  //    })


    //   var tm=new TimelineLite();
    // $('.bars').click(function(){
       
    //     $('.main-menu-small').css({display:'block'});
    //     tm.add(TweenLite.to(".main-menu-small", 0.3,{rotation:0,x:280,ease:"elastic"}));
     
       
    //     })
    // $('#closemenu').click(function(){
    //     tm.add(TweenLite.to(".main-menu-small", 0.2,{rotation:0,x:-280,ease:"elastic",onComplete:function(){
    //             $('.main-menu-small').css({display:'none'});
    //     }}));
 
    // })
 
})