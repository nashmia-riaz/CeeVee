var preview=[
	{
		"filename": "1.jpg",
		"name":"Bold"
	},

	{
		"filename":"2.jpg",
		"name":"Simple"
	},

	{
		"filename":"3.jpg",
		"name":"Elegant"
	},

	{
		"filename":"4.jpg",
		"name":"Professional"
	}



];

$(function(){

  /*************Generate template preview********/
  function generateTemplatesPreview(){

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
  }

  generateTemplatesPreview();

  /**********************************************/
});
