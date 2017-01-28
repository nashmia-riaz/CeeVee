$(function() {
    var newHash      = "formMain.html",
        $mainContent = $("#main-content"),
        $pageWrap    = $("#page-wrap"),
        baseHeight   = 0,
        $el;

    $pageWrap.height($pageWrap.height());
    baseHeight = $pageWrap.height() - $mainContent.height()+30;

    $("nav").delegate("a", "click", function() {
        window.location.hash = $(this).attr("href");
        return false;
    });
    $(window).bind('hashchange', function(){
/******************************************************************************/
        var formID = $('.current').text().trim().replace(/\s/g,'');
        if(formID.length>0){
            formID = "#"+formID;
            var $inputs = $(formID+' :input');

            // not sure if you wanted this, but I thought I'd add it.
            // get an associative array of just the values.
            var values = {};
            $inputs.each(function() {
                values[this.name] = $(this).val();
            });

            // Put the object into storage
            localStorage.setItem(formID, JSON.stringify(values));

        }
/******************************************************************************/
        newHash = window.location.hash.substring(1);
        var currentPage="";
        if (newHash) {
            $mainContent
                .find("#guts")
                .fadeOut(200, function() {
                    $mainContent.hide().load(newHash + " #guts", function() {
                        $mainContent.fadeIn(200, function() {
                            $pageWrap.animate({
                                height: baseHeight + $mainContent.height() + "px"
                            });
                        });
                        $("nav a").removeClass("current");
                        $("nav a[href="+newHash+"]").addClass("current");
                        /*********************************************************/
                        currentPage=$('.current').text().trim().replace(/\s/g,'');
                        var edItems=localStorage.getItem("room_education");
                        var exItems = localStorage.getItem("room_experience");
                        console.log(edItems);
                        console.log(exItems);
                        if(currentPage=="Education" && edItems){
                            for(var i=0; i<edItems; i++){
                                add_fields_education_WI(i+1);
                            }
                        }
                        else if(currentPage=="Experience" && exItems){
                            for(var j=0; j<exItems; j++)
                                add_fields_experience_WI(j+1);
                        }
                        var retrievedObject = localStorage.getItem("#"+currentPage);
                        retrievedObject=('retrievedObject: ', JSON.parse(retrievedObject));

                        for(var x in retrievedObject){
                            console.log(x+' : '+retrievedObject[x]);
                            $('[name='+x+']').val(retrievedObject[x]);

                        }

                    });
                });
        }

    });

    $(window).trigger('hashchange');

});
var room_education, room_experience;
if(localStorage.getItem("room_education")){
    room_education=localStorage.getItem("room_education");}
else
    room_education=0;
if(localStorage.getItem("room_experience")){
    room_education=localStorage.getItem("room_experience");
}
else
    room_experience=0;
function add_fields_education() {
    room_education++;
    var objTo = document.getElementById('meow');
    var divtest = document.createElement("div");
    divtest.innerHTML = ' <hr style="width:100%;"><label class="Degree">Degree</label><br><input type="text" id="degree" name="degree'+room_education+'"><br>'+
    '<label class="yearOfGraduation">Year Of Graduation</label><br><input type="date" id="yearofgraduation" name="grad'+room_education+'"><br>'+
    '<label class="cgpa">CGPA</label><br><input type="text" id="CGPA" name="grade'+room_education+'"><br>'+
    '<label class="school/college">School/College</label><br><input type="text" id="school/college" name="school'+room_education+'"><br>';
    $("#page-wrap").css("height","100%");
        objTo.appendChild(divtest);
        localStorage.setItem("room_education", room_education);
}


function add_fields_experience() {
    room_experience++;
    var objTo = document.getElementById('meow');
    var divtest = document.createElement("div");
    divtest.innerHTML = ' <hr style="width:100%;"><label class="company">Company</label><br>'+
    '<input type="text" id="company" name="company'+room_experience+'"><br>'+
    '<label class="start">Starting Date</label><br>'+
    '<input type="date" id="start" name="starting date'+room_experience+'"><br>'+
    '<label class="end">End Date</label><br><input type="text" id="end" name="end date'+room_experience+'"><br>'+
    '<label class="pos">Designation</label><br><input type="text" id="pos" name="designation'+room_experience+'"><br>';
    $("#page-wrap").css("height","100%");
    objTo.appendChild(divtest);
    localStorage.setItem("room_experience", room_experience);
}


function add_fields_education_WI(i) {
    var objTo = document.getElementById('meow');
    var divtest = document.createElement("div");
    divtest.innerHTML = ' <hr style="width:100%;"><label class="Degree">Degree</label><br><input type="text" id="degree" name="degree'+i+'"><br>'+
    '<label class="yearOfGraduation">Year Of Graduation</label><br><input type="date" id="yearofgraduation" name="grad'+i+'"><br>'+
    '<label class="cgpa">CGPA</label><br><input type="text" id="CGPA" name="grade'+i+'"><br>'+
    '<label class="school/college">School/College</label><br><input type="text" id="school/college" name="school'+i+'"><br>';
    $("#page-wrap").css("height","100%");
    objTo.appendChild(divtest);
}


function add_fields_experience_WI(i) {
    var objTo = document.getElementById('meow');
    var divtest = document.createElement("div");
    divtest.innerHTML = ' <hr style="width:100%;"><label class="company">Company</label><br>'+
    '<input type="text" id="company" name="company'+i+'"><br>'+
    '<label class="start">Starting Date</label><br>'+
    '<input type="date" id="start" name="starting date'+i+'"><br>'+
    '<label class="end">End Date</label><br><input type="text" id="end" name="end date'+i+'"><br>'+
    '<label class="pos">Designation</label><br><input type="text" id="pos" name="designation'+i+'"><br>';
    $("#page-wrap").css("height","100%");
    objTo.appendChild(divtest);
}
