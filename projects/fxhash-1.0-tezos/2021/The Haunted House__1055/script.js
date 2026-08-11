function draw() {
  $("body").removeClass();
  $("body").get(0).style.setProperty("--positionX", (Math.round(fxrand()*600) - 300) + "px");
  $("body").get(0).style.setProperty("--positionY", (Math.round(fxrand()*300) - 200) + "px");
  
  $("#wrap, body").addClass('hide');
  $(".trigger").removeClass("clickme");
  setTimeout(function() {
    $("#wrap, body").removeClass("hide");
    $(".cell").removeClass();
    $("#wrap > div").addClass("cell");
    $("#wrap .cell").each(function() {
      $(this).addClass("cell" + Math.floor(fxrand() * 5 + 1));
    });
    $(".cell").each(function() {

      $(this)
        .get(0)
        .style.setProperty("--size", Math.floor(fxrand() * 9 + 2));

      
      $(this)
        .get(0)
        .style.setProperty("--angle", (Math.floor(fxrand() * 5) - 5) + "deg");
      
      $(this)
        .get(0)
        .style.setProperty("--angle2", (Math.floor(fxrand() * 3) - 3) + "deg");
      
    });
  }, 2000);
  
  
}

$(function() {
  draw();
  $(".trigger").on("click", function() {
    draw();
  });
});


