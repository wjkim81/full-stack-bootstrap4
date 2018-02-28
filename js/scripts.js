$(document).ready(function() {
  $("#mycarousel").carousel({interval: 2000});

  $("#carousel-button").click(function() {
    if ($("#carousel-button").children("span").hasClass("fa-pause")) {
      $("#mycarousel").carousel('pause');
      $("#carousel-button").children("span").removeClass("fa-pause");
      $("#carousel-button").children("span").addClass("fa-play");

    } else if ($("#carousel-button").children("span").hasClass("fa-play")) {
      $("#mycarousel").carousel('cycle');
      $("#carousel-button").children("span").removeClass("fa-play");
      $("#carousel-button").children("span").addClass("fa-pause");
    }
  });


  $('#reserve-button').click(function() {
    $('#reserveModal').modal('show');
  })

  $('#hideReserveModal1').click(function() {
    $('#reserveModal').modal('hide');
  })

  $('#hideReserveModal2').click(function() {
    $('#reserveModal').modal('hide');
  })
  
  $('#login-button').click(function() {
    $('#loginModal').modal('show');
  })

  $('#hideLoginModal1').click(function() {
    $('#loginModal').modal('hide');
  })

    $('#hideLoginModal2').click(function() {
    $('#loginModal').modal('hide');
  })
});

/*
    $(document).ready(function() {
      $('[data-toggle="tooltip"]').tooltip();
    });
*/