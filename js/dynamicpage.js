$(function() {

    var newHash      = "",
        $mainContent = $("#main-content"),
        $pageWrap    = $("#page-wrap"),
        baseHeight   = 0,
        $el;
        
    $pageWrap.height($pageWrap.height());
    baseHeight = $pageWrap.height() - $mainContent.height();
    
    $("nav").delegate("a", "click", function() {
        window.location.hash = $(this).attr("href");
        return false;
    });
    
    $(window).bind('hashchange', function(){
    
        newHash = window.location.hash.substring(1);
        
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
                    });
                });
        };
        
    });
    
    $(window).trigger('hashchange');

});

var room = 1;
function add_fields() {
    room++;
    var objTo = document.getElementById('room_fields')
    var divtest = document.createElement("div");
    divtest.innerHTML = '<label class="degree">Degree</label><br><input type="text" id="degree" name="degree"><br><label class="grad">Year of Graduation</label><br><input type="text" id="grad" name="year of graduation"><br><label class="grade">Grade/CGPA</label><br><input type="text" id="grade" name="grade"><br><label class="school">School/College</label><br><input type="text" id="school" name="school"><br>'
    
     objTo.appendChild(divtest)
}

var room = 2;
function add_fields() {
    room++;
    var objTo = document.getElementById('meow')
    var divtest = document.createElement("div");
    divtest.innerHTML = ' <label class="company">Company</label><br><input type="text" id="company" name="company"><br><label class="start">Starting Date</label><br><input type="date" id="start" name="starting date"><br><label class="end">End Date</label><br><input type="text" id="end" name="end date"><br><label class="pos">Designation</label><br><input type="text" id="pos" name="designation"><br>'
    
     objTo.appendChild(divtest)
}