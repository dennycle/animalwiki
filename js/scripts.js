$(document).ready(function() {
	$("form#animalSelect").submit(function(event) {
		event.preventDefault();
    //var choice = $("#animal").val();
		if($("#animal").val() === "Turtle"){
      $(".turtle").show();
      $(".snake").hide();
      $(".beetle").hide();
    }
    else if($("#animal").val() === "Snake"){
      $(".turtle").hide();
      $(".snake").show();
      $(".beetle").hide();
    }
    else if($("#animal").val() === "Beetle"){
      $(".turtle").hide();
      $(".snake").hide();
      $(".beetle").show();
    }
    else{}
	});
});
