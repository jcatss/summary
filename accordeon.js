$(document).ready(function () {
  $(".notification").slideUp();
  $(function(){
    $(".p1").click(function () {
      $(".n1").slideToggle();
    });
  });
  $(function(){
    $(".p2").click(function () {
      $(".n2").slideToggle();
    });
  });
});