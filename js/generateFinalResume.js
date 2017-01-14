// $(function(){
var fonts = [];


var app = angular.module("myResumeApp",[]);

app.controller("myController",['$http','$scope','$compile',function($http, $scope,$compile){
    $http.get("resumeTemplates/elegant.html")
    .then(function(response){
    var head = $('head');
    // head.append($compile('<link rel="stylesheet" href="/css/resumeTemplates/elegant.css">')($scope));
    head.append($compile('<link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Oswald" rel="stylesheet">')($scope));
    var data = $compile(response.data)($scope);
    $("#downloadPreview").html($compile(data)($scope));

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
                doc.addImage(imgData, 'PNG', -131.5, -15,480,330);
                doc.save('sample.pdf');
            }
        });
  });
// });
