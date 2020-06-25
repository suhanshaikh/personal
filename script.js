$(function() {
    $(".toggle").on("click",function(){
      if($(".links").hasClass("active"))
      {
        console.log( "has class!" );
        $(".links").removeClass("active");
      }
      else{
        $(".links").addClass("active");
      }
    });
});
