var JSON;if(!JSON){JSON={}}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==="string"){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}());

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
  console.log(preview);
  var html="";
  for(var x=0;x < preview.length;x++){
    html += "<div class='col col-lg-4 col-md-6 col-sm-6 col-xs-12'>"
      +"<div class='resumeTemplatePreview centerDiv'>"
        +"<div class='resumeTemplatePicture'>"
            +"<img class='img-responsive' src='../images/templatePreviewImages/"+preview[x].filename+"'>"
          +"<div class='resumeTemplateText'>"
            +"<p>"+preview[x].name+"</p>"
          +"</div>"
        +"</div>"
      +"</div>"
    +"</div>";
  }
  $("#templateGrid").html(html);


  /**********************************************/
});
