$(window).ready(function(){

    $(window).scroll(function(){
 
     let  pixel=$(window).scrollTop();
     if(pixel > 5)
     {
         $('.nav-scrl').css('background-color','rgba(37, 51, 90, 0.8)');
     }
     else{
         $('.nav-scrl').css('background-color','#37517E');
     }
 
    })
 
   
 })
 
 $(document).ready(function() {
     $('.my-Selector').funnyText();
 });
 