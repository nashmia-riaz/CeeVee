// $(function(){
var fonts = [];


var app = angular.module("myResumeApp",[]);

app.controller("myController",['$http','$scope','$compile',function($http, $scope,$compile){
    $http.get("resumeTemplates/resume.html")
    .then(function(response){
    var head = $('head');
    head.append($compile('<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">')($scope));
    head.append($compile('<link rel="stylesheet" href="../css/resumeTemplates/simple.css">')($scope));
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

    console.log(personalDetails);
    console.log(skills);
    console.log(experience);
    console.log(education);
        // console.log(x+' : '+retrievedObject[x]);
        // $('[name='+x+']').val(retrievedObject[x]);

    $scope.FullName="Sarah Khan";
    $scope.PhoneNo="053432345";
    $scope.EmailAddress="SarahKhan@outlook.com";

  })
  .catch(function(){
    alert("page not found");
  });
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
    html2canvas($("#downloadPreview"), {
            onrendered: function(canvas) {

                var imgData = canvas.toDataURL('image/png');
                console.log('Report Image URL: '+imgData);
                var doc = new jsPDF('1', 'mm', "a4"); //210mm wide and 297mm high
                doc.addImage(imgData, 'PNG', -50, -15,310,330);
                doc.save('sample.pdf');
            }
        });
    // $('#downloadPreview').printElement();
  });
// });
