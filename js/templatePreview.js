var preview=[
	{
		"filename": "1.jpg",
		"name":"Dark"
	},

	{
		"filename":"2.jpg",
		"name":"Fun"
	},

	{
		"filename":"3.jpg",
		"name":"Elegant"
	},

	{
		"filename":"4.jpg",
		"name":"Bold"
	}

];

$(function(){

  /*************Generate template preview********/
  function generateTemplatesPreview(){

    var html="";
		var temp = "template";
    for(var x=0;x < preview.length;x++){
      html += "<div class='col col-lg-4 col-md-6 col-sm-6 col-xs-12'>"
        +"<div class='resumeTemplatePreview centerDiv'>"
				+"<a href='finalPreview.html' onclick='localStorage.setItem(\""+"template"+"\",\""+preview[x].name+"\")'>"
          +"<div class='resumeTemplatePicture'>"
              +"<img class='img-responsive' src='../images/templatePreviewImages/"+preview[x].filename+"'>"
            	+"<div class='resumeTemplateText'>"
              	+"<p>"+preview[x].name+"</p>"
            	+"</div>"
          	+"</div>"
					+"</a>"
        +"</div>"
      +"</div>";
    }
    $("#templateGrid").html(html);
  }

  generateTemplatesPreview();

  // Retrieve the object from storage
  // var retrievedObject = localStorage.getItem("#Skills");

  // console.log('retrievedObject: ', JSON.parse(retrievedObject));

  /**********************************************/
  $("button").click(function(){
    html2canvas($("body"), {
            onrendered: function(canvas) {

                var imgData = canvas.toDataURL('image/png');
                console.log('Report Image URL: '+imgData);
                var doc = new jsPDF('p', 'mm', [297, 210]); //210mm wide and 297mm high

                doc.addImage(imgData, 'PNG', 10, 10);
                doc.save('sample.pdf');
            }
        });
  });
});
