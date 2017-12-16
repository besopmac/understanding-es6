'use strict'

$(".trigger").click(function(e){
    e.preventDefault();
    
    $(".message").text("Loading...");

    $.ajax({
        url: './data/stocks.json',
        dataType: 'json',
        success: function(data) {
            console.log(data);
        } 
    });
});