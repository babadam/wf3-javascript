// alert("Hi");

$(function(){
    var leftField = $("#left");
    var topField = $("#top");
    var square = $("#square");
    
    $("#my-form").on("submit", function(e){
        e.preventDefault();
        
        var leftValue = parseInt(leftField.val());
        var topValue = parseInt(topField.val());
        
        //équivalent de !Number.isNaN(leftValue)
        if ($.isNumeric(leftValue) && $.isNumeric(topValue)){
            //équivalent de block.style.left = leftValue;
            square.stop().animate({"left": leftValue, "top": topValue}, 3000);
            // square.css("top", topValue);
        }
    });
});