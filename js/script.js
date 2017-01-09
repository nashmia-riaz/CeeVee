$(function(){
  var screenWidth = $(window).width();
  $(".details").css("width",(screenWidth/100*40)/5);
  $(".details").css("height",(screenWidth/100*40)/5);

  var slideNo = 1;
  setInterval(slideShow, 5000);

  //Set the height of jumbotron to cover the height of the window
  var screenHeight = $(window).height();
  var headerHeight = $("header").height();
  var jumboHeight = screenHeight - headerHeight;
  $("#jumbotron").css("height",jumboHeight);
  //***********************slideshow*******************************
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
        $("#dot2").css("background-color","#f4f4f2");
      }

      if(image3Display=="block"){
        $("#image3").fadeOut(1000,function(){
          $(this).css("display","none").css("opacity","0");
        });
        $("#dot3").css("background-color","#f4f4f2");
      }

      $("#image1").css("display","block").delay(500).animate({
        opacity:1
      },1000,function(){
        $(this).css("opacity","1");
      });
      $("#dot1").css("background-color","#003554");

      break;

      case 2:
      if(image1Display=="block"){
        $("#image1").fadeOut(1000,function(){
          $(this).css("display","none").css("opacity","0");
        });
        $("#dot1").css("background-color","#f4f4f2");
      }

      if(image3Display=="block"){
        $("#image3").fadeOut(1000,function(){
          $(this).css("display","none").css("opacity","0");
        });
        $("#dot3").css("background-color","#f4f4f2");
      }

      $("#image2").css("display","block").delay(500).animate({
        opacity:1
      },1000,function(){
        $(this).css("opacity","1");
      });
      $("#dot2").css("background-color","#003554");
      break;

      case 3:
      if(image1Display=="block"){
        $("#image1").fadeOut(1000,function(){
          $(this).css("display","none").css("opacity","0");
        });
        $("#dot1").css("background-color","#f4f4f2");
      }

      if(image2Display=="block"){
        $("#image2").fadeOut(1000,function(){
          $(this).css("display","none").css("opacity","0");
        });
        $("#dot2").css("background-color","#f4f4f2");
      }

      $("#image3").css("display","block").delay(500).animate({
        opacity:1
      },1000,function(){
        $(this).css("opacity","1");
      });
      $("#dot3").css("background-color","#003554");
      break;
    }
  }

  function slideShow(){
      slideNo++;
      if(slideNo > 3)
        slideNo = 1;
      displaySlide();
  }

  $("#dot1").click(function(){
    slideNo = 1;
    displaySlide();
  });


  $("#dot2").click(function(){
    slideNo = 2;
    displaySlide();
  });


  $("#dot3").click(function(){
    slideNo = 3;
    displaySlide();
  });
  var dotsPos = screenHeight-20;
  $("#dots").offset({top: dotsPos});
  //*********************************************

  /*******************steps**********************/
  var prevClick;
  $(".stepsIndividual").click(function(){
    $(".stepsIndividual").css("background-color","#f4f4f2");
    $(".stepsIndividual").css("color","#033554");
    $(this).css("background-color","#033554");
    $(this).css("color","#f4f4f2");
  });

  $(".stepsIndividual:eq( 0 )").click(function(){
    $("#step1Information").removeClass("visible-xs-block");
    $("#step"+prevClick+"Information").addClass("visible-xs-block");
    prevClick=1;
  });

  $(".stepsIndividual:eq( 1 )").click(function(){
    $("#step2Information").removeClass("visible-xs-block");
    $("#step"+prevClick+"Information").addClass("visible-xs-block");
    prevClick=2;
  });

  $(".stepsIndividual:eq( 2 )").click(function(){
    $("#step3Information").toggleClass("visible-xs-block");
    $("#step"+prevClick+"Information").toggleClass("visible-xs-block");
    prevClick=3;
  });

  $(".stepsIndividual:eq( 3 )").click(function(){
    $("#step4Information").toggleClass("visible-xs-block");
    $("#step"+prevClick+"Information").toggleClass("visible-xs-block");
    prevClick=4;
  });


  $(".stepsIndividual:eq( 0 )").click();
  prevClick=1;

  $(window).resize(function(){
    if($(window).width()<768){
      $("#step1Information").removeClass("hidden");
      $("#step2Information").removeClass("hidden");
      $("#step3Information").removeClass("hidden");
      $("#step4Information").removeClass("hidden");
    }
  });

  /**********************************************/
  /*************Generate template preview********/
  $.getJSON("../misc/templatePreview.json", function (data) {
    var html="";
    for(var x=0;x < data.preview.length;x++){
      html += "<div class='col col-lg-4 col-md-6 col-sm-6 col-xs-12'>"
        +"<div class='resumeTemplatePreview centerDiv'>"
          +"<div class='resumeTemplatePicture'>"
              +"<img class='img-responsive' src='../images/templatePreviewImages/"+data.preview[x].filename+"'>"
            +"<div class='resumeTemplateText'>"
              +"<p>"+data.preview[x].name+"</p>"
            +"</div>"
          +"</div>"
        +"</div>"
      +"</div>";
    }
    $("#templateGrid").html(html);
  }).fail(function( jqxhr, textStatus, error ) {
    var err = textStatus + ', ' + error;
    console.log( "Request Failed: " + err);
  });

  /**********************************************/
});
