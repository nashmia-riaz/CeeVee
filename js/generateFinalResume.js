// $(function(){
var fonts = {"Simple":'<link href"https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">"',
"Dark":'<link href="https://fonts.googleapis.com/css?family=Fauna+One|Playfair+Display" rel="stylesheet"> ',
"Bold":'<link href="https://fonts.googleapis.com/css?family=Alfa+Slab+One|Gentium+Book+Basic" rel="stylesheet">',
"Elegant":'<link href="https://fonts.googleapis.com/css?family=Josefin+Sans|Oswald" rel="stylesheet"> ',
"Fun":'<link href="http://fonts.googleapis.com/css?family=Josefin+Sans:700|Amatic+SC:700" rel="stylesheet" type="text/css" />',
"Simple":'<link href="https://fonts.googleapis.com/css?family=Lobster|Lora" rel="stylesheet"> '
};
var PDFname="";
var template = localStorage.getItem("template");
console.log(template);

var app = angular.module("myResumeApp",[]);

app.controller("myController",['$http','$scope','$compile',function($http, $scope,$compile){
    $http.get("resumeTemplates/resume.html")
    .then(function(response){
    var head = $('head');
    head.append($compile(fonts[template])($scope));
    head.append($compile("<link rel='stylesheet' type='text/css' href='../css/yahooApi.css' media='all' />")($scope));

    head.append($compile('<link rel="stylesheet" href="../css/resumeTemplates/'+template+'.css">')($scope));
    var data = $compile(response.data)($scope);
    $("#downloadPreview").html($compile(data)($scope));


    var personalDetails = localStorage.getItem("#PersonalDetails");
    var skills = localStorage.getItem("#Skills");
    var experience = localStorage.getItem("#Experience");
    var education = localStorage.getItem("#Education");
    personalDetails=('retrievedObject: ', JSON.parse(personalDetails));
    skills=('retrievedObject: ', JSON.parse(skills));
    experience=('retrievedObject: ', JSON.parse(experience));
    education=('retrievedObject: ', JSON.parse(education));

        // console.log(x+' : '+retrievedObject[x]);
        // $('[name='+x+']').val(retrievedObject[x]);

    $scope.FullName=personalDetails.firstname + ' ' +personalDetails.lastname;
    PDFname=$scope.FullName;
    $scope.Profession = personalDetails.profession;
    $scope.Phone = personalDetails.phonenum;
    $scope.Email = personalDetails.email;
    $scope.Objective = personalDetails.objective;

    $scope.SkillsSoftwares=skills.softwares;
    $scope.SkillsTechnical= skills.frameworks;
    $scope.SkillsMisc = skills.miscellaneous;

    for(var x =  0; x< Object.keys(experience).length/4;x++){
      var html='<div class="job">'+
        '<h2 class="h2">'+experience['company'+x]+'</h2>'+
        '<h3 class="h3">'+experience['designation'+x]+'</h3>'+
        '<h4 class="h4">'+experience['starting date'+x]+' - '+experience['end date'+x]+'</h4>'+
      '</div>';
      $('#experience').append(html);
    }

    for(var x =  0; x< Object.keys(education).length/4;x++){
      var html='<div class="yui-u yui-gf">'+
        '<h2 class="h2">'+education['school'+x]+' - '+education['grad'+x]+'</h2>'+
        '<h3 class="h3">'+education['degree'+x]+' &mdash; <strong>'+education['grade'+x]+'</strong> </h3>'+
      '</div>';
      $('#education').append(html);
    }

  })
}]);

  /**************Generate download page**********/
  function generateDownloadPage(){
    var html="";

    html+="<div id='placeHolder'></div>";
    $("#downloadPreview").html(html);
  }

  // generateDownloadPage();
  /**********************************************/

  $("#button").click(function(){
    html2canvas($("#doc2"), {
            onrendered: function(canvas) {

                var imgData = canvas.toDataURL('image/png');
                console.log('Report Image URL: '+imgData);
                var doc = new jsPDF('1', 'mm', "a4"); //210mm wide and 297mm high
                doc.addImage(imgData,  'PNG', 0, 0, 210, 297);
                doc.save(PDFname+'- Resume.pdf');
            }
        });
  });
