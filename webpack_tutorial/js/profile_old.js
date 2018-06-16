(function(){
    var user = {
        name : "Shekhar Gulati",
        messages : [
            "hello",
            "bye",
            "good night"
        ]
    };

    $("#timeline").text(user.name+ " Timeline");

    _.each(user.messages, function(msg){
        var html = "<li><div class='timeline-heading'><h4 class='timeline-title'>"+msg+"</h4></div></li>";
        $(".timeline").append(html);
    });

}());