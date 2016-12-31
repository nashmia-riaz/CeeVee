$(function(){
  var screenWidth = $(window).width();
  $(".details").css("width",(screenWidth/100*40)/5);
  $(".details").css("height",(screenWidth/100*40)/5);

  var slideNo = 1;
  setInterval(slideShow, 5000);

  var screenHeight = $(window).height();
  var headerHeight = $("header").height();
  var jumboHeight = screenHeight - headerHeight;
  $("#jumbotron").css("height",jumboHeight);

  function displaySlide(){
    var image1Display = $("#image1").css("display");
    var image2Display = $("#image2").css("display");
    var image3Display = $("#image3").css("display");
    switch(slideNo){
      case 1:
      if(image2Display=="block"){
        $("#image2").fadeOut(1000,function(){
          $(this).css("display","none").css("opacity","0");
        });
      }

      if(image3Display=="block"){
        $("#image3").fadeOut(1000,function(){
          $(this).css("display","none").css("opacity","0");
        });
      }

      $("#image1").css("display","block").delay(500).animate({
        opacity:1
      },1000,function(){
        $(this).css("opacity","1");
      });

      break;

      case 2:
      if(image1Display=="block"){
        $("#image1").fadeOut(1000,function(){
          $(this).css("display","none").css("opacity","0");
        });
      }

      if(image3Display=="block"){
        $("#image3").fadeOut(1000,function(){
          $(this).css("display","none").css("opacity","0");
        });
      }

      $("#image2").css("display","block").delay(500).animate({
        opacity:1
      },1000,function(){
        $(this).css("opacity","1");
      });

      break;

      case 3:
      if(image1Display=="block"){
        $("#image1").fadeOut(1000,function(){
          $(this).css("display","none").css("opacity","0");
        });
      }

      if(image2Display=="block"){
        $("#image2").fadeOut(1000,function(){
          $(this).css("display","none").css("opacity","0");
        });
      }

      $("#image3").css("display","block").delay(500).animate({
        opacity:1
      },1000,function(){
        $(this).css("opacity","1");
      });

      break;
    }
  }

  function slideShow(){
      slideNo++;
      if(slideNo > 3)
        slideNo = 1;
      displaySlide();
      console.log("slide number: "+slideNo);
  }


})
